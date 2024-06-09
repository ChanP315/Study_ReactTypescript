npm install express mongoose dotenv body-parser cors jsonwebtoken bcryptjs nodemon

cart.controller.js에서
    1. 디비에서 외래키 참조하여 데이터 가져오는 populate 사용.
    2. //{$pull: {items: {cartInItemId}}} 하지말고 items값에 확실하게 _id라는 것을 아래와 같이 지칭해줘야함.
        const cart = await Cart.updateOne({userId}, {$pull: {items: {_id: cartInItemId}}});

배포시에 반드시
    1. package.json : "scripts" 에 ["start": "node app.js"] 추가하기
    2. Procfile 파일 생성후 [web: npm start] 추가하기.
    3. .ebextensions 폴더 생성, cors.config 파일 생성, 
    3-1. 아래 코드 추가
        option_settings:
            aws:elasticbeanstalk:environment:proxy:staticfiles:
                "/api/*": "http://localhost:3000"


BackEnd.zip --version descript -배포 성공한 버전만 기재
    v1.0.1: 쇼핑몰 만들기 5~6
    v1.1.0: 쇼핑몰 만들기 7~8
    v1.2.0: 쇼핑몰 만들기 9~11
    v1.3.0: 쇼핑몰 만들기 12~13
    v1.4.0: 쇼핑몰 만들기 14~15
    v1.5.0: 쇼핑몰 만들기 16~17
    v1.6.0: 쇼핑몰 만들기 18~19 과제까지 완료
    v1.7.0: 쇼핑몰 만들기 20~21 3필수, 3선택 과제 중 3필수 과제까지 완료
    v1.8.0: 쇼핑몰 만들기 22~23 과제까지 완료
=======================================================================================================
16 상품 검색하기
regex란?
정규표현식, 영어로는 regular expression이라고 한다.
규칙을 가진 문자열을 찾는데 사용하는 표현 식이다.
예를들어 s를포함한 문자열찾기 ,s로 끝나는또는 시작하는 문자열 찾기 등등 문자열의 규칙을 찾을때 사용되는 식이다. (외울필요는 없고 내가 필요할때마다 구글에 검색하면 검색내용에 맞는 정규식을 찾아볼 수 있다.)


정규식은 nodejs뿐만아니라 범용적으로 사용되는 규칙이니 참고하자!

이러한 정규식은 데이터베이스에서 어떤 조건으로 넣기 좋다.
mongodb에서 이런 정규식을 이용한 조건을 넣고싶으면 $regex하고 사용하면된다

자세한 문서: https://www.mongodb.com/docs/manual/reference/operator/query/regex/


