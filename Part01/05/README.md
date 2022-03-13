#### 1. [리엑트 기초편](../README.md) >>>

---

## 05. Create React App을 이용한 개발 환경 구축

* 동영상 강의: https://youtu.be/C9l-dQTeW7k

* [react-app](../react-app) 디렉토리에서 `create-react-app .`  명령을 실행해서 프로젝트 탬플릿이 만들어지도록 한다.

  ```
  C:\git\reactjs-coding-everybody-study\Part01\react-app>create-react-app .
  
  Creating a new React app in C:\git\reactjs-coding-everybody-study\Part01\react-app.
  
  Installing packages. This might take a couple of minutes.
  Installing react, react-dom, and react-scripts with cra-template...
  
  
  > core-js@3.21.1 postinstall C:\git\reactjs-coding-everybody-study\Part01\react-app\node_modules\core-js
  > node -e "try{require('./postinstall')}catch(e){}"
  
  
  > core-js-pure@3.21.1 postinstall C:\git\reactjs-coding-everybody-study\Part01\react-app\node_modules\core-js-pure
  > node -e "try{require('./postinstall')}catch(e){}"
  
  + react@17.0.2
  + react-dom@17.0.2
  + cra-template@1.1.3
  + react-scripts@5.0.0
  added 1377 packages from 613 contributors in 99.474s
  
  169 packages are looking for funding
    run `npm fund` for details
  
  
  Installing template dependencies using npm...
  npm WARN deprecated source-map-resolve@0.6.0: See https://github.com/lydell/source-map-resolve#deprecated
  npm WARN @apideck/better-ajv-errors@0.3.3 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
  npm WARN fork-ts-checker-webpack-plugin@6.5.0 requires a peer of typescript@>= 2.7 but none is installed. You must install peer dependencies yourself.
  npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
  
  + web-vitals@2.1.4
  + @testing-library/jest-dom@5.16.2
  + @testing-library/user-event@13.5.0
  + @testing-library/react@12.1.4
  added 38 packages from 109 contributors in 10.694s
  
  169 packages are looking for funding
    run `npm fund` for details
  
  Removing template package using npm...
  
  npm WARN @apideck/better-ajv-errors@0.3.3 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
  npm WARN fork-ts-checker-webpack-plugin@6.5.0 requires a peer of typescript@>= 2.7 but none is installed. You must install peer dependencies yourself.
  npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
  
  removed 1 package and audited 1415 packages in 5.64s
  
  169 packages are looking for funding
    run `npm fund` for details
  
  found 1 moderate severity vulnerability
    run `npm audit fix` to fix them, or `npm audit` for details
  
  Success! Created react-app at C:\git\reactjs-coding-everybody-study\Part01\react-app
  Inside that directory, you can run several commands:
  
    npm start
      Starts the development server.
  
    npm run build
      Bundles the app into static files for production.
  
    npm test
      Starts the test runner.
  
    npm run eject
      Removes this tool and copies build dependencies, configuration files
      and scripts into the app directory. If you do this, you can’t go back!
  
  We suggest that you begin by typing:
  
    cd C:\git\reactjs-coding-everybody-study\Part01\react-app
    npm start
  
  Happy hacking!
  
  C:\git\reactjs-coding-everybody-study\Part01\react-app>
  ```

  

---

## 의견

* 없음