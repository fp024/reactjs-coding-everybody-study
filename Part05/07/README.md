#### 05. [React Redux](../README.md) >>>

---

## 07. 수업을 마치며

* 프로젝트 디렉토리: [react-redux](../react-redux)

  


## 진행

#### connect.js 코드

* https://bit.ly/connjs

  ```javascript
  const ConnectedCounter = connect(
    // Given Redux state, return props
    state => ({
      value: state.counter,
    }),
    // Given Redux dispatch, return callback props
    dispatch => ({
      onIncrement() {
        dispatch({ type: 'INCREMENT' })
      }
    })
  )(Counter)
  ```

* 영상의 설명을 들으니까 뭔지 알것 같긴한데... 하면서 알아가야 겠음.. 😅




## 의견

* 수업이 끝났다. 마지막이 상당히 어렵다..😂

* 이고잉님 대단하시다.. 👍👍👍

  


---

## 정오표

* 335쪽
  * 다음 코드에서는 `DisplayNumberRoot` 컴포넌트에 unit이라는 ...
    * 그냥 `DisplayNumber`가 맞을 것 같다..
