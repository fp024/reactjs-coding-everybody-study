# ajax-study-project

>  생활코딩 WEB2 JavaScript 예제 (https://github.com/web-n/web2_javascript) 수정 진행

* Ajax 스터디이기 때문에 파일로서 index.html을 실행하지 않고, HTTP 서버로 실행해야한다.
  * VS Code의 Live Server 확장 설치해서 사용하면 간편함.
    * https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

* Node 환경이 되어있다면 Serve를 사용해도 됨.

  1. serve를 global로 설치

     ```bash
     > npm i -g serve
     ```

  2. 현재 웹 디렉토리에서 serve 실행

     ```bash
     > serve . -p 8080
     ```

     * `.`은 빼도됨, 빼면 현재 디렉토리 기준으로 웹경로가 설정되서 실행됨.
     * `-p` 옵션은 포트 변경 옵션, 기본 포트는 `3000`
