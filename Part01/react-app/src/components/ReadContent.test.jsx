import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ReadContent from './ReadContent';

describe('ReadContent', () => {
  it('renders title and description correctly', () => {
    const props = {
      title: '테스트 제목',
      desc: '테스트 설명입니다.',
    };

    render(<ReadContent {...props} />);

    // ✅ 제목이 h2 태그로 렌더링되는지 확인
    const titleElement = screen.getByRole('heading', { level: 2 });
    expect(titleElement).toHaveTextContent('테스트 제목');

    // ✅ 설명이 article 내에 렌더링되는지 확인
    const articleElement = screen.getByRole('article');
    expect(articleElement).toHaveTextContent('테스트 설명입니다.');
  });

  it('renders with empty props', () => {
    const props = {
      title: '',
      desc: '',
    };

    render(<ReadContent {...props} />);

    const titleElement = screen.getByRole('heading', { level: 2 });
    const articleElement = screen.getByRole('article');

    expect(titleElement).toHaveTextContent('');
    expect(articleElement).toBeInTheDocument();
  });

  it('renders with undefined props', () => {
    render(<ReadContent />);

    const titleElement = screen.getByRole('heading', { level: 2 });
    const articleElement = screen.getByRole('article');

    expect(titleElement).toBeInTheDocument();
    expect(articleElement).toBeInTheDocument();
  });

  it('renders multiline description correctly', () => {
    const props = {
      title: '멀티라인 테스트',
      desc: '첫 번째 줄\n두 번째 줄\n세 번째 줄',
    };

    render(<ReadContent {...props} />);

    const articleElement = screen.getByRole('article');
    // 💡 입력된 개행에 대해 특별한 <br>처리가 없어서 공백으로 나타난다.
    expect(articleElement).toHaveTextContent('첫 번째 줄 두 번째 줄 세 번째 줄');
  });

  it('renders HTML entities correctly', () => {
    const props = {
      title: 'HTML & 특수문자 <테스트>',
      desc: '설명에 & < > " \' 특수문자 포함',
    };

    render(<ReadContent {...props} />);

    const titleElement = screen.getByRole('heading', { level: 2 });
    const articleElement = screen.getByRole('article');

    expect(titleElement).toHaveTextContent('HTML & 특수문자 <테스트>');
    expect(articleElement).toHaveTextContent('설명에 & < > " \' 특수문자 포함');
  });

  it('has correct DOM structure', () => {
    const props = {
      title: '구조 테스트',
      desc: '구조 확인용 설명',
    };

    render(<ReadContent {...props} />);

    const articleElement = screen.getByRole('article');
    const titleElement = screen.getByRole('heading', { level: 2 });

    // ✅ article이 최상위 요소인지 확인
    expect(articleElement).toBeInTheDocument();

    // ✅ h2가 article 내부에 있는지 확인
    expect(articleElement).toContainElement(titleElement);

    // ✅ article 내부 구조 확인
    // ✅ 정확한 구조 검증
    expect(articleElement.children).toHaveLength(1); // h2 element만
    expect(articleElement.childNodes).toHaveLength(2); // h2 + text node

    // ✅ 첫 번째는 h2, 두 번째는 text node
    expect(articleElement.childNodes[0].tagName).toBe('H2');
    expect(articleElement.childNodes[1].nodeType).toBe(Node.TEXT_NODE);
    expect(articleElement.childNodes[1].textContent).toBe('구조 확인용 설명');
  });

  it('logs render message to console', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    render(<ReadContent title="콘솔 테스트" desc="콘솔 확인" />);

    expect(consoleSpy).toHaveBeenCalledWith('ReadContent render');

    consoleSpy.mockRestore();
  });

  it('handles long content correctly', () => {
    const longTitle = 'A'.repeat(100);
    const longDesc = 'B'.repeat(1000);

    const props = {
      title: longTitle,
      desc: longDesc,
    };

    render(<ReadContent {...props} />);

    const titleElement = screen.getByRole('heading', { level: 2 });
    const articleElement = screen.getByRole('article');

    expect(titleElement).toHaveTextContent(longTitle);
    expect(articleElement).toHaveTextContent(longDesc);
  });

  it('renders JSX elements in description', () => {
    const props = {
      title: 'JSX 테스트',
      desc: <span>JSX로 된 설명입니다.</span>,
    };

    render(<ReadContent {...props} />);

    const spanElement = screen.getByText('JSX로 된 설명입니다.');
    expect(spanElement.tagName).toBe('SPAN');
  });
});
