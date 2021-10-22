<h1>🚢항해 99</h1>

- 프로젝트  <br>
  네이버시리즈 클론코딩(https://series.naver.com/novel/home.series?isWebtoonAgreePopUp=true)

  🎉 사이트 주소 :
  📺 데모 영상:

🎯 개발 목표
  1. Mysql을 이용한 관계형 데이터베이스 사용
  2. 회원가입 JWT방식 
  3. 소설 구매 기능
  4. 소설 좋아요 기능
  5. 소설 댓글 기능
  6. 마이페이지 구매 소설 조회
  

- 프로젝트 기간 <br>
  2021-10-18 ~ 2021-10-22 (총 5일간)

<h2>👪Developers</h2>

- FrontEnd (React)
  - 👥윤진선 ([Github](https://github.com/jinsunYoon))


- BackEnd (Node.js)
  - 👥김영우 ([Github](https://github.com/cxz5309))
  - 👥김정호 ([Github](https://github.com/jeangho293))
  - 👥신성웅 ([Github](https://github.com/shinsw627)

<h2>Tech Stack</h2>

<img src="https://img.shields.io/badge/Yarn-1.22.15-2C8EBB?style=flat-square&logo=Yarn&logoColor=2C8EBB"/> <img src="https://img.shields.io/badge/React-17.0.1-61DAFB?style=flat-square&logo=React&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/React Router-5.3.0-CA4245?style=flat-square&logo=React Router&logoColor=CA4245"/> <img src="https://img.shields.io/badge/Redux-4.1.1-764ABC?style=flat-square&logo=Redux&logoColor=764ABC"/> <img src="https://img.shields.io/badge/MaterialUI-5.0.3-0081CB?style=flat-square&logo=Material-UI&logoColor=0081CB"/> <img src="https://img.shields.io/badge/Immer-9.0.6-00E7C3?style=flat-square&logo=Immer&logoColor=00E7C3"/> <img src="https://img.shields.io/badge/Axios-0.21.1-764ABC?style=flat-square&logo=Axios&logoColor=764ABC"/>    
<img src="https://img.shields.io/badge/Node.js-14.15.1-339933?style=flat-square&logo=Node.js&logoColor=339933"/> <img src="https://img.shields.io/badge/Express-4.16.1-000000?style=flat-square&logo=Express&logoColor=000000"/> <img src="https://img.shields.io/badge/MySQL-14.15.1-4479A1?style=flat-square&logo=MySQL&logoColor=4479A1"/> <img src="https://img.shields.io/badge/Sequelize-6.7.0-52B0E7?style=flat-square&logo=Sequelize&logoColor=52B0E7"/> <img src="https://img.shields.io/badge/JSON Web Tokens-8.5.1-000000?style=flat-square&logo=JSON Web Tokens&logoColor=000000"/> <img src="https://img.shields.io/badge/Swagger-6.1.0-85EA2D?style=flat-square&logo=Swagger&logoColor=85EA2D"/>
<h2>👀View</h2>

[comment]: <> (<img width="2048" alt="스크린샷 2021-10-16 오후 5 14 55" src="https://user-images.githubusercontent.com/58936251/137580149-f3ebcbc5-47d3-4f90-a514-7d1a0ae9a8c8.png">)
[comment]: <> (<img width="2048" alt="스크린샷 2021-10-16 오후 5 17 10" src="https://user-images.githubusercontent.com/58936251/137580199-4b9f9e22-6984-407a-a2d7-29fd57f7d73e.png">)
[comment]: <> (<img width="2048" alt="스크린샷 2021-10-16 오후 5 17 24" src="https://user-images.githubusercontent.com/58936251/137580201-2dbdcd8f-33f3-41ae-b739-97914f018c7d.png">)
[comment]: <> (<img width="2048" alt="스크린샷 2021-10-16 오후 5 17 35" src="https://user-images.githubusercontent.com/84619866/138459800-0ea7d171-5753-4861-9013-081c01f7e01d.png">)


<h2>✅API</h2>

<img width="720" alt="스크린샷" src="https://user-images.githubusercontent.com/84619866/138459800-0ea7d171-5753-4861-9013-081c01f7e01d.png">
<img width="720" alt="스크린샷" src="https://user-images.githubusercontent.com/84619866/138460002-bf8daa2e-5650-4a27-a051-cd067d2867c4.png">


<h2>:clipboard:ER 다이어그램:clipboard:</h2>

<img width="720" alt="ER 다이어그램" src="https://user-images.githubusercontent.com/84619866/138456777-9bfadb32-30e8-40ca-981a-f1d989dc476f.png">

<h2>📝라이브러리📝</h2>

- **React**
  - FrontEnd
- **jsonwebtoken**
  - JWT Token 로그인 인증 방식
    - ```사용자 인증 정보를 따로 저장소로 관리하지 않기 위해 채용```
- **bcrypt**
  - 로그인 비밀번호 단방향 암호화 방식
    - ```비밀번호와 같은 정보는 복호화할 이유가 없으므로 더욱 안정한 보안을 위해 채용```
- **cors**
  - Cross-Origin의 Resource 를 공유하는 정책
    - `특정 도메인에서만 request resource 를 받을 수 있게 설정`
- **dotevn**
  - 환경 변수 관리
    - `process.evn.PORT` 와 같이 환경 변수를 저장, 사용을 위함
- **joi**
  - Schema Validation 역할
    - `Schema의 유효성을 검사하기 위한 도구`
- **mysql2**
  - mysql 모델 정의
    - `node.js 에서 mysql을 사용하기 위한 도구`
    - mysql 과 mysql2 가 있는데 mysql 은 프로미스를 지원하지 않는다.
- **sequelize**
  - `node.js 에서 mysql 을 쉽게 사용하기 위한 ORM`
  - 객체와 관계형 데이터베이스를 mapping
- **sequelize-cli**
  - `터미널에서 명령어로 데이터베이스 작업을 할 수 있게 해주는 도구`
- **swagger-jsdoc** **swagger-ui-express**
  - 협업을 위한 API 명세
    - `프론트와 백엔드의 협업 시 API 정보와 TEST를 확인하기 위함`
- **morgan**
  - log 를 활용한 업무 효율 증가
    - `기능에 대한 log의 가시성을 높이기 위해 채용`
    - 배포 후 해당 기능은 삭제


<h2>❗트러블 슈팅</h2>
- **관계형 데이터베이스**
  
  이 프로젝트의 백엔드 DB는 MySQL를 채택했다. NoSQL 기반인 MongoDB를 사용하다가 MySQL을 사용하니 관계를 맵핑해주는 부분에서 많은 실수가 있었다.
  
  MongoDB와 다르게 테이블이 독립적인 형태가 아니라 관계가 맺어져 있다보니 후에 잘못된 구조라는 것을 알아도 쉽사리 바꾸기가 어려웠다.
  
  초반에 DB 구조를 탄탄하게 구성하지 않았기에 여러번 DB 구조를 수정하고 DROP하는 일이 생겼다. 

  다음 프로젝트부터는 
