import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// console.log 모킹 (너무 많은 로그 방지)
const originalConsoleLog = console.log;
beforeEach(() => {
  console.log = vi.fn();
});

afterEach(() => {
  console.log = originalConsoleLog;
});

describe('App Integration Tests', () => {
  beforeEach(() => {
    // window.confirm 모킹
    window.confirm = vi.fn();
    window.alert = vi.fn();
  });

  describe('초기 렌더링', () => {
    it('초기 상태에서 Welcome 모드로 렌더링된다', () => {
      render(<App />);

      // Subject 컴포넌트
      expect(screen.getByText('WEB')).toBeInTheDocument();
      expect(screen.getByText('World Wid Web!')).toBeInTheDocument();

      // TOC 컴포넌트 (초기 contents)
      expect(screen.getByText('HTML')).toBeInTheDocument();
      expect(screen.getByText('CSS')).toBeInTheDocument();
      expect(screen.getByText('JavaScript')).toBeInTheDocument();

      // Control 컴포넌트
      expect(screen.getByText('create')).toBeInTheDocument();
      expect(screen.getByText('update')).toBeInTheDocument();
      expect(screen.getByText('delete')).toBeInTheDocument();

      // Welcome Content
      expect(screen.getByText('Welcome')).toBeInTheDocument();
      expect(screen.getByText('Hello, React!!')).toBeInTheDocument();
    });
  });

  describe('읽기 모드 테스트', () => {
    it('TOC에서 HTML 클릭 시 read 모드로 변경되고 HTML 내용이 표시된다', async () => {
      const user = userEvent.setup();
      render(<App />);

      const htmlLink = screen.getByText('HTML');
      await user.click(htmlLink);

      // Read 모드로 변경되어 HTML 내용 표시 - 고유한 내용으로 확인
      expect(screen.getByText('HTML is for information')).toBeInTheDocument();
    });

    it('TOC에서 CSS 클릭 시 CSS 내용이 표시된다', async () => {
      const user = userEvent.setup();
      render(<App />);

      const cssLink = screen.getByText('CSS');
      await user.click(cssLink);

      expect(screen.getByText('CSS is for design')).toBeInTheDocument();
    });

    it('Subject 클릭 시 Welcome 모드로 돌아간다', async () => {
      const user = userEvent.setup();
      render(<App />);

      // 먼저 read 모드로 변경
      await user.click(screen.getByText('HTML'));
      expect(screen.getByText('HTML is for information')).toBeInTheDocument();

      // Subject 클릭하여 Welcome으로 돌아가기
      await user.click(screen.getByText('WEB'));

      expect(screen.getByText('Welcome')).toBeInTheDocument();
      expect(screen.getByText('Hello, React!!')).toBeInTheDocument();
    });
  });

  describe('생성 모드 테스트', () => {
    it('create 버튼 클릭 시 CreateContent가 표시된다', async () => {
      const user = userEvent.setup();
      render(<App />);

      await user.click(screen.getByText('create'));

      expect(screen.getByText('Create')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('title')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('description')).toBeInTheDocument();
    });

    it('새 콘텐츠 생성 후 contents에 추가되고 read 모드로 변경된다', async () => {
      const user = userEvent.setup();
      render(<App />);

      // Create 모드로 변경
      await user.click(screen.getByText('create'));

      // 새 콘텐츠 입력
      const titleInput = screen.getByPlaceholderText('title');
      const descInput = screen.getByPlaceholderText('description');

      await user.type(titleInput, 'React');
      await user.type(descInput, 'React is a library');

      // 제출
      const submitButton = screen.getByRole('button', { name: /submit/i });
      await user.click(submitButton);

      // Read 모드로 변경되어 새 콘텐츠가 표시되는지 확인
      expect(screen.getByText('React is a library')).toBeInTheDocument();
    });
  });

  describe('수정 모드 테스트', () => {
    it('아무것도 선택하지 않고 update 클릭 시 경고 메시지가 표시된다', async () => {
      const user = userEvent.setup();
      render(<App />);

      await user.click(screen.getByText('update'));

      expect(window.alert).toHaveBeenCalledWith('Please select a subject first.');
    });

    it('콘텐츠 선택 후 update 클릭 시 UpdateContent가 표시된다', async () => {
      const user = userEvent.setup();
      render(<App />);

      // HTML 선택
      await user.click(screen.getByText('HTML'));

      // Update 버튼 클릭
      await user.click(screen.getByText('update'));

      expect(screen.getByText('Update')).toBeInTheDocument();
      expect(screen.getByDisplayValue('HTML')).toBeInTheDocument();
      expect(screen.getByDisplayValue('HTML is for information')).toBeInTheDocument();
    });

    it('콘텐츠 수정 후 변경사항이 반영된다', async () => {
      const user = userEvent.setup();
      render(<App />);

      // HTML 선택 후 Update 모드
      await user.click(screen.getByText('HTML'));
      await user.click(screen.getByText('update'));

      // 수정
      const titleInput = screen.getByDisplayValue('HTML');
      const descInput = screen.getByDisplayValue('HTML is for information');

      await user.clear(titleInput);
      await user.type(titleInput, 'HTML5');

      await user.clear(descInput);
      await user.type(descInput, 'HTML5 is the latest version');

      // 제출
      const submitButton = screen.getByRole('button', { name: /submit/i });
      await user.click(submitButton);

      // 변경사항 확인
      expect(screen.getByText('HTML5 is the latest version')).toBeInTheDocument();
    });
  });

  describe('삭제 모드 테스트', () => {
    it('아무것도 선택하지 않고 delete 클릭 시 경고 메시지가 표시된다', async () => {
      const user = userEvent.setup();
      render(<App />);

      await user.click(screen.getByText('delete'));

      expect(window.alert).toHaveBeenCalledWith('Please select a subject first.');
    });

    it('삭제 확인 시 콘텐츠가 삭제되고 Welcome 모드로 변경된다', async () => {
      const user = userEvent.setup();
      window.confirm.mockReturnValue(true); // 삭제 확인

      render(<App />);

      // CSS 선택
      await user.click(screen.getByText('CSS'));
      expect(screen.getByText('CSS is for design')).toBeInTheDocument();

      // 삭제 버튼 클릭
      await user.click(screen.getByText('delete'));

      expect(window.confirm).toHaveBeenCalledWith('really?');

      // Welcome 모드로 변경 확인
      expect(screen.getByText('Welcome')).toBeInTheDocument();
      expect(screen.getByText('Hello, React!!')).toBeInTheDocument();

      // TOC에서 CSS가 제거되었는지 확인 (다른 항목들은 있어야 함)
      expect(screen.getByText('HTML')).toBeInTheDocument();
      expect(screen.getByText('JavaScript')).toBeInTheDocument();
      // CSS는 삭제되어야 함 - queryByText로 확인
      expect(screen.queryByText('CSS is for design')).not.toBeInTheDocument();
    });

    it('삭제 취소 시 원래 상태가 유지된다', async () => {
      const user = userEvent.setup();
      window.confirm.mockReturnValue(false); // 삭제 취소

      render(<App />);

      // JavaScript 선택
      await user.click(screen.getByText('JavaScript'));
      expect(screen.getByText('JavaScript is for interactive')).toBeInTheDocument();

      // 삭제 시도하지만 취소
      await user.click(screen.getByText('delete'));

      expect(window.confirm).toHaveBeenCalledWith('really?');

      // 원래 상태 유지 확인
      expect(screen.getByText('JavaScript is for interactive')).toBeInTheDocument();
    });
  });

  describe('사용자 워크플로우 테스트', () => {
    it('전체 CRUD 워크플로우가 정상적으로 동작한다', async () => {
      const user = userEvent.setup();
      window.confirm.mockReturnValue(true); // 삭제 확인용

      render(<App />);

      // 1. 읽기: HTML 선택
      await user.click(screen.getByText('HTML'));
      expect(screen.getByText('HTML is for information')).toBeInTheDocument();

      // 2. 생성: 새 콘텐츠 추가
      await user.click(screen.getByText('create'));

      const titleInput = screen.getByPlaceholderText('title');
      const descInput = screen.getByPlaceholderText('description');

      await user.type(titleInput, 'Vue.js');
      await user.type(descInput, 'Vue.js is a framework');
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // 새 콘텐츠 확인
      expect(screen.getByText('Vue.js is a framework')).toBeInTheDocument();

      // 3. 수정: 방금 생성한 콘텐츠 수정
      await user.click(screen.getByText('update'));

      const updateTitleInput = screen.getByDisplayValue('Vue.js');
      await user.clear(updateTitleInput);
      await user.type(updateTitleInput, 'Vue 3');
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // 수정 확인
      // TOC에서 클릭이 가능한지 테스트
      const vueLinks = screen.getAllByText('Vue 3');
      await user.click(vueLinks[0]); // 첫 번째 링크 클릭
      expect(screen.getByText('Vue.js is a framework')).toBeInTheDocument();

      // 4. 삭제: 수정한 콘텐츠 삭제
      await user.click(screen.getByText('delete'));

      // Welcome 모드로 돌아감
      expect(screen.getByText('Welcome')).toBeInTheDocument();
      expect(screen.queryByText('Vue 3')).not.toBeInTheDocument();
    });
  });

  describe('상태 관리 테스트', () => {
    it('max_content_id가 올바르게 증가한다', async () => {
      const user = userEvent.setup();
      render(<App />);

      // 첫 번째 콘텐츠 생성
      await user.click(screen.getByText('create'));
      await user.type(screen.getByPlaceholderText('title'), 'First New');
      await user.type(screen.getByPlaceholderText('description'), 'First Description');
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // 두 번째 콘텐츠 생성
      await user.click(screen.getByText('create'));
      await user.type(screen.getByPlaceholderText('title'), 'Second New');
      await user.type(screen.getByPlaceholderText('description'), 'Second Description');
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // TOC에서 실제로 클릭 가능한지 테스트 (기능 검증)
      const firstLinks = screen.getAllByText('First New');
      await user.click(firstLinks[0]); // TOC의 첫 번째 링크
      expect(screen.getByText('First Description')).toBeInTheDocument();

      const secondLinks = screen.getAllByText('Second New');
      await user.click(secondLinks[0]); // TOC의 첫 번째 링크
      expect(screen.getByText('Second Description')).toBeInTheDocument();
    });
  });
});
