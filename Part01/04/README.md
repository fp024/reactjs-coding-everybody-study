#### 1. [리엑트 기초편](../README.md) >>>

---

## 04. npm을 이용한 Create React App 설치

* 동영상 강의: https://youtu.be/nvRlr_qPfBc



### npm 사용을 위해 node.js 설치

* npm 관련 추가 강의
  * https://opentutorials.org/module/4044



### Create React App 설치

* `npm install -g create-react-app`

  ```
  C:\git\reactjs-coding-everybody-study\Part01\04>npm install -g create-react-app
  npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
  C:\nvm\nodejs\create-react-app -> C:\nvm\nodejs\node_modules\create-react-app\index.js
  + create-react-app@5.0.0
  added 67 packages from 26 contributors in 6.943s
  
  C:\git\reactjs-coding-everybody-study\Part01\04>
  ```

  

* `npx`는 실행할 때마다 다운로드 하여 딱 한번 실행하고 지워서 최신 상태를 유지하게 됨. 그러나 수업에서는 npm으로 설치해서 진행하신다고 함.

* npx

  * 임시로 실행할 때마다 설치
  * 최신 버전을 유지할 수 있음

* npm

  * 최초 한번 설치

  * 최신 버전을 반영하려면 `npm install -g create-react-app` 을 다시 실행 해주면 업데이트 처리해주는 것 같다.

    



---

## 의견

* [nvm for windows](https://github.com/coreybutler/nvm-windows) 또는  [nvm-sh](https://github.com/nvm-sh/nvm)를 설치한 상태이고, 버전은 14.x의 최종 LTS 버전인 `14.19.0`을 사용하기로 하였다.

  ```
  C:\git\reactjs-coding-everybody-study\Part01\04>nvm current
  v14.19.0
  
  C:\git\reactjs-coding-everybody-study\Part01\04>npm -v
  6.14.16
  
  C:\git\reactjs-coding-everybody-study\Part01\04>
  ```

  