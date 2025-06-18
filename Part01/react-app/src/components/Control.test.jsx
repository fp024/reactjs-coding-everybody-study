import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Control from './Control';

describe('Control', () => {
  it('renders all control elements', () => {
    const mockOnChangeMode = vi.fn();

    render(<Control onChangeMode={mockOnChangeMode} />);

    // 모든 요소가 렌더링되는지 확인
    expect(screen.getByText('create')).toBeInTheDocument();
    expect(screen.getByText('update')).toBeInTheDocument();
    expect(screen.getByDisplayValue('delete')).toBeInTheDocument();
  });

  it('calls onChangeMode with "create" when create link is clicked', () => {
    const mockOnChangeMode = vi.fn();

    render(<Control onChangeMode={mockOnChangeMode} />);

    const createLink = screen.getByText('create');
    fireEvent.click(createLink);

    expect(mockOnChangeMode).toHaveBeenCalledWith('create');
    expect(mockOnChangeMode).toHaveBeenCalledTimes(1);
  });

  it('calls onChangeMode with "update" when update link is clicked', () => {
    const mockOnChangeMode = vi.fn();

    render(<Control onChangeMode={mockOnChangeMode} />);

    const updateLink = screen.getByText('update');
    fireEvent.click(updateLink);

    expect(mockOnChangeMode).toHaveBeenCalledWith('update');
    expect(mockOnChangeMode).toHaveBeenCalledTimes(1);
  });

  it('calls onChangeMode with "delete" when delete button is clicked', () => {
    const mockOnChangeMode = vi.fn();

    render(<Control onChangeMode={mockOnChangeMode} />);

    const deleteButton = screen.getByDisplayValue('delete');
    fireEvent.click(deleteButton);

    expect(mockOnChangeMode).toHaveBeenCalledWith('delete');
    expect(mockOnChangeMode).toHaveBeenCalledTimes(1);
  });

  it('prevents default behavior on link clicks', () => {
    const mockOnChangeMode = vi.fn();

    render(<Control onChangeMode={mockOnChangeMode} />);

    const createLink = screen.getByText('create');
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    const preventDefaultSpy = vi.spyOn(clickEvent, 'preventDefault');

    fireEvent(createLink, clickEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('renders correct structure', () => {
    const mockOnChangeMode = vi.fn();

    render(<Control onChangeMode={mockOnChangeMode} />);

    // ul 요소가 있는지 확인
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    // 3개의 li 요소가 있는지 확인
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
});
