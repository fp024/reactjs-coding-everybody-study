#### 05. [React Redux](../README.md) >>>

---

## 05. 리액트 컴포넌트에서 리덕스에 종속된 기능을 제거

* 프로젝트 디렉토리: [react-redux](../react-redux)

  

   

## 진행

### 리액트 컴포넌트에서 리덕스에 종속된 기능을 제거

* 동영상 강의: https://youtu.be/ObCKEaKFRac

문제가 생겼는데.. AddNumber, DisplayNumber 컴포넌트가 Redux에 종속되게 됨.





### 컴포넌트의 재사용성을 높이기 위한 컨테이너 컴포넌트 도입

* 동영상 강의: https://youtu.be/ZmM4JSpIh6E 



AddNumber, DisplayNumber에 대해서는 본업인 화면 출력에 대해서만 신경쓰게 하고,

Redux와의 의존성 및 관련 처리 로직은 별도 Wrapper 컴포넌트를 만들어서 그곳에 배치함.




## 의견

* 나는 저자님 코드 참조해서 함수 스타일로 진행했다. 

* Wrapper 컴포넌트에 대해서도 명시적으로 이름을 바꿔주고 익명 클래스나 익명 함수로 안쓰는 것이 나을 것 같다.

  * 익명으로 쓰면 lint에서도 경고가 나옴.

* 의존성을 좋은 쪽으로 이전한 것 같아서 뭔가 재미있었다. 😄

  

  

---

## 정오표

* 없음
