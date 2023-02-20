#### 04. [React & Ajax](../README.md) >>>

---

## 05. 프리젠테이션 컨테이너에서 데이터 종속성 제거하기

* 프로젝트 디렉토리: [react-ajax](react-ajax)

* 동영상 강의: https://youtu.be/OCxPf0Tt-Tw

   

## 진행

* Nav가 상위 컴포넌트로 부터 props를 받아 화면을 표시하기만 해주는 컴포넌트로 변경

  * 데이터를 표현하기만 하는 Presentational 컴포넌트로 변경

  * Nav에 있던 네비게이션 목록 가져오는 부분을 App으로 옮김

  * App 컴포넌트를 함수 형태로 사용하기 때문에 useEffect를 사용하고 두번째 파라미터로 빈배열을 전달해서 componentDidMount() 를 구현

    


* 컨테이너(Container) 컴포넌트
  * 프리젠테이셔널 컴포넌트를 둘러싼 데이터를 처리하고 사용자의 상호작용을 처리하는, 애플리케이션에 완전히 종속된 컴포넌트



## 의견

* 진행중 아래부분이 약간 해깔렸었다..

  ```react
    useEffect(() => {
      fetch('list.json')
        .then((result) => result.json())
        .then((json) => {
          setNavList(json); // 최초에 setNavList({list:json}) 으로 잘못 썼었음..
        });
    }, []);
  ```

  


---

## 정오표

* 없음
