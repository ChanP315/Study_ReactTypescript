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