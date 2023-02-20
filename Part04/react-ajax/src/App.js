import { Component } from 'react';
import './App.css';

class Nav extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    fetch('list.json')
      .then((result) => result.json())
      .then((json) => {
        console.log(json);
        this.setState({ list: json });
      }); // 람다식이여서, bind(this)안해도 됨
  }

  render() {
    const listTag = this.state.list.map((li) => {
      return (
        <li key={li.id}>
          <a href={li.id}>{li.title}</a>
        </li>
      );
    });

    return <nav>{listTag}</nav>; // join()하지 말아야함. 바로 HTML엘리먼트 목록으로 인식됨
  }
}

function App() {
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav></Nav>
      <article>
        <h2>Welcome</h2>
        Hello, React &amp; Ajax
      </article>
    </div>
  );
}

export default App;
