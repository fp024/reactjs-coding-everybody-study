#### 02. [리액트 클래스 스타일 vs 함수 스타일](../README.md) >>>

---

## 05. 총정리 겸 수업을 마치며

* 프로젝트: [react-func-class-style-coding](../react-func-class-style-coding)

* 동영상 강의: https://youtu.be/83kE6cf0Cqk

   

App.js

```react
function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input
        type="button"
        value="remove func"
        onClick={function () {
          setFuncShow(false);
        }}
      ></input>
      <input
        type="button"
        value="remove class"
        onClick={function () {
          setClassShow(false);
        }}
      ></input>
      {funcShow ? <FuncComp initNumber={2} date={new Date().toString()}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2} date={new Date().toString()}></ClassComp> : null}
    </div>
  );
}
```

App 컴포넌트에 FuncComp 또는 ClassComp를 삭제할 수 있는 로직을 넣음.

컴포넌트 삭제 버튼을 추가하여 삭제시 p241의 빈 배열러 설정한 useEffect의 return 구문 (componentWillUnmount)가 정상 동작하는지 확인하였다.

* Hook의 개요
  * https://ko.reactjs.org/docs/hooks-intro.html
  * https://ko.reactjs.org/docs/hooks-overview.html



## 의견

* 리엑트의 hook관련 메뉴얼이 잘되어있어서 모바일로 심심할때 봐도 좋을 것 같다. 😄
  
  

---

## 정오표

* 없음
