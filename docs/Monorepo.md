# Monorepo (모노레포) 설명

## 개념

**Monorepo**는 여러 프로젝트/패키지를 **하나의 저장소(repository)**에서 관리하는 코드 구성 방식입니다.

**반대 개념:** Polyrepo (각 프로젝트마다 별도 저장소)

## 구조 예시

```
reactjs-coding-everybody-study/          # 루트
├── package.json                         # 루트 설정
├── pnpm-workspace.yaml                  # 워크스페이스 정의
├── pnpm-lock.yaml                       # 통합 락 파일
├── Part01/react-app/                    # 프로젝트 1
│   └── package.json
├── Part02/react-func-class-style-coding/ # 프로젝트 2
│   └── package.json
└── Part03/react-router-dom-example/     # 프로젝트 3
    └── package.json
```

## Convention over Configuration (CoC)

모노레포는 **강한 CoC 철학**을 따릅니다:

### 1. **단일 버전 관리**
```yaml
# 루트에만 packageManager 정의
packageManager: "pnpm@10.26.0"
```
- 모든 하위 프로젝트가 동일한 패키지 매니저 버전 사용
- 설정 중복 불필요

### 2. **통합 의존성 관리**
```yaml
# pnpm-lock.yaml 하나로 전체 관리
- 버전 충돌 방지
- 중복 설치 최소화
```

### 3. **워크스페이스 패턴**
```yaml
packages:
  - 'Part01/*'
  - 'Part02/*'
```
- 명명 규칙만 지키면 자동 인식
- 수동 등록 불필요

### 4. **공유 설정**
```
루트의 설정이 하위로 자동 상속:
- .prettierrc
- .eslintrc
- tsconfig.json (extends)
- pnpm-workspace.yaml
```

## 주요 장점

### ✅ **코드 재사용**
```javascript
// 공통 라이브러리를 workspace로 공유
import { utils } from '@workspace/common';
```

### ✅ **일관된 의존성**
```json
// 모든 프로젝트가 동일한 React 버전 사용
"react": "^18.2.0"
```

### ✅ **원자적 커밋**
```bash
# 여러 프로젝트를 동시에 변경하는 커밋 가능
git commit -m "feat: 모든 프로젝트에 새 기능 추가"
```

### ✅ **간편한 리팩토링**
- 한 번에 여러 프로젝트 수정 가능
- IDE에서 전체 검색/바꾸기 용이

### ✅ **통합 빌드/테스트**
```bash
pnpm -r build    # 모든 프로젝트 빌드
pnpm -r test     # 모든 프로젝트 테스트
```

## 주요 단점

### ❌ **큰 저장소 크기**
- git clone 시간 증가
- 전체 히스토리 다운로드 필요

### ❌ **빌드 시간**
- 작은 변경에도 전체 빌드 필요할 수 있음

### ❌ **접근 권한 관리 어려움**
- 팀별 프로젝트 분리가 어려움

### ❌ **학습 곡선**
- 워크스페이스 개념 이해 필요
- 툴 설정이 복잡할 수 있음

## pnpm 모노레포 핵심 명령어

```bash
# 전체 설치
pnpm install -r

# 특정 워크스페이스만
pnpm --filter react-app install

# 전체 빌드
pnpm -r build

# 특정 프로젝트 실행
pnpm --filter react-app dev

# 의존성 업데이트
pnpm -r update

# 워크스페이스 간 의존성 추가
pnpm --filter react-app add @workspace/common
```

## 유명 모노레포 사례

- **Google** - 전체 코드베이스가 단일 모노레포
- **Facebook/Meta** - React, React Native 등
- **Microsoft** - VS Code 확장들
- **Vercel** - Next.js, Turborepo
- **Babel** - 모든 플러그인들

## 모노레포 도구

| 도구 | 특징 |
|------|------|
| **pnpm** | 빠른 설치, workspace 지원 |
| **Nx** | 강력한 빌드 캐싱, 의존성 그래프 |
| **Turborepo** | 병렬 빌드, 원격 캐싱 |
| **Lerna** | 레거시, 현재는 Nx로 통합 |
| **Yarn Workspaces** | Yarn의 기본 기능 |

## 언제 사용할까?

### ✅ 모노레포 적합:
- 관련된 여러 프로젝트
- 코드 공유가 많은 경우
- 동시에 변경이 자주 발생
- 일관된 버전 관리 필요

### ❌ 모노레포 부적합:
- 완전히 독립적인 프로젝트들
- 팀 간 격리 필요
- 작은 프로젝트 하나
- 보안/접근 권한이 중요

---

**요약:** 모노레포는 "설정보다 관습"을 따라 **루트 하나로 전체를 통제**하며, 코드 공유와 일관성을 극대화하는 CoC 방식입니다! 🚀