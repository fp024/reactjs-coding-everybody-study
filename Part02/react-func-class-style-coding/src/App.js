import React, { Component, useState, useEffect } from 'react';
import './App.css';

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

const funcStyle = 'color:yellow';
let funcId = 0;

function FuncComp(props) {
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState(props.date);

  useEffect(() => {
    console.log(`%cfunc => useEffect (componentDidMount) ${++funcId} `, funcStyle);
    document.title = number;
    return () => {
      // useEffect가 다시 실행될 때 정리하는 코드를 넣으면 됨.. componentWillUnmount() 부류
      console.log(`%cfunc => useEffect return (componentWillUnmount) ${++funcId} `, funcStyle);
    };
  }, []); // 빈 배열을 두번째인자로 전달하면 componentDidMount와 같은 효과

  useEffect(() => {
    console.log(
      `%cfunc => useEffect number (componentDidMount & componentDidUpdate) ${++funcId} `,
      funcStyle,
    );
    document.title = number;
    return () => {
      // useEffect가 다시 실행될 때 정리하는 코드를 넣으면 됨.. componentWillUnmount() 부류
      console.log(
        `%cfunc => useEffect number return (componentDidMount & componentDidUpdate) ${++funcId} `,
        funcStyle,
      );
    };
  }, [number]);

  useEffect(() => {
    console.log(
      `%cfunc => useEffect date (componentDidMount & componentDidUpdate) ${++funcId} `,
      funcStyle,
    );
    document.title = date;
    return () => {
      // useEffect가 다시 실행될 때 정리하는 코드를 넣으면 됨.. componentWillUnmount() 부류
      console.log(
        `%cfunc => useEffect date return (componentDidMount & componentDidUpdate) ${++funcId} `,
        funcStyle,
      );
    };
  }, [date]);

  console.log(`%cfunc => render ${++funcId} `, funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input
        type="button"
        value="random"
        onClick={() => {
          setNumber(Math.random());
        }}
      />
      <input
        type="button"
        value="date"
        onClick={() => {
          setDate(new Date().toString());
        }}
      />
    </div>
  );
}

const classStyle = 'color:red';
class ClassComp extends Component {
  constructor(props) {
    super(props);
    console.log('%cclass => constructor', classStyle);
  }

  state = {
    number: this.props.initNumber,
    date: this.props.date,
  };

  // React 17 이상 부터 사용 불가
  // componentWillMount는 deprecated ::: componentDidMount 또는 생성자에서 초기화할 것.
  componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle);
  }

  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate', classStyle);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', classStyle);
  }

  render() {
    console.log('%cclass => render', classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={() => {
            this.setState({ number: Math.random() });
          }} // 람다식으로 쓰면 bind(this)를 할 필요가 없음.
        />
        <input
          type="button"
          value="date"
          onClick={() => {
            this.setState({ date: new Date().toString() });
          }}
        />
      </div>
    );
  }
}

export default App;
