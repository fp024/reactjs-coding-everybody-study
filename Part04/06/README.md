#### 04. [React & Ajax](../README.md) >>>

---

## 06. 로딩 중 기능 구현 & 수업을 마치며

* 프로젝트 디렉토리: [react-ajax](react-ajax)

* 동영상 강의: https://www.youtube.com/watch?v=2k-0mBWjWtk

   

## 진행

* App을 함수로 유지해서 useEffect를 아래와 같이 했음.

  ```react
    useEffect(() => {
      // const newList = Object.assign({}, navList.items, { isLoading: true });
      // setNavList(newList);
      setNavList({ isLoading: true });
      fetch('list.json')
        .then((result) => result.json())
        .then((json) => {
          setNavList({ items: json, isLoading: false });
        });
    }, []);
  
  ```
  
  주석된 내용 대로 newList를 새로 구성하면 eslint 오류로 아래와 같이 나옴.
  
  ```
  React Hook useEffect has a missing dependency: 'navList.items'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  ```
  
  그런데 컴포넌트 로드되고 한번만 호출되게하기 때문에 navList.items는 갱신할 필요할 필요가 없긴함.
  
  



## 의견

* 네트워크 탭에 Slow 3G로 인터넷 속도가 안좋은 환경을 재현하는 것은 처음 알았다. ✨

  ![image-20230220190735414](doc-resources\image-20230220190735414.png)

* 마지막 로딩중 구현 재미있었습니다. 👍


---

## 정오표

* 없음
