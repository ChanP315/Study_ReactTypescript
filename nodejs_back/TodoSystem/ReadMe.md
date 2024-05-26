todo-fe-login-student directory는 강의 git clone 한 것.

@@Todo - BE@@
//할일앱 만들기 1~8 작업 완료
/* 할일앱 만들기
- 해야할 일을 추가한다 C
- 할일 리스트를 볼 수 있다 R
- 할일에 대해서 끝남 안끝남 표시를 할 수 있다. U
- 할일을 삭제할 수 있다. D

1. npm 세팅 (express, mongoose, app 리스너)
2. 라우터 주소 정의
3. 데이터베이스 스키마 정의
4. 기능정의 : CRUD
5. 테스트 : postman 사용
*/
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


//로그인 만들기1 - 회원가입 만들기 BE
/* 회원가입
- 유저가 이메일, 패스워드, 이름을 입력해서 보냄
- 받은 정보를 데이터베이스에 저장함 (데이터 베이스 모델 필요)
- 패스워드를 암호화 하여 저장

1. 라우터
2. 모델
3. 데이터 저장 (이미 가입된 유저 유무, 패스워드 암호화)
4. 응답을 보낸다
*/

npm install bcrypt; //password 암호화
npm install bcryptjs; //password 암호화


//로그인 만들기2 - 로그인 만들기 BE
/* 로그인
- 이메일 패스워드를 입력해서 보냄
- 데이터베이스에 해당 이메일과 패스워드를 가진 유저가 있는지 확인
  - 없다면 로그인 실패
  - 있다면 유저정보 + 토큰
- 프론트엔드에서는 이 정보를 저장

1. 라우터 설정
2. 이메일 패스워드 정보 읽어오기
3. 이메일을 가지고 유저정보 가져오기
4. 이 유저가 디비에 있는 패스워드와 프론트엔드가 보낸 패스워드가 같은지 비교하기
  4-1. 맞다면 토큰 발행
  4-2. 틀리면 에러 메시지 보냄
5. 응답으로 유저정보 + 토큰 보냄
*/

npm install jsonwebtoken //login시 필요한 token 발행

res.send가 return 역할을 하는 것처럼 보이지만 실상 return과 같이 함수를 종료하지 않는다.

[problem_solving 추가]
  + ArrowFunction this ERROR

[Mongoose ]
  + toJson
      toJson()은 몽구스 문서 객체를 JSON형식으로 변환하는 기능을 제공한다.

  + methods
      methods는 몽구스 모델에 함수를 추가하는데 사용되는 속성이다. methods를 사용해 스키마 내부에 함수를 정의하면 좋은점은 스키마로 생성된 데이터 값을 호출해서 쓸 수 있다.
          const schema = new mongoose.Schema({
            name: String,  age: Number
          });

          // 사용자 정의 메서드 추가
          schema.methods.greet = function() {
            console.log(`Hello, my name is ${this.name}`);
          };//greet를  호출한 객체가 this가 됨 

          const user = new User({name:"noona",age:10})
          user.greet() //이 user가 greet()를 호출했음으로 greet()함수안에 this는 {name:"noona",age:10} 이다. 



@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@Todo - FE@@
/* 할일앱 만들기
1. 깃 클론(강의에서 이미 준비해둔 것이 있음.)
2. 기능만들기 : CRUD
3. 테스트
*/

/* 로그인 만들기 5 - 로그인 FE
1. 유저는 로그인을 할 수 있다.
2. 로그인이 실패한 경우 에러메세지를 로그인창 상단에 보여준다.
3. 로그인 성공할 경우 유저정보를 state에 저장한다.
4. 로그인이 성공한 경우 토큰값을 session storage에 저장한다
5. 로그인이 성공한 경우 api 헤더에 토큰값을 디폴트로 설정해둔다.
6. 로그인이 성공한 경우 할일페이지 /로 넘어간다
*/

/public/_redirects File에
  /* /index.html <<추가

    /* /index.html  200이 왜 필요했던 거예요?
    조병민
      리액트가 쓰는 SPA라 환경에서 라우팅되는 경로를 인식하지 못하면 public 폴더 내에있는 index.html으로 리다이렉트 해주는 코드에여
    조병민
      리액트 src/index.js 파일에서 index.html에서 쓰이는 root라는 id값을 받아와서 렌더링하는데 proxy로 배포된 환경에서 그 부분에서 문제가 일어나나봐여 (편집됨) 


Local Storage vs Session Storage🤼‍♂️
둘다 웹 브라우저가 제공하는 데이터 저장소이다.🛢 보통 약 5 MB정도의 데이터를 저장할 수 있고 자바스크립트로 직접 접근해 데이터를 저장, 읽기,제거(getItem,setItem,removeItem)를 할 수 있다.
단 둘의 차이가 있다면 데이터 저장 유지 기간이다.

Local storage👴: 영구적 데이터 저장소, 사용자가 일부러 브라우저 정보를 삭제하지 않는 이상 계속 유지가 된다. 특정도메인에서 저장한 데이터는 다른 도메인과 공유하지 않는다.
session storage🎈: 세션이 유지되는 동안에만 유요한 저장소 (여기서 세션 유지란, 브라우저가 닫히거나 종료되는 것) 같은 도메인내에 모든 페이지에서 데이터 공유함.
따라서 토큰값을 session storage에 저장을 하면 브라우저가 닫히는 순간 토큰이 날라가게되서 새로운 창을 열면 다시 로그인을 해야한다. 이와같은 단점을 보안하기위해 refresh token이라는 개념이 있다.♻ refresh token은 로컬스토리지에 저장을해서 브라우저가 닫히더라고 이 refresh token을 이용해 다시 로그인 필요없이 토큰을 재발행 할 수 있는 로직이다. 이로직은 이 코스에서 다루진 않지만 관심있는 친구들이라면 한번 공부해보는 것을 추천한다!


Bearer 🕵️‍♂️🎫
Bearer은 토큰의 유형을 식별하는 문자열이다. 토큰을 발행하고인증하는 방식은 다양한데 그중에서 Oauth2.0방식을 사용하는 jwt의 경우 해당토큰이 oauth2.0 bearer토큰 인증 방식 이라는 걸 사용한다는걸 표기해주기위해 Bearer을 앞에 붙인다.

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

nodejs_back/TodoSystem/Todo_FE/public/_redirects
  - /api/* http://<notion/문서/AWS(아마존)-12개월/Todo-Study의 주소>/api/:splat 200

nodejs_back/TodoSystem/Todo_FE/.env
  - REACT_APP_BACKEND_URI=http://localhost:4000
  - REACT_APP_BACKEND_PROXY=https://<netlify에 배포되어있는 Todo domain>

nodejs_back/TodoSystem/Todo-BE/.env
  - MONGODB_URI_PROD=<notion/문서/mongoDB site 에 있음. 계정과 비밀번호가 같음.>/todo-student
  - JWT_SECRET_KEY=pcy