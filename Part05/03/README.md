#### 05. [React Redux](../README.md) >>>

---

## 03. Redux 없는 React 컴포넌트 구조 만들기

* 프로젝트 디렉토리: [react-redux](../react-redux)

   

## 진행

### Redux 없는 React 컴포넌트 구조 만들기

* 동영상 강의: https://youtu.be/hg5OQeguPFU

* 프로젝트 생성

  ```bash
  > npx create-react-app react-redux
  ```
  
* 저자님은 클래스 스타일로 하셨는데, 함수 스타일로 만들어보았다.



### Redux 없이 React  컴포넌트의 상태 연결하기

* 동영상 강의: https://youtu.be/xBChHYeV138
* 이부분은 동영상 보기전에 책 참조해서 미리 함수 스타일로해봄.. 
  * DisplayNumber > DisplayNumberRoot > App 컴포넌트까지 이벤트 따라서 줄줄이 App(`Root`)까지 올라가야함...


* shouldComponentUpdate 메서드를 구현해서 컴포넌트의 render호출을 막는 방법으로 render 메서드의 불필요하게 호출되는 것을 줄일 수는 있지만 까다로움..

* 변경사항을 컴포넌트들에게 알려주는 중앙 방송국(Redux)이 필요함 😄




## 의견

* 책의 클래스 타일을 보면서 함수 스타일로 해보긴 했는데.. 확실히 함수 스타일로 하는게 코드가 단순해보인다... 
  😄👍 2023년 2월에 나오는 개정판에서는  함수 스타일로 하셨을 것 같다.
  
  

---

## 정오표

* 없음
