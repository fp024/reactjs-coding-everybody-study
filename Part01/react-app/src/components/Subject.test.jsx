import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Subject from './Subject';

describe('Subject', () => {
  it('renders title and subtitle correctly', () => {
    const props = {
      title: '메인 제목',
      sub: '부제목입니다',
      onChangePage: vi.fn(),
    };

    render(<Subject {...props} />);

    // ✅ 제목이 h1 > a 구조로 렌더링되는지 확인
    const titleLink = screen.getByRole('link', { name: '메인 제목' });
    expect(titleLink).toHaveTextContent('메인 제목');
    expect(titleLink).toHaveAttribute('href', '/');

    // ✅ 부제목이 header 내에 렌더링되는지 확인
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveTextContent('부제목입니다');
  });

  it('calls onChangePage when title link is clicked', () => {
    const mockOnChangePage = vi.fn();
    const props = {
      title: '클릭 테스트',
      sub: '부제목',
      onChangePage: mockOnChangePage,
    };

    render(<Subject {...props} />);

    const titleLink = screen.getByRole('link', { name: '클릭 테스트' });

    // ✅ 링크 클릭 시 onChangePage 호출되는지 확인
    fireEvent.click(titleLink);

    expect(mockOnChangePage).toHaveBeenCalledTimes(1);
  });

  it('prevents default link behavior when clicked', () => {
    const mockOnChangePage = vi.fn();
    const props = {
      title: '기본동작 방지 테스트',
      sub: '부제목',
      onChangePage: mockOnChangePage,
    };

    render(<Subject {...props} />);

    const titleLink = screen.getByRole('link');

    // ✅ preventDefault가 호출되는지 확인
    const clickEvent = new MouseEvent('click', { bubbles: true });
    const preventDefaultSpy = vi.spyOn(clickEvent, 'preventDefault');

    fireEvent(titleLink, clickEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('renders with empty props', () => {
    const props = {
      title: '',
      sub: '',
      onChangePage: vi.fn(),
    };

    render(<Subject {...props} />);

    const titleLink = screen.getByRole('link');
    const headerElement = screen.getByRole('banner');

    expect(titleLink).toHaveTextContent('');
    expect(titleLink).toHaveAttribute('href', '/');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders without subtitle', () => {
    const props = {
      title: '제목만 있는 테스트',
      onChangePage: vi.fn(),
    };

    render(<Subject {...props} />);

    const titleLink = screen.getByRole('link', { name: '제목만 있는 테스트' });
    const headerElement = screen.getByRole('banner');

    expect(titleLink).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('제목만 있는 테스트');
  });

  it('renders JSX elements in subtitle', () => {
    const props = {
      title: 'JSX 테스트',
      sub: <span className="subtitle">JSX 부제목</span>,
      onChangePage: vi.fn(),
    };

    render(<Subject {...props} />);

    const subtitleElement = screen.getByText('JSX 부제목');
    expect(subtitleElement.tagName).toBe('SPAN');
    expect(subtitleElement).toHaveClass('subtitle');
  });

  it('has correct DOM structure', () => {
    const props = {
      title: '구조 테스트',
      sub: '구조 확인용 부제목',
      onChangePage: vi.fn(),
    };

    render(<Subject {...props} />);

    const headerElement = screen.getByRole('banner');
    const h1Element = screen.getByRole('heading', { level: 1 });
    const linkElement = screen.getByRole('link');

    // ✅ header > h1 > a 구조 확인
    expect(headerElement).toContainElement(h1Element);
    expect(h1Element).toContainElement(linkElement);

    // ✅ header 내부 구조 확인 (h1 + text node)
    expect(headerElement.children).toHaveLength(1); // h1 element만
    expect(headerElement.childNodes).toHaveLength(2); // h1 + text node
    expect(headerElement.firstElementChild.tagName).toBe('H1');
  });

  it('logs render message to console', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    render(<Subject title="콘솔 테스트" sub="부제목" onChangePage={vi.fn()} />);

    expect(consoleSpy).toHaveBeenCalledWith('Subject render');

    consoleSpy.mockRestore();
  });

  it('handles keyboard navigation correctly', async () => {
    const user = userEvent.setup();
    const mockOnChangePage = vi.fn();
    const props = {
      title: '키보드 테스트',
      sub: '부제목',
      onChangePage: mockOnChangePage,
    };

    render(<Subject {...props} />);

    const titleLink = screen.getByRole('link');

    // ✅ 실제 키보드 네비게이션 테스트
    await user.tab(); // 링크로 포커스 이동
    expect(titleLink).toHaveFocus();

    await user.keyboard('{Enter}'); // Enter로 활성화

    expect(mockOnChangePage).toHaveBeenCalledTimes(1);
  });

  it('handles long title and subtitle', () => {
    const longTitle = 'A'.repeat(100);
    const longSubtitle = 'B'.repeat(500);

    const props = {
      title: longTitle,
      sub: longSubtitle,
      onChangePage: vi.fn(),
    };

    render(<Subject {...props} />);

    const titleLink = screen.getByRole('link');
    const headerElement = screen.getByRole('banner');

    expect(titleLink).toHaveTextContent(longTitle);
    expect(headerElement).toHaveTextContent(longSubtitle);
  });
});
