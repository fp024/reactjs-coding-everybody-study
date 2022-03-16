#### 1. [리엑트 기초편](../README.md) >>>

---

## 16. 컴포넌트 이벤트 만들기

* 동영상 강의
  1. 컴포넌트 이벤트 만들기 1: https://youtu.be/NFR7vDArVlY
  2. 컴포넌트 이벤트 만들기 2: https://youtu.be/hR5H0OFksx8 
  3. 컴포넌트 이벤트 만들기 3: https://youtu.be/11mTvRtXx4g
  
* 프로젝트 폴더: [react-app](../react-app)



### 컴포넌트 이벤트 만들기 1

App.js에서 이벤트의 동작함수를 정의하고 Subject.js에서 onClick 이벤트 발생시 값을 그 동작함수를 실행해주는 식으로 변경.

저자님은 Subject 컴포넌트의 onChangePage 이벤트를 만든 것으로 나타내셨다.



### 컴포넌트 이벤트 만들기 2

TOC.js에 대한 수정. 이전과 동일한 방법으로 진행

인덱스 번호를 입력받는 것은 TOC.js에서 처리하고 state의 변경은 App.js에서 수행하게 미리 해봤는데, 이렇게 하는 것이 맞을지 모르겠다. 이 때문에 현재 선택된 인덱스 번호를 관리하는 currentIndex를 state에 추가해 두었다.



### 컴포넌트 이벤트 만들기 3

저자님 하신 컨셉과 비슷하긴 한데, 좀 차이가 있었다. while 부분은 find로 바꾸고 조건식을 넣었다.

data-id 필드를 넣고,  이벤트 함수 내에서 `e.target.dataset.id` 로 전달 받아 사용하는 부분은 특이했다.



---

## 의견

* 
