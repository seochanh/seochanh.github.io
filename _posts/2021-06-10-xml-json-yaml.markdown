---
title: '[XML, JSON, YAML] 데이터 표현 형식(XML, JSON, YAML)'
tag: [jekyll, vscode]
categories: [jekyll]
---

데이터를 표현하는 형식에는 `XML`, `YAML`, `XML`이 있으며 Jekyll 블로그에서는 환경설정을 위해 `YAML(_config.yml)`을 사용한다.

<br>

### 1. XML
  - `HTML`과 비슷한 구조
  - 속성 명시도 가능함
  - 주석 사용이 가능함(`<!-- -->`)
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <users>
      <user>
        <name color="red" type="bold">홍길동</name>
        <score>95</score>
        <hobby>
          <element>Soccer</element>
          <element>Ninza</element>
        </hobby>
      </user>
      <user>
        <name>이순신</name>
        <score>100</score>
        <hobby>
          <element>Sing</element>
          <element>Dancing</element>
        </hobby>
      </user>
    </users>
    ```

<br>

### 2. JSON(JavaScript Object Notation)
  - `JavaScript` 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷
  - 문자열 형태로 존재함
  - 주석을 사용할 수 없음
  - `VSCode`의 환경설정은 `JSON(settings.json)`을 사용함
    ```json
    {
      "users": {
        "1": {
          "name": "홍길동",
          "score": 95,
          "hobby": ["Soccer", "Ninza"]
        },
        "2": {
          "name": "이순신",
          "score": 100,
          "hobby": ["Sing", "Dancing"]
        },
      }
    }
    ```

<br>

### 3. YAML
  - 태그를 사용하지 않고 개행, 공백으로 블록을 인식함
  - `JSON`은 한글 등의 멀티바이트 문자를 인코딩하여 보여주지만 `YAML`은 한글과 같은 유니코드를 그대로 사용할 수 있다는 것이 장점
  - `key: value`로 표현하며, `:`다음에는 무조건 공백 문자가 와야 함
  - 주석 사용이 가능함(`#`)
    ```yaml
    users:
      1:
        name: 홍길동
        score: 95
        hobby:
          - Soccer
          - Ninza
      2:
        name: 이순신
        score: 100
        hobby:
          - Sing
          - Dancing
    ```

  <br>

#### ✅ JSON과 YAML 비교
  1. YAML
      ```yaml
      # list 표현 방식
      basic_list:
        - apple
        - banana
        - orange
      another_list: [
        apple,
        banana,
        orange
      ]
      object_list:
        - color: red
          direction: left
        - color: blue
          direction: right

      # object 표현 방식
      basic_object:
        time: '12:34:11'
        date: '2019-04-30'
      another_object: {
        time: '12:34:11',
        date: '2019-04-30'
      }

      # text 표현 방식
      comment_line_break: |
        Hello my name is wook.
        Im developer.
      comment_single_line: >
        Hello world
        my first yml syntax.
      ```

  2. JSON
      ```json
      {
        "basic_list": [
          "apple",
          "banana",
          "orange"
        ],
        "another_list": [
          "apple",
          "banana",
          "orange"
        ],
        "object_list": [
          {
            "color": "red",
            "direction": "left"
          },
          {
            "color": "blue",
            "direction": "right"
          }
        ],

        "basic_object": {
          "time": "12:34:11",
          "date": "2019-04-30"
        },
        "another_object": {
          "time": "12:34:11",
          "date": "2019-04-30"
        },

        "comment_line_break": "Hello my name is wook.\nIm developer.\n",
        "comment_single_line": "Hello world my first yml syntax."
      }
      ```

---

###### 참고: [XML, JSON, YAML 형식 내용 정리 및 비교 분석 - 안경잡이개발자(https://ndb796.tistory.com/251)
###### 출처: [yaml (yml) 문법 정리 - 개발자님 cs 드세요](https://lejewk.github.io/yaml-syntax/), [JSON으로 작업하기 - MDN](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON)