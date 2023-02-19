# WEB3 - Ajax

> 생활코딩! React 리액트 프로그래밍의 04 React & Ajax 파트 진행하기 전에 한번 보는게 낫다고 해서 쭈욱 보기로 했다. 😅 완전 모르는 건 아니지만... 보면 좋을 것 같아서... 보자..😅😅😅

* 동영상 목록
  * https://www.youtube.com/playlist?list=PLuHgQVnccGMA9-1PvblBehoGg7Pu1lg6q

---

## 16. 

---

## 15. 

---

## 14. 

---

## 13. 

---

## 12. 

---

## 11. WEB3-Ajax-7.1.초기 페이지 (1/2)

* https://youtu.be/AGcvjs1k4gg
  

---

## 10. WEB3-Ajax-6.2.리팩토링 함수화

* https://youtu.be/F67A2N5u-JU



---

## 09. WEB3-Ajax-6.1.ajax의 적용

* https://youtu.be/n9OvSZbEi1E

  

---

## 08. WEB3-Ajax-5-2.fetch API-response 객체

* https://youtu.be/IKO8Dy_YsiY

* fetch 요청 응답을 보았을 때, 최초 이외에는 304가 떠서... fetch에 옵션을 주어봤음.

  ```javascript
      fetch(type, {
         cache:'no-store' // 최초 호출 이후에는 304가 되는데, 캐시 설정을 no-store로 바꾸면 200으로 설정된다.
      }).then(function (response) {
        console.log(response);
        if(response.status == '404') {
          alert('File Not Found');
        }
      });
  
  ```

  

---

## 07. WEB3-Ajax-5.1.fetch API-요청과 응답

* https://youtu.be/qy3M0Cp0ios

  

---

## 06.  WEB3-Ajax-5.0.fetch API-사용법

* https://youtu.be/ufjCFdG_4fo
* fetch.html에서 radio버튼 만들어서 선택적으로 가져오는 방법 추가해보았음.

---

## 05. WEB3-Ajax-4.동적으로 컨텐츠 변경하기

* https://youtu.be/l-0XIVviPD0
* 별도 API서버가 제공되지않나? 하는... 등... 좀 복잡하게 생각했는데.. 같은서버에 데이터 파일 올려놓고 읽어오면 되는 것 잊고 있었다. 😅

---

## 04. WEB3-Ajax-3.실습환경 준비

* https://youtu.be/PxhmZKlSAR8
* Ajax이니까 실제 서버에 띄어서 해야하는데.. VS Code의 Live Server 확장으로 바로 HTTP 서버로 띄울 수 있다.
  * https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
  * 기본 HTTP포트: `5500`

* 프로젝트 디렉터리: [ajax-study-project](ajax-study-project)
  * https://github.com/web-n/web2_javascript 소스 가져와서 불필요한 파일 / 코드 제거
  * jQuery 사용처는 주석으로 처리하고 ES6 구문으로 변경 또는 기존 주석 해제


---

## 03. WEB3-Ajax 2.1 수업의 목적(2/2)

* https://youtu.be/qOw8xaBMo6k

---

## 02. WEB3-Ajax 2.1 수업의 목적(1/2)

* https://youtu.be/EFavLZaqAgg

---

## 01. WEB3-Ajax-1.수업소개

* https://youtu.be/w077w7FN-pg

