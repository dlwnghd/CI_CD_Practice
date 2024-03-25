# CI/CD_Practice
`CI/CD 연습용 레퍼지토리입니다.`

## CI/CD 정의

어플리케이션의 개발부터 배포 때까지 모든 단계를 자동화를 통해 조금 더 효츌적이고 빠르게 사용자에게 빈번히 배포할 수 있도록 만드는 것이다.

- CI(Continuous Integration) : 지속적인 통합
- CD(Continuous Delivery) : 지속적인 제공
- CD(Continuous Deployment) : 지속적인 배포

### CI(Continuous Integration)
`빌드/테스트 자동화 과정`으로 버그 수정, 새로운 기능 추가 등 새로운 코드 변경 사항이 메인 레포지토리에 주기적으로 빌드 및 테스트되어 머지되는 것

### CD(Continuous Delivery & Continuous Deployment)
`배포 자동화 과정`으로 `지속적인 서비스 제공` 또는 `지속적인 배포`를 의미.
- Continuous Delivery는 공유 레퍼지토리로 자동으로 Release 하는 것
- Continuous Deployment는 Production 레벨까지 자동으로 deploy 하는 것


## GitHub Action
[Event](#1-Event)
[Workflow](#2.Workflow)
[Job](#3.Job)
[Action](#4.Action)
[Runner](#5.Runner)

---

### `Event` : 어떠한 상황(Event)이 발생했는지 명시
  - 나의 pr를 main 브랜치로 머지
  - 커밋의 푸쉬
  - 이슈를 누군가 열면
  - ...

### `Workflow` : 특정 이벤트 발생 시 어떤 일을 수행하고 싶은지 명시
  - 하나의 Event에 여러 Workflow를 작성할 수 있다.

### `Job` : 수행해야하는 작업(직렬/병렬 둘 다 가능)
  - 하나의 Workflow에 여러 Job이 가능하다

### `Action` : 재사용 할 수 있는 공개적으로 오픈된 Action

### `Runner` : 작업을 실행하는 VM(Virtual Machine)

---

## 사용법

1. .github/workflows/ 파일 경로 생성
  - .github 폴더 안에 workflows라는 폴더 생성

2. .yml 파일 생성
  - (Ex.) `workflow.yml`

  ```yml
  name: learn-github-actions
  on: [push]
  jobs:
    check-bats-version:
      runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v3
          - uses: actions/setup-node@v3
            with:
              node-version: '14'
          - run: npm install -g bats
          - run: bats -v
  ```