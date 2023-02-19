import React, { Component, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2} date={new Date().toString()}></FuncComp>
      <ClassComp initNumber={2} date={new Date().toString()}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState(props.date);
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
