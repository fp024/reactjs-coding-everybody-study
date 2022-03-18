#### 1. [리엑트 기초편](../README.md) >>>

---

## 21. Delete 구현

* 동영상 강의: https://youtu.be/QxQvKM6hzDk 

* 프로젝트 폴더: [react-app](../react-app)



### 1. Delete 구현

* 삭제할 ID가 아닌것으로만 필터링해서 다시 contents를 설정하는데 .filter를 사용해보았음

  ```javascript
  /*
  const afterDeletedContents = Array.from(this.state.contents);
  for (let i = 0; i < afterDeletedContents.length; i++) {
    if (afterDeletedContents[i].id === this.state.contentId) {
      afterDeletedContents.splice(i, 1);
      break;
    }
  }
  */
  // 필터로도 사용해봤음.
  const afterDeletedContents = this.state.contents.filter(
      (c) => c.id !== this.state.contentId,
  );
  ```

#### 기타 수정

* 주제가 선택 안된 상태에서 Update, Delete시 더이상 진행하지 않고 welcome으로 돌아가도록 수정



---

## 의견

* 다른 주제에 비해서는 쉽게 끝난 것 같다. 😅



---

## 정오표

* 
