import { Component, useState } from 'react';
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
          <a
            href={li.id}
            data-id={li.id} // e.target.dataset.id 으로 접근하기 위해 설정
            onClick={(e) => {
              e.preventDefault();
              console.log('trigger');
              this.props.onClick(e.target.dataset.id);
            }}
          >
            {li.title}
          </a>
        </li>
      );
    });

    return <nav>{listTag}</nav>; // join()하지 말아야함. 바로 HTML엘리먼트 목록으로 인식됨
  }
}

class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

function App() {
  const [article, setArticle] = useState({ title: 'Welcome', desc: 'Hello, React & Ajax' });

  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav
        onClick={(id) => {
          fetch(`${id}.json`)
            .then((response) => response.json())
            .then((json) => setArticle(json));
        }}
      />
      <Article title={article.title} desc={article.desc} />
    </div>
  );
}

export default App;
