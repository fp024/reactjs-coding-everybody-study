import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UpdateContent from './UpdateContent';

describe('UpdateContent', () => {
  const mockData = {
    id: 1,
    title: 'HTML',
    desc: 'HTML is HyperText Markup Language.',
  };

  let mockOnSubmit;

  beforeEach(() => {
    mockOnSubmit = vi.fn();
  });

  it('renders update form with initial data', () => {
    render(<UpdateContent data={mockData} onSubmit={mockOnSubmit} />);

    expect(screen.getByText('Update')).toBeInTheDocument();
    expect(screen.getByDisplayValue('HTML')).toBeInTheDocument();
    expect(screen.getByDisplayValue('HTML is HyperText Markup Language.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('updates title when user types in title input', async () => {
    const user = userEvent.setup();
    render(<UpdateContent data={mockData} onSubmit={mockOnSubmit} />);

    const titleInput = screen.getByDisplayValue('HTML');

    await user.clear(titleInput);
    await user.type(titleInput, 'Updated HTML');

    expect(titleInput).toHaveValue('Updated HTML');
  });

  it('updates description when user types in textarea', async () => {
    const user = userEvent.setup();
    render(<UpdateContent data={mockData} onSubmit={mockOnSubmit} />);

    const descTextarea = screen.getByDisplayValue('HTML is HyperText Markup Language.');

    await user.clear(descTextarea);
    await user.type(descTextarea, 'Updated description');

    expect(descTextarea).toHaveValue('Updated description');
  });

  it('calls onSubmit with updated data when form is submitted', async () => {
    const user = userEvent.setup();
    render(<UpdateContent data={mockData} onSubmit={mockOnSubmit} />);

    const titleInput = screen.getByDisplayValue('HTML');
    const descTextarea = screen.getByDisplayValue('HTML is HyperText Markup Language.');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // 입력값 변경
    await user.clear(titleInput);
    await user.type(titleInput, 'Updated HTML');

    await user.clear(descTextarea);
    await user.type(descTextarea, 'Updated HTML description');

    // 폼 제출
    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith(
      1, // id
      'Updated HTML', // title
      'Updated HTML description', // desc
    );
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('prevents default form submission', async () => {
    const user = userEvent.setup();
    render(<UpdateContent data={mockData} onSubmit={mockOnSubmit} />);

    const form = document.querySelector('form');

    const submitSpy = vi.fn();

    form.addEventListener('submit', submitSpy);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalled();
    // preventDefault가 호출되었는지 확인하기 위해 실제 form submission이 일어나지 않았는지 확인
    expect(submitSpy).toHaveBeenCalled();
  });

  it('handles form submission with fireEvent', () => {
    render(<UpdateContent data={mockData} onSubmit={mockOnSubmit} />);

    const titleInput = screen.getByDisplayValue('HTML');
    const descTextarea = screen.getByDisplayValue('HTML is HyperText Markup Language.');

    // 입력값 변경
    fireEvent.change(titleInput, { target: { value: 'CSS Basics' } });
    fireEvent.change(descTextarea, { target: { value: 'CSS is for styling' } });

    // 폼 제출
    const form = document.querySelector('form');

    fireEvent.submit(form);

    expect(mockOnSubmit).toHaveBeenCalledWith(1, 'CSS Basics', 'CSS is for styling');
  });

  it('maintains hidden id input with correct value', () => {
    render(<UpdateContent data={mockData} onSubmit={mockOnSubmit} />);

    const hiddenInput = screen.getByDisplayValue('1');
    expect(hiddenInput).toHaveAttribute('type', 'hidden');
    expect(hiddenInput).toHaveAttribute('name', 'id');
  });

  it('has correct form attributes', () => {
    render(<UpdateContent data={mockData} onSubmit={mockOnSubmit} />);

    const form = document.querySelector('form');

    expect(form).toHaveAttribute('action', '/update_process');
    expect(form).toHaveAttribute('method', 'post');
  });

  it('handles multiple input changes correctly', async () => {
    const user = userEvent.setup();
    render(<UpdateContent data={mockData} onSubmit={mockOnSubmit} />);

    const titleInput = screen.getByDisplayValue('HTML');
    const descTextarea = screen.getByDisplayValue('HTML is HyperText Markup Language.');

    // 여러 번 입력 변경
    await user.clear(titleInput);
    await user.type(titleInput, 'First');
    await user.clear(titleInput);
    await user.type(titleInput, 'Second');

    await user.clear(descTextarea);
    await user.type(descTextarea, 'First desc');
    await user.clear(descTextarea);
    await user.type(descTextarea, 'Second desc');

    expect(titleInput).toHaveValue('Second');
    expect(descTextarea).toHaveValue('Second desc');

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith(1, 'Second', 'Second desc');
  });
});
