#### 1. [리엑트 기초편](../README.md) >>>

---

## 09. 배포하는 법

* 동영상 강의: https://youtu.be/E_-ua6uCQOU

* 프로젝트 폴더: [react-app](../react-app)



#### npm start를 했을 때... 많은 용량을 다운로드 하는 부분 확인

크롬의 네트워크 탭을 열어둔 상태에서 크롬의 리로드 버튼을 오른쪽 마우스 메뉴로 열에서 `캐시 비우기 및 강력 새로고침 수행`



#### npm build 후 serve로 실행확인

```
C:\git\reactjs-coding-everybody-study\Part01\react-app>npm run build

> react-app@0.1.0 build C:\git\reactjs-coding-everybody-study\Part01\react-app
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  44.13 kB  build\static\js\main.3b797dfc.js
  1.78 kB   build\static\js\21.ab936eee.chunk.js
  20 B      build\static\css\main.31d6cfe0.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The C:\git\reactjs-coding-everybody-study\Part01\react-app\build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s C:\git\reactjs-coding-everybody-study\Part01\react-app\build

Find out more about deployment here:

  https://cra.link/deployment


C:\git\reactjs-coding-everybody-study\Part01\react-app>npm install -g serve
C:\nvm\nodejs\serve -> C:\nvm\nodejs\node_modules\serve\bin\serve.js
+ serve@13.0.2
added 90 packages from 40 contributors in 8.459s

C:\git\reactjs-coding-everybody-study\Part01\react-app>serve -s .\build       

   ┌───────────────────────────────────────────────────┐
   │                                                   │
   │   Serving!                                        │
   │                                                   │
   │   - Local:            http://localhost:3000       │
   │   - On Your Network:  http://xxx.xxx.xxx.xxx:3000 │
   │                                                   │
   │   Copied local address to clipboard!              │
   │                                                   │
   └───────────────────────────────────────────────────┘

```

* serve는 간단한 웹서버 역활이고, build 결과를 실행해볼 수 있음.



---

## 의견

* 
