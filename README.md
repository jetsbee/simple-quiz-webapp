This is a simple quiz web app with [Trivia API](https://opentdb.com/api_config.php).

## 결과물 실행해 볼 수 있는 url

https://jetsbee.github.io/simple-quiz-webapp


## 테스트 범위

주요 비즈니스 로직(퀴즈 풀기)과 컴포넌트가 있는 "quiz 페이지(/quiz)"를 스토리북 활용하여 테스트 작성.

현재 유저 인터렉션이 가장 많이 일어나는 부분이 quiz 페이지임.

Visual test와 Interaction test 작성.


### Visual test

Server API를 목킹하여 API 결과에 따른 UI 컴포넌트 표현을 테스트.


### Interaction test

사용자 행위를 시뮬레이션함. (퀴즈를 푸는 행위)

기능적인 동작을 테스트.


## 개발환경 실행

```bash
yarn dev
```


## 테스트 실행

```bash
yarn test
```
