할일앱 1~8 작업 완료

//Todo - BE
npm install express mongoose body-parser

body-parser : http 리퀘스트에 있는 payload값을 req.body에 넣어서 줌.
body-parser Link : https://npmjs.com/package/body-parser

npm install nodemon : 실행하기 npx nodemon app.js

npm install cors : 보안 관련

npm install dotenv : 배포할 때 필요함


package.json + Procfile: add(web: npm start)
{
  "name": "todo-be",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    +++"start": "node app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongoose": "^8.4.0",
    "nodemon": "^3.1.0"
  }
}


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//Todo - FE