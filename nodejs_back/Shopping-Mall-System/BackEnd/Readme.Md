npm install express mongoose dotenv body-parser cors jsonwebtoken bcryptjs nodemon

배포시에 반드시
    1. package.json : "scripts" 에 ["start": "node app.js"] 추가하기
    2. Procfile 파일 생성후 [web: npm start] 추가하기.
    3. .ebextensions 폴더 생성, cors.config 파일 생성, 
    3-1. 아래 코드 추가
        option_settings:
            aws:elasticbeanstalk:environment:proxy:staticfiles:
                "/api/*": "http://localhost:3000"