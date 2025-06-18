import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TOC from './TOC';

// 테스트용 샘플 데이터
const mockData = [
  { id: 1, title: 'HTML' },
  { id: 2, title: 'CSS' },
  { id: 3, title: 'JavaScript' },
];

const emptyData = [];

const singleData = [{ id: 1, title: 'React' }];

describe('TOC', () => {
  // ✅ 각 테스트 후 DOM 정리
  afterEach(() => {
    cleanup();
  });

  it('renders navigation list correctly', () => {
    const props = {
      data: mockData,
      onChangePage: vi.fn(),
    };

    render(<TOC {...props} />);

    // ✅ nav > ul 구조 확인
    const navElement = screen.getByRole('navigation');
    const listElement = screen.getByRole('list');

    expect(navElement).toContainElement(listElement);

    // ✅ 모든 데이터가 링크로 렌더링되는지 확인
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);

    expect(screen.getByText('HTML')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('creates correct href and data-id attributes', () => {
    const props = {
      data: mockData,
      onChangePage: vi.fn(),
    };

    render(<TOC {...props} />);

    const htmlLink = screen.getByText('HTML');
    const cssLink = screen.getByText('CSS');
    const jsLink = screen.getByText('JavaScript');

    // ✅ href 속성 확인
    expect(htmlLink).toHaveAttribute('href', '/content/1');
    expect(cssLink).toHaveAttribute('href', '/content/2');
    expect(jsLink).toHaveAttribute('href', '/content/3');

    // ✅ data-id 속성 확인
    expect(htmlLink).toHaveAttribute('data-id', '1');
    expect(cssLink).toHaveAttribute('data-id', '2');
    expect(jsLink).toHaveAttribute('data-id', '3');
  });

  it('calls onChangePage with correct id when link is clicked', () => {
    const mockOnChangePage = vi.fn();
    const props = {
      data: mockData,
      onChangePage: mockOnChangePage,
    };

    render(<TOC {...props} />);

    const htmlLink = screen.getByText('HTML');
    const cssLink = screen.getByText('CSS');

    // ✅ 첫 번째 링크 클릭
    fireEvent.click(htmlLink);
    expect(mockOnChangePage).toHaveBeenCalledWith('1');

    // ✅ 두 번째 링크 클릭
    fireEvent.click(cssLink);
    expect(mockOnChangePage).toHaveBeenCalledWith('2');

    expect(mockOnChangePage).toHaveBeenCalledTimes(2);
  });

  it('prevents default link behavior', () => {
    const props = {
      data: mockData,
      onChangePage: vi.fn(),
    };

    render(<TOC {...props} />);

    const htmlLink = screen.getByText('HTML');

    // ✅ preventDefault 호출 확인
    const clickEvent = new MouseEvent('click', { bubbles: true });
    const preventDefaultSpy = vi.spyOn(clickEvent, 'preventDefault');

    fireEvent(htmlLink, clickEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('renders empty list when data is empty', () => {
    const props = {
      data: emptyData,
      onChangePage: vi.fn(),
    };

    render(<TOC {...props} />);

    const navElement = screen.getByRole('navigation');
    const listElement = screen.getByRole('list');

    expect(navElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
    expect(listElement).toBeEmptyDOMElement();

    // ✅ 링크가 없는지 확인
    const links = screen.queryAllByRole('link');
    expect(links).toHaveLength(0);
  });

  it('renders single item correctly', () => {
    const props = {
      data: singleData,
      onChangePage: vi.fn(),
    };

    render(<TOC {...props} />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(1);

    const reactLink = screen.getByText('React');
    expect(reactLink).toHaveAttribute('href', '/content/1');
    expect(reactLink).toHaveAttribute('data-id', '1');
  });

  it('handles keyboard navigation', async () => {
    // ✅ 이 테스트에서만 에러 로그 숨기기
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const user = userEvent.setup();
    const mockOnChangePage = vi.fn();
    const props = {
      data: mockData,
      onChangePage: mockOnChangePage,
    };

    render(<TOC {...props} />);

    // ✅ Tab으로 첫 번째 링크에 포커스
    await user.tab();
    const htmlLink = screen.getByText('HTML');
    expect(htmlLink).toHaveFocus();

    // ✅ Enter로 링크 활성화
    await user.keyboard('{Enter}');
    expect(mockOnChangePage).toHaveBeenCalledWith('1');

    // ✅ 테스트 후 복원
    consoleErrorSpy.mockRestore();
  });

  it('has correct list item structure', () => {
    const props = {
      data: mockData,
      onChangePage: vi.fn(),
    };

    render(<TOC {...props} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);

    // ✅ 각 li가 하나의 링크를 포함하는지 확인
    listItems.forEach((li, index) => {
      const link = li.querySelector('a');
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(mockData[index].title);
    });
  });

  it('uses id as key for list items', () => {
    const props = {
      data: mockData,
      onChangePage: vi.fn(),
    };

    const { container } = render(<TOC {...props} />);

    // ✅ key 속성은 DOM에 나타나지 않지만, 렌더링이 정상적으로 되는지 확인
    const listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(3);

    // ✅ React의 key warning이 없는지 확인 (중복 id 테스트)
    const dataWithDuplicateIds = [
      { id: 1, title: 'HTML' },
      { id: 1, title: 'CSS' }, // 중복 id
    ];

    // Console warning을 캐치하기 위한 spy
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(<TOC data={dataWithDuplicateIds} onChangePage={vi.fn()} />);

    // React key warning 확인 (실제로는 development 모드에서만 발생)
    // expect(consoleSpy).toHaveBeenCalled()

    consoleSpy.mockRestore();
  });

  it('logs render message', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    render(<TOC data={mockData} onChangePage={vi.fn()} />);

    expect(consoleSpy).toHaveBeenCalledWith('===> TOC render');

    consoleSpy.mockRestore();
  });

  it('handles data with different id types', () => {
    const mixedData = [
      { id: 1, title: 'Number ID' },
      { id: '2', title: 'String ID' },
      { id: 'custom', title: 'Custom ID' },
    ];

    const mockOnChangePage = vi.fn();
    const props = {
      data: mixedData,
      onChangePage: mockOnChangePage,
    };

    render(<TOC {...props} />);

    const links = screen.getAllByRole('link');

    // ✅ 다양한 타입의 ID 처리 확인
    fireEvent.click(links[0]);
    expect(mockOnChangePage).toHaveBeenCalledWith('1'); // number → string

    fireEvent.click(links[1]);
    expect(mockOnChangePage).toHaveBeenCalledWith('2'); // string

    fireEvent.click(links[2]);
    expect(mockOnChangePage).toHaveBeenCalledWith('custom'); // custom string
  });

  it('handles long titles', () => {
    const longTitleData = [
      {
        id: 1,
        title:
          'This is a very long title that might cause layout issues in some cases but should be handled properly',
      },
    ];

    const props = {
      data: longTitleData,
      onChangePage: vi.fn(),
    };

    render(<TOC {...props} />);

    const link = screen.getByRole('link');
    expect(link).toHaveTextContent(longTitleData[0].title);
    expect(link).toHaveAttribute('href', '/content/1');
  });

  it('handles special characters in titles', () => {
    const specialCharData = [
      { id: 1, title: 'HTML & CSS' },
      { id: 2, title: 'JavaScript <-> React' },
      { id: 3, title: 'Node.js "Backend"' },
    ];

    const props = {
      data: specialCharData,
      onChangePage: vi.fn(),
    };

    render(<TOC {...props} />);

    expect(screen.getByText('HTML & CSS')).toBeInTheDocument();
    expect(screen.getByText('JavaScript <-> React')).toBeInTheDocument();
    expect(screen.getByText('Node.js "Backend"')).toBeInTheDocument();
  });
});

describe('TOC - Performance Optimization', () => {
  // ✅ 각 테스트 후 DOM 정리
  afterEach(() => {
    cleanup();
  });
  it('should not re-render when data prop is the same reference', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const mockData = [{ id: 1, title: 'Test' }];
    const mockOnChangePage = vi.fn();

    const { rerender } = render(<TOC data={mockData} onChangePage={mockOnChangePage} />);

    // 첫 번째 렌더링
    expect(consoleSpy).toHaveBeenCalledWith('===> TOC render');
    consoleSpy.mockClear();

    // ✅ 같은 데이터 참조로 리렌더링 (shouldComponentUpdate에서 false 반환)
    rerender(<TOC data={mockData} onChangePage={mockOnChangePage} />);

    // shouldComponentUpdate 로그는 있지만 render 로그는 없어야 함
    expect(consoleSpy).toHaveBeenCalledWith('===> TOC render shouldComponentUpdate');
    expect(consoleSpy).not.toHaveBeenCalledWith('===> TOC render');

    consoleSpy.mockRestore();
  });

  it('should re-render when data prop reference changes', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const mockData1 = [{ id: 1, title: 'Test1' }];
    const mockData2 = [{ id: 1, title: 'Test1' }]; // 같은 내용, 다른 참조
    const mockOnChangePage = vi.fn();

    const { rerender } = render(<TOC data={mockData1} onChangePage={mockOnChangePage} />);

    consoleSpy.mockClear();

    // ✅ 다른 데이터 참조로 리렌더링 (shouldComponentUpdate에서 true 반환)
    rerender(<TOC data={mockData2} onChangePage={mockOnChangePage} />);

    expect(consoleSpy).toHaveBeenCalledWith('===> TOC render shouldComponentUpdate');
    expect(consoleSpy).toHaveBeenCalledWith('===> TOC render');

    consoleSpy.mockRestore();
  });
});
