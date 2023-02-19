#### 03. [React Router DOM](../README.md) >>>

---

## 03. Router

* 프로젝트 디렉토리: 

* 동영상 강의: https://www.youtube.com/watch?v=WLdbsl9UwDc?t=495

  * 동영상이 하나로 되어있음.

  
  

### react-router-dom 설치

```bash
> npm i react-router-dom
```



#### p257 예제 3-3이 현시점에서는 오류남...

```react
import { BrowserRouter, Route, Routes } from 'react-router-dom';

...
<Routes>
  <Route extract="/" element={<Home />} />
  <Route path="/topics" element={<Topics />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

이런 식으로 써줘야 에러없이 잘 된다. 버전이 올라가면서 좀 바뀌었나 봄..



#### 예제 3-4

```react
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics" element={<Topics />} /> <!-- 두번 써준다고 topics이 두번나오진 않음. Routers가 Switch 역활이나 마찬가지여서... -->
        <Route path="/contact" element={<Contact />} />
      </Routes>
```

* exact가 사라짐.. 기본 적용인듯.
* Switch가 Routes로 대체되고,Route 단독으로 못쓰고 반드시 Routes로 감싸는 것을 강제함.. 



#### 예제 3-8

페이지를 찾을 수 없습니다. 404 페이지는...

```react
function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
    </div>
  );
}

...
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
...
```

NotFound 컴포넌트를 만들고, 지정된 경로 외의 모든 경로인 `*` 에 Route를 걸어서 하면 되겠음.



## 의견

* 버전이 올라가서 좀 바뀌긴 했는데... 크게 어려운 점은 없었다.  검색하면 왠만한건 바로 찾을 수 있기도 해서.. 😅



---

## 정오표

* 없음
