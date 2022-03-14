#### 1. [리엑트 기초편](../README.md) >>>

---

## 15. state

* 동영상 강의
  1. ✨ state 소개: https://youtu.be/rOpg2KUPW2M 
  2. state 사용: https://youtu.be/e2c1EUcW7oo
  3. key props: https://youtu.be/sAFNZuzFEPo
* 프로젝트 폴더: [react-app](../react-app)

### 1. state 소개

* props: 사용자가 컴포넌트를 사용하기 위한 인터페이스
* state: 내부적 구현을 위한 다양한 상태, props 값에 따라 내부 구현에 필요한 데이터



### 2. state 사용

* 어떤 컴포넌트가 render()함수보다 먼저 실행되면서 초기화시켜주고 싶은 코드는 constractor를 작성하고 그안에다 코드 작성한다.
* 상위 컴포넌트의 state 값을 하위 컴포넌트의 props로서 전달.

### 3. key props

* 예전에 다른 Java Script 책에서 ES6 관련 내용 연습했던 기억이 흐릿하게 있어서, var나 for는 람다식으로 변경해보았다.

  ```react
  class TOC extends Component {
    render() {
      const lists = this.props.data.map((content) => {
        return (
          <li>
            <a href={'/content/' + content.id}>{content.title}</a>
          </li>
        );
      });
  
      return (
        <nav>
          <ul>{lists}</ul>
        </nav>
      );
    }
  }
  ```

  

#### Warning: Each child in a list should have a unique "key" prop. 경고

* 리액트 내부적으로 필요하므로 `<li>`는 key 프로퍼티를 지정해주자!



---

## 의견

* 책의 기존코드에서 ES 6 이상 코드로 개선할 수 있는 부분은 되도록이면 바꿔가면서 진행해보도록 하자!
