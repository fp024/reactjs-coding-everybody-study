#### 1. [리엑트 기초편](../README.md) >>>

---

## 19. Create 구현

* 동영상 강의: 

  1. Create 구현: 소개 - https://youtu.be/nwwJ2xU7E8w
  2. Create 구현: 모드 변경 기능 - https://youtu.be/MDGFEV_idSY 
  3. Create 구현: 모드 전환 기능 - https://youtu.be/f8e0YWiM-50
  4. Create 구현: form - https://youtu.be/YJk9PgYnFmI 
  5. Create 구현: onSubmit 이벤트 - https://youtu.be/y5FAg6bJmwE  
  6. Create 구현: 콘텐츠 변경 - https://youtu.be/OpLMcB1nRkE
  7. Create 구현: shouldComponentUpdate - https://youtu.be/SLb4p9T-yZA
  8. Create 구현: immutable - https://youtu.be/SkTUocMjXTg

  

* 프로젝트 폴더: [react-app](../react-app)



### 1. Create 구현: 소개

* TOC와 Content 컴포넌트 사이에 create, update, delete 버튼을 둬서 TOC의 목록을 추가할 수 있도록 수정 예정
* create 버튼 클릭을하면 TOC 하단에 Subject, CreateContent 컴포넌트 생성



### 2. Create 구현: 모드 변경 기능

* create, update, delete 버튼을 Control 컴포넌트로 분리 후 Apps.js에 적용

* mode 변경 기능 적용

  

### 3. Create 구현: 모드 전환 기능

* Content 부분을 ReadContent, CreateContent로 분리되어 관리되도록 컴포넌트 생성 



### 4. Create 구현: form 

* CreateContent 에 form 구현

* form에서 제출시 alert 노출되게 하는 동작까지 진행

  

### 5. Create 구현: onSubmit 이벤트

* onSubmit이 발생했을 때, title과 desc를 알아내어 상위 Apps onSubmit에 정의한 이벤트 처리 함수(props로 넘어온 함수)에 전달하여 실행

  * CreateContent.js

    ```javascript
     this.props.onSubmit(e.target.title.value, e.target.desc.value);
    ```

    이벤트 > 타겟 > 폼요소이름 > value 로 값을 탐색할 수 있다.



### 6. Create 구현: 콘텐츠 변경

* Array의 push, concat

  * push 원본을 바꿈.
  * concat 새로운 내용을 추가한 배열을 만들어 반환 (🎇이것 사용 추천)

* prettier가 어쩔 때는 객체 마지막에 ,를 추가하는데 React Dev Tools의 Component의 데이터 값의 객체를 확인해봤을 때 문제는 없다. 

  ```java
  contents: this.state.contents.concat({
                  id: this.max_content_id,
                  title: _title,
                  desc: _desc, // , 추가 부분
                }),
  ```

  

### 7. Create 구현: shouldComponentUpdate 

* render전에 호출되는 함수

* 인자 중 nextProps 을 사용해서 현재, 이후의 props의 변화 상태를 알 수 있음.

* shouldComponentUpdate  함수를 잘 활용하기 위해서 원본을 바꾸지 않고, 변경 내용의 복제내용을 설정하는 것이 좋다.

  

  



### 8. Create 구현: immutable

* 원본 불변성을 유지하는 것
  * `Array.form()`을 사용해서 배열의 복제를 만들어사용
  * `Object.assign()`을 사용해서 객체의 복제본을 만들어서 사용

* immutable.js
  * https://immutable-js.com/#getting-started
  * 객체의 불변성을 유지할 수 있게 도움을 주는 라이브러리
  * 객체는 Map
  * 배열은 list



---

## 의견

* 약간 해깔리는 부분도 있었으나 재미있었다. 🎉



---

## 정오표

* p138 - 예제 19-6 소스
  * 클래스 명을 Subjet체서 Control로 변경
