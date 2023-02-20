import { Component, useEffect, useState } from 'react';
import './App.css';

class Nav extends Component {
  render() {
    const listTag = this.props.navList.items.map((li) => {
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

function NowLoding() {
  return (
    <div>
      <h2>Now Loading....</h2>
    </div>
  );
}

function App() {
  const [navList, setNavList] = useState({ items: [], isLoading: false });
  const [article, setArticle] = useState({
    item: { title: 'Welcome', desc: 'Hello, React & Ajax' },
    isLoading: false,
  });

  useEffect(() => {
    // const newList = Object.assign({}, navList.items, { isLoading: true });
    // setNavList(newList);
    setNavList({ items: [], isLoading: true });
    fetch('list.json')
      .then((result) => result.json())
      .then((json) => {
        setNavList({ items: json, isLoading: false });
      });
  }, []);

  return (
    <div className="App">
      <h1>WEB</h1>
      {navList.isLoading ? (
        <NowLoding />
      ) : (
        <Nav
          navList={navList}
          onClick={(id) => {
            setArticle({ item: article.item, isLoading: true });
            fetch(`${id}.json`)
              .then((response) => response.json())
              .then((json) => setArticle({ item: json, isLoading: false }));
          }}
        />
      )}

      {article.isLoading ? (
        <NowLoding />
      ) : (
        <Article title={article.item.title} desc={article.item.desc} />
      )}
    </div>
  );
}

export default App;
