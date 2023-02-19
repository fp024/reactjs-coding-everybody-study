#### 03. [React Router DOM](../README.md) >>>

---

## 04. Link

* 프로젝트 디렉토리: [react-router-dom-example](../react-router-dom-example)

* 동영상 강의: https://www.youtube.com/watch?v=WLdbsl9UwDc?t=181

  * 동영상이 하나로 되어있음.


### Link

* a 태그를 사용했을 때는 링크를 클릭했을 때마다 페이지가 새로 로딩되었음...
* Link 컴포넌트는 페이지가 리로드 되지 않게 자동으로 구현하는 컴포넌트



#### HashRouter

이건... 웹 루트를 /로 사용할 수 없을 때.. 쓰라는 것 같은데..

일단 URL은 다음과 같이 나타남..

* `http://localhost:3000/#/`
* `http://localhost:3000/#/topics`
* `http://localhost:3000/#/contact`
* 그런데... 없는 주소 입력하면 `http://localhost:3000/asdfsadf` Not Found로 가지않고 Home(`/`)으로 감



#### NavLink

* `class="active"` 속성이 생김
* 현재 버전 환경에는 기본으로 exact 상태이기 때문에 클릭하여 보고 있는 컴포넌트의 링크에 active 속성이 항상 붙음.





## 의견

* 그냥 잘 넘어가긴 했는데.. HashRouter의 필요성이 좀 해깔리긴함 😅



---

## 정오표

* 없음
