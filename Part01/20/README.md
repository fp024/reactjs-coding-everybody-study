#### 1. [리엑트 기초편](../README.md) >>>

---

## 20. Update 구현

* 동영상 강의: 

  1. Update 구현: https://youtu.be/YKdebEty6uQ 
  1. Update 구현: form: https://youtu.be/C9wMiD_5Y1A 
  1. Update 구현: state 변경: https://youtu.be/twJXBIy4Rqo 
  
* 프로젝트 폴더: [react-app](../react-app)



### 1. Update 구현



### 2. Update 구현: form

* Apps에서 선택된 id로 조회해서 content를 props로 UpdateContent로 받아오는데,  이값을 input이나 textarea에서 사용할때, this.props.data.title 과같이 사용할 수 없다.  UpdateContent에서 state로 설정해서 사용해야 하고 onChage 설정을 해야한다.
  * 값 변경이 있을 때마다 해당 state가 바뀔 수 있도록 해야함.

* textarea 등에서 태그의 값을 텍스트노드에 넣지 말고, value 속성을 이용해서 값을 넣어야함. defaultValue또는 value props를 사용하라는 경고가 나옴.

* 이벤트 함수에 현재 객체를 연결하기 위해 .bind(this)를 써왔었는데, 생성자에 정의해주고, 코드 사용처에서는 생략 할 수 있다.

  ```javascript
  constructor(props) {
    ..
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  ...
  onChange={this.inputFormHandler}
  ```

* 전달된 이벤트의 요소의 이름을 알고 싶을 때..

  `[e.target.name]` 으로 써줌.

  ```javascript
  inputFormHandler(e) {
      this.setState({ [e.target.name]: e.target.value });
  }
  ```

여기까지 업데이트 폼을 열고 데이터를 키보드로 입력시 상태가 즉시 바뀌는 것 까지 확인 submit이 구현되지는 않았다.



### 3. Update 구현: state 변경

* 업데이트 후의 Apps의 상태 변경 진행

* 현재 contents에서 지금 변경한 id를 찾아서 변경한 값으로 넣어줄 때... 기존 상태의 불변을 유지하려고 map을 사용했는데 괜찮을지 모르겠다.

  ```javascript
  const nextContents = this.state.contents.map((c) => {
                if (c.id === _id) {
                  return { id: _id, title: _title, desc: _desc };
                }
                return c;
              });
  ```

  저자님은 Array.from() 사용하여 복제 후 while 검색으로 하셨음.



---

## 의견

* 갑자기 어려우진 것 같다. 😂 확실히 Update가 복잡하긴하다. 



---

## 정오표

* p174 예제 20-3
  * id를 반환하는 것이아니고 id가 일치하는 content 객체를 반환한다고 명시하는 것이 나을 것 같다.
