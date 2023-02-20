#### 04. [React & Ajax](../README.md) >>>

---

## 03. Ajax로 컴포넌트 초기화 하기

* 프로젝트 디렉토리: [react-ajax](react-ajax)

* 동영상 강의: https://www.youtube.com/watch?v=ReKQ8k4w2i4

   

## 진행

* componentDidMount() 에서 fetch로 데이터 가져옴

* 람다식 함수를 썼을 때는 bind(this) 설정을 할 필요가 없음

* 특이했던 부분..

  ```react
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
  ```



### 정리

1. 컴포넌트가 생성될 때, Ajax를 통해 해당 컴포넌트를 초기화하는 경우에는 componentDidMount 메서드를 사용할 것
2. Ajax를 사용해서 가져온 데이터로 직접 렌더링에 영향을 주는 것이 아니고, 그것을 state에 넘긴 다음, render메서드가 state의 변화에 영향을 받아 처리하도록 구현할 것



## 의견

* 잘 진행되었다.. 목록만 Ajax로 가져온 데이터로 적용했고, 컨텐츠는 적용되지 않음.




---

## 정오표

* 없음
