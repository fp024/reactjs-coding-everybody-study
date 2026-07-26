#### 03. [React Router DOM](../README.md) >>>

---

## 02. 실습 준비

* 프로젝트 디렉토리: [react-router-dom-example](../react-router-dom-example)

* 동영상 강의: https://www.youtube.com/watch?v=WLdbsl9UwDc?t=138

  * 동영상이 하나로 되어있음.

   
  

### 실습 준비

```bash
> npx create-react-app react-router-dom-example
```



### 기본 프로젝트 준비

* index.js에 컴포넌트 3개 만들어서 직접 App 컴포넌트를 작성했음.



### react-router-dom 설치

```bash
> npm install react-router-dom
```

* v7부터 react-router와 react-router-dom이 하나로 통합되었다고 함.  
  현재는 react-router만 설치하는 것이 추천된다.  
  (현재 프로젝트가 pnpm으로 전환되어있어서 pnpm 명령으로 바꿈)
```bash
> pnpm install react-router
```

모듈 import 선언도 변경해야함.
- 기존
  ```jsx
  import { BrowserRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';
  ```
- 변경
  ```jsx
  import { BrowserRouter, Route, Routes, NavLink, useParams } from 'react-router';
  ```


## 의견

* 기본 프로젝트 준비하고 react-router-dom 설치까지 진행



---

## 정오표

* 없음
