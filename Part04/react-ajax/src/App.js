import { Component, useEffect, useState } from 'react';
import './App.css';

class Nav extends Component {
  render() {
    const listTag = this.props.navList.map((li) => {
      return (
        <li key={li.id}>
          <a
            href={li.id}
            data-id={li.id} // e.target.dataset.id 으로 접근하기 위해 설정
            onClick={(e) => {
              e.preventDefault();
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
  const [navList, setNavList] = useState([]);
  const [article, setArticle] = useState({ title: 'Welcome', desc: 'Hello, React & Ajax' });

  useEffect(() => {
    fetch('list.json')
      .then((result) => result.json())
      .then((json) => {
        setNavList(json);
      });
  }, []);

  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav
        navList={navList}
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
