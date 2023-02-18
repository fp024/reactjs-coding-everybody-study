#### 02. [리액트 클래스 스타일 vs 함수 스타일](../README.md) >>>

---

## 03. state

* 프로젝트: [react-func-class-style-coding](../react-func-class-style-coding)

   

### 클래스에서 state 사용법

* 동영상 강의: https://youtu.be/4bTUicgjq5I



### 함수에서 state 사용법

* 동영상 강의: https://youtu.be/R6GPIWG7O9s
* props는 함수의 첫번째 인자를 추가해두고 그걸 사용
* useState는 배열을 반환
  * 인덱스 0: 현재 상태값
  * 인덱스 1: 상태를 변경할 수 있는 set함수



## 의견

* 처음에 책의 코드를 안보고 진행했을 때..
  
  ```react
        <FuncComp initNumber={2} date={new Date()}></FuncComp>
        <ClassComp initNumber={2} date={new Date()}></ClassComp>
  ```
  
  객체로 전달해서 에러가 났던 것 같음..   `new Date().toString()` 으로 문자열로 전달해줘야했음.
  
  

---

## 정오표

* 없음
