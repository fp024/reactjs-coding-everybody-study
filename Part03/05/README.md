#### 03. [React Router DOM](../README.md) >>>

---

## 05. Nested Routing

* 프로젝트 디렉토리: [react-router-dom-example](../react-router-dom-example)

* 동영상 강의: https://www.youtube.com/watch?v=WLdbsl9UwDc?t=1649

  * 동영상이 하나로 되어있음.

## 진행

...

## 의견

* 뭔가 안된다 싶으면 상대경로로 바꿔보면 잘되는 부분이 있음.. 😅

  ```react
  function Topics() {
    const LIs = [];
  
    contents.forEach((c) => {
      LIs.push(
        <li key={c.id}>
          <NavLink to={`/topics/${c.id}`}>{c.title}</NavLink>
        </li>,
      );
    });
  
    return (
      <div>
        <h2>Topics</h2>
        <ul>{LIs}</ul>
        <Routes>
          <Route path=":topic_id" element={<Topic />} /> {/* 여기는 앞 경로를 빼줘야함. ? (상대 경로 사용필요) */}
        </Routes>
      </div>
    );
  }
  ```

  



---

## 정오표

* 없음
