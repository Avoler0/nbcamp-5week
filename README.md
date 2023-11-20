# 환경변수
- .env 파일에 어떤 환경변수가 추가되어야 하는지 작성합니다.
- key=value 형태에서 key만 나열합니다. value는 비밀!

- SERVER_PORT : 서버 포트입니다. 로컬에서는 3000을 사용하고 AWS 와 같은 배포 페이지에서는 다른 포트를 사용하기도 하여 추가했습니다.
- JWT_SECRET_KEY : 토큰 생성 시 비밀 키로 토큰이 오염되었는지 안되었는지 체크할 수 있습니다.
- CRYPTO_SECRET_KEY : 비밀번호를 암호화 하기 위해 사용된 비밀 키입니다.
- PASSWORD_SALT : 비밀번호 암호화 시 이중 암호화를 위해 추가 했습니다.
- DB_ID : 배포 페이지와 로컬 페이지의 환경이 다르기에 추가 하였습니다.
- DB_PW : *
- DB_URL : *
- DB_NAME : * 

# API 명세서 URL

- <a href="http://docs.google.com/spreadsheets/d/165_D-zdNhFqC7dO4MvmtH80CixA5E4ZygXYt1e_Nowo/edit?ouid=111513919415132003355&usp=sheets_home&ths=true">API 명세서</a>

# ERD URL

- <a href="https://www.erdcloud.com/d/Mevrd5AosqvfLk2xu">ERD CLOUD</a>

# 더 고민해 보기

1. **암호화 방식**
- 비밀번호를 DB에 저장할 때 Hash를 이용했는데, Hash는 `단방향 암호화`와 `양방향 암호화` 중 어떤 암호화 방식에 해당할까요?
  <br/> ⭐ 단방향 암호화 기법 입니다.
- 비밀번호를 그냥 저장하지 않고 Hash 한 값을 저장 했을 때의 좋은 점은 무엇인가요?
  <br/> ⭐ 장점으로는 업그레이드 된 보안이라고 볼 수 있을것 같습니다. 직접적으로 노출 된다고 하더라도 Hash 값을 해독할 수 없으면 무용지물이니까요.
2. **인증 방식**
- JWT(Json Web Token)을 이용해 인증 기능을 했는데, 만약 Access Token이 노출되었을 경우 발생할 수 있는 문제점은 무엇일까요?
  <br/> ⭐ 사용자의 정보가 노출 되어 개인정보가 노출 될 수 있습니다.
- 해당 문제점을 보완하기 위한 방법으로는 어떤 것이 있을까요?
  <br/> ⭐ 토큰 안에 payload에는 최소한의 데이터를 주입합니다. 가령 userId와 같이 DB에서 index 역활을 하는 데이터를요.
    index 역활을 하는 데이터를 추가하면 조금 번거롭겠지만 서버에서 호출하여 DB에 접근하는 방식을 쓸 시 함부로 데이터에 접근하지 못하지 않을까요 ?
3. **인증과 인가**
- 인증과 인가가 무엇인지 각각 설명해 주세요.
  <br/> ⭐ 인증은 사용자의 신원을 확인하는 프로세스이고 인가는 인증 이후 사용자가 자원에 접근 할 수 있는지 확인하는 절차입니다.
- 과제에서 구현한 Middleware는 인증에 해당하나요? 인가에 해당하나요? 그 이유도 알려주세요.
  <br/> ⭐ 인증이라고 생각합니다. 미들웨어를 사용해서 사용자의 신원을 조회하고 확인 한 다음 API에서 인가를 진행한다고 볼 수 있을겁니다.
4. **Http Status Code**
- 과제를 진행하면서 `사용한 Http Status Code`를 모두 나열하고, 각각이 `의미하는 것`과 `어떤 상황에 사용`했는지 작성해 주세요.
  <br/> ⭐ 200 : 성공적인 응답 처리를 하였을 때 사용
  <br/> ⭐ 204 : 넘어온 데이터는 괜찮으나 이 데이터로 찾을 수 있는 데이터가 없을 시 사용
  <br/> ⭐ 400 : 잘못된 body 파일이나 유효성 검사등 클라이언트 측에서 보낸 데이터가 옳지 않을 때 사용
  <br/> ⭐ 500 : 예측하기 어려운 에러가 있을 시 공통적으로 사용
5. **리팩토링**
- MongoDB, Mongoose를 이용해 구현되었던 코드를 MySQL, Sequelize로 변경하면서, 많은 코드 변경이 있었나요? 주로 어떤 코드에서 변경이 있었나요?
  <br/> ⭐ 많은 코드 변경은 없었으며, find 부분에 where절을 명시적으로 추가하는 문법이나 delete시 사용되는 메서드를 destroy로 변경하는 등
    사용되는 문법을 조금 변경하였습니다. 주로 DataBase에 접근하는 코드들이 변경되었습니다.
- 만약 이렇게 DB를 변경하는 경우가 또 발생했을 때, 코드 변경을 보다 쉽게 하려면 어떻게 코드를 작성하면 좋을 지 생각나는 방식이 있나요? 있다면 작성해 주세요.
  <br/> ⭐ 첫 번째는 모듈화를 하는게 좋은 방법이라고 생각합니다.
  <br/> ⭐ 두 번째는 시퀄라이즈나 몽구스와 같이 SQL에 접근하는 LIB를 사용하는 방법이 좋을것 같습니다.

6. **서버 장애 복구**
- 현재는 PM2를 이용해 Express 서버의 구동이 종료 되었을 때에 Express 서버를 재실행 시켜 장애를 복구하고 있습니다. 만약 단순히 Express 서버가 종료 된 것이 아니라, AWS EC2 인스턴스(VM, 서버 컴퓨터)가 재시작 된다면, Express 서버는 재실행되지 않을 겁니다. AWS EC2 인스턴스가 재시작 된 후에도 자동으로 Express 서버를 실행할 수 있게 하려면 어떤 조치를 취해야 할까요?
  <br/> ⭐ AWS EC2에서 사용자 데이터 스크립트 편집 부분에서 EC2 실행시 자동으로 실행되게 설정해줄 수 있습니다.
  <br/> ⭐ 또는 pm2 startup / save를 사용하면 됩니다.

7. **개발 환경**
- nodemon은 어떤 역할을 하는 패키지이며, 사용했을 때 어떤 점이 달라졌나요?
  <br/> ⭐ node.js 환경으로 개발한 코드가 변경될 때 서버를 재시작하지 않아도 감지해서 자동으로 서버를 재 시작해주는 도구입니다.
    사용 하면 편한 로컬 개발이 가능합니다.
- npm을 이용해서 패키지를 설치하는 방법은 크게 일반, 글로벌(`--global, -g`), 개발용(`--save-dev, -D`)으로 3가지가 있습니다. 각각의 차이점을 설명하고, nodemon은 어떤 옵션으로 설치해야 될까요?
  <br/> ⭐ 글로벌은 윈도우에 설치하는 느낌, 그러니까 글로벌 폴더에 설치를 합니다.
  <br/> ⭐ 개발용은 package.json과 node_modules에 패키지 정보가 저장되지만 production 빌드 시 패키지가 포함되지 않습니다.