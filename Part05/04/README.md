#### 05. [React Redux](../README.md) >>>

---

## 04. Redux 도입

* 프로젝트 디렉토리: [react-redux](../react-redux)

* 동영상 강의: https://youtu.be/SaXgXcgJ5xg

   

## 진행

* 프로젝트에 리덕스 적용

  ```bash
  > npm install redux
  ```

* store.js 만들기

  * createStore가 depreacted 된 것 같다..

    ```javascript
    /*
    @deprecated
    createStore를 대체하는 @reduxjs/toolkit 패키지의 configureStore 메소드를 사용하는 것이 좋습니다.
    
    Redux Toolkit은 스토어 설정, 리듀서, 데이터 가져오기 등을 포함하여 현재 Redux 로직을 작성하는 데 권장되는 접근 방식입니다.
    
    자세한 내용은 Redux 문서 페이지(https://redux.js.org/introduction/why-rtk-is-redux-today)를 참조하세요.
    
    Redux Toolkit의 configureStore는 설정을 단순화하고 일반적인 버그를 방지하는 데 도움이 되는 향상된 버전의 createStore입니다.
    
    학습 목적을 제외하고 현재 redux 코어 패키지를 단독으로 사용해서는 안 됩니다. 핵심 redux 패키지의 createStore 메서드는 제거되지 않지만 모든 사용자가 모든 Redux 코드에 대해 Redux Toolkit을 사용하도록 마이그레이션하는 것이 좋습니다.
    
    이 시각적 지원 중단 경고 없이 createStore를 사용하려면 대신 legacy_createStore 가져오기를 사용하세요.
    */
    import { legacy_createStore as createStore} from 'redux'
    ```

    * `@reduxjs/toolkit`를 설치해야 사용이 가능할 것 같은데... 이걸 사용하면 책과 완전히 달라질 것 같아서... 



* 객체에 대해서도 구조분에 할당이 됨.

  ```javascript
  { ...state, number: state.number + action.size }
  ```

  * state 객체에서 number만 갱신

* 값을 더하는 로직도 store.js의 reducer 역할 함수에 들어감.

* DisplayNumber 부분의 constructor을 함수 스타일로 바꿀 때... useEffect()를 사용하고 두번째 인자에 빈배열 넘김

  ```react
    // constructor에 있던 부분을 useEffect로 옮김 - componentDidMount()
    useEffect(() => {
      store.subscribe(() => {
        setNumber(store.getState().number);
      });
    }, []);
  ```

  




## 의견

* 상위 컴포넌트와 하위 컴포넌트간의 props 연결 부분을 전부 제거할 수 있었다.👍
  
* 이번에도 함수 스타일로 바꾸었는데 잘 되었다.😄
  
  

---

## 정오표

* 없음
