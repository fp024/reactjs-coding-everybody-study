import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CreateContent from './CreateContent';
import userEvent from '@testing-library/user-event';

describe('CreateContent', () => {
  it('renders create form with all elements', () => {
    const mockOnSubmit = vi.fn();

    render(<CreateContent onSubmit={mockOnSubmit} />);

    // 제목과 폼 요소들이 렌더링되는지 확인
    expect(screen.getByText('Create')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('has correct form attributes', () => {
    const mockOnSubmit = vi.fn();

    render(<CreateContent onSubmit={mockOnSubmit} />);

    const form = document.querySelector('form');
    expect(form).toHaveAttribute('action', '/create_process');
    expect(form).toHaveAttribute('method', 'post');
  });

  it('calls onSubmit with title and description when form is submitted - legacy', async () => {
    const user = userEvent.setup();
    const mockOnSubmit = vi.fn();

    render(<CreateContent onSubmit={mockOnSubmit} />);

    const titleInput = screen.getByPlaceholderText('title');
    const descInput = screen.getByPlaceholderText('description');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // ✅ 사용자 입력 시뮬레이션
    await user.type(titleInput, '테스트 제목');
    await user.type(descInput, '테스트 설명');

    // --- 문제 해결을 위한 핵심 수정 부분 ---
    // 폼 제출 시 e.target에 .desc와 .title 속성이 올바른 value를 반환하도록 모의
    // JSDOM 환경에서 e.target[name].value 접근이 불안정할 때 사용
    const formElement = submitButton.closest('form'); // 폼 요소를 가져옵니다.

    if (formElement) {
      Object.defineProperty(formElement, 'title', {
        configurable: true, // 속성 재정의 가능하게 설정
        get: () => ({ value: titleInput.value }), // input의 현재 value를 반환하도록 모의
      });
      Object.defineProperty(formElement, 'desc', {
        configurable: true,
        get: () => ({ value: descInput.value }), // textarea의 현재 value를 반환하도록 모의
      });
    }
    // --- 핵심 수정 부분 끝 ---

    // ✅ 실제 사용자처럼 클릭
    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith('테스트 제목', '테스트 설명');
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);

    // 테스트가 끝나면 모의했던 속성을 원래대로 복원 (선택 사항이지만 좋은 습관)
    if (formElement && Object.prototype.hasOwnProperty.call(formElement, 'title')) {
      delete formElement.title;
    }
    if (formElement && Object.prototype.hasOwnProperty.call(formElement, 'desc')) {
      delete formElement.desc;
    }
  });

  it('calls onSubmit with title and description when form is submitted - legacy', async () => {
    const user = userEvent.setup();
    const mockOnSubmit = vi.fn();

    render(<CreateContent onSubmit={mockOnSubmit} />);

    const titleInput = screen.getByPlaceholderText('title');
    const descInput = screen.getByPlaceholderText('description');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // ✅ 사용자 입력 시뮬레이션
    await user.type(titleInput, '테스트 제목');
    await user.type(descInput, '테스트 설명');

    // ✅ 실제 사용자처럼 클릭
    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith('테스트 제목', '테스트 설명');
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('calls onSubmit with empty values when form is submitted without input', () => {
    const mockOnSubmit = vi.fn();

    render(<CreateContent onSubmit={mockOnSubmit} />);

    const submitButton = screen.getByRole('button', { name: /submit/i });

    // 빈 값으로 폼 제출
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith('', '');
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('prevents default form submission behavior', () => {
    const mockOnSubmit = vi.fn();

    render(<CreateContent onSubmit={mockOnSubmit} />);

    const form = document.querySelector('form');
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    const preventDefaultSpy = vi.spyOn(submitEvent, 'preventDefault');

    fireEvent(form, submitEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('allows user to type in title input', () => {
    const mockOnSubmit = vi.fn();

    render(<CreateContent onSubmit={mockOnSubmit} />);

    const titleInput = screen.getByPlaceholderText('title');

    fireEvent.change(titleInput, { target: { value: '새로운 제목' } });

    expect(titleInput.value).toBe('새로운 제목');
  });

  it('allows user to type in description textarea', () => {
    const mockOnSubmit = vi.fn();

    render(<CreateContent onSubmit={mockOnSubmit} />);

    const descInput = screen.getByPlaceholderText('description');

    fireEvent.change(descInput, { target: { value: '새로운 설명입니다.' } });

    expect(descInput.value).toBe('새로운 설명입니다.');
  });

  it('renders correct HTML structure', () => {
    const mockOnSubmit = vi.fn();

    render(<CreateContent onSubmit={mockOnSubmit} />);

    // article 요소 확인
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();

    // h2 제목 확인
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Create');

    // 폼 확인
    const form = document.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  it('has correct input types and names', () => {
    const mockOnSubmit = vi.fn();

    render(<CreateContent onSubmit={mockOnSubmit} />);

    const titleInput = screen.getByPlaceholderText('title');
    const descInput = screen.getByPlaceholderText('description');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(titleInput).toHaveAttribute('type', 'text');
    expect(titleInput).toHaveAttribute('name', 'title');
    expect(descInput).toHaveAttribute('name', 'desc');
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});
