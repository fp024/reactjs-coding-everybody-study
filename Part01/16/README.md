#### 1. [리엑트 기초편](../README.md) >>>

---

## 16. 이벤트 state props와 render 함수

* 동영상 강의
  1. 이벤트 state props와 render 함수: https://youtu.be/kviidk347nU
  
  2. 이벤트 설치: https://youtu.be/3h7MidkDTBU 
  
  3. 이벤트에서 state 변경하기: https://youtu.be/h7GdhY_m8nM
  
  4. 이벤트 bind 함수 이해하기: https://youtu.be/o7Id7GMcuFo
  
  5. 이벤트 setState 함수 이해하기: https://youtu.be/PTRpJNMiMdA
  
     
* 프로젝트 폴더: [react-app](../react-app)



### 1. 이벤트 state props와 render 함수

* props나 state가 바뀌면 해당하는 컴포넌트의 render()가 다시 호출되어 해당 부분을 다시 그린다.



### 2. 이벤트 설치

* debugger 키워드: 크롬 개발자 도구를 켠상태에서 이 키워드를 만나면 그지점으로 중단점이 활성화된 디버깅 모드가 실행됨.
* preventDefault: HTML 태그에 이벤트를 걸 때, 해당 태그의 이벤트가 가지고 있는 기본적인 동작을 하지 못하게 할 때 사용.

### 3. 이벤트에서 state 변경하기

* state 의 내부 값을 바꿀 때, React가 이 사실을 알 수 있도록 `this.setState({변경할_속성_키이름: 새로운_값})`를 사용할 것.

  

### 4. ✨ 이벤트 bind 함수 이해하기

* 이벤트 함수안에서 this를 출력해보았을 때, undefined로 설정되어있음

  * 그렇기 때문에 이벤트 함수 끝에 `.bind(this)`를 붙여줘야함.

    ```javascript
    var obj = {name:"egoing"};
    function bindTest() {
      console.log(this.name);
    }
    bindTest(); // undefined 출력
    
    var bindTest2 = bindTest.bind(obj);
    bindTest2();  // egoing 출력
    ```

    

### 5. 이벤트 setState 함수 이해하기

* 이미 컴포넌트가 생성된 다음에 동적으로 state값을 바꿀 때는 this.state 값을 직접 수정하면 안됨

* setState 함수에 변경하고 싶은 값을 객체 형태로 전달하는 방식으로 변경해야함

  ```javascript
  this.setState({mode:'welcome'})
  ```

  

---

## 의견

* 이전에 다른 책에서 막혔던 내용도, 이벤트 함수 내에서 바깥쪽이 state를 처리하지 못해서 막혔던 것 같은데... 그 때 막혔던 부분에서도 bind() 를 활용하면 잘 할 수 있을 것 같다.
