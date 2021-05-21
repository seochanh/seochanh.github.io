---
layout: post
title: '[Javascript] console과 객체(Object)'
tags: [javascript, tag01]
image:
  feature: /images/posts/javascript.jpg
---

객체에 대해 여러번 공부했지만 `console`이 객체라는 내용이 잘 이해가 가지 않았다. `console`과 `객체`라는 단어가 머릿속에 따로 놀았다. 그러다 **노마드코더의 바닐라 자바스크립트** 강의를 보고 이에 대해 드디어 이해하게 됐다. 이해한 것들을 잊지 않기 위해 정리를 해보려 한다.

<br>

### 1. 객체(Object)와 배열(Array)
당연하지만 `console 객체`를 이해하기 위해서는 일단 객체에 대해 알아야 한다. 객체를 정리리는 김에 객체처럼 데이터를 정리하는 방법인 배열도 함께 정리해보기로 했다.

<br>

##### 1. 배열(Array)

```javascript
const fruits = ["바나나", "딸기"];  // 배열을 만드는 방법
fruits[0];                       // 인덱스로 배열의 항목에 접근 (바나나)
typeof fruits;                   // object
```

1. 배열의 리터럴 표기법은 `[]`이고 객체에는 없는 인덱스의 개념이 있다.
2. `typeof 연산자`를 배열에 사용하면 `object`가 출력된다. 하지만 배열의 `prototype`은 `Array`이다.
3. 배열의 항목으로 또 다른 배열과 객체가 들어갈 수 있다.

- [배열-MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [객체와 배열의 차이](https://aomee0880.tistory.com/190)

<br>

##### 2. 객체(Object)

```javascript
const person = {
  name: ["Seo", "Chanh"],
  age: "26",
  gender: "male",
  greet: function() {
    alert(this.name[0] + " and " + this.name[1] + ", hello.");
  }
};              // 객체를 만드는 방법

person.name[0]; // 객체의 프로퍼티에 접근(person['name'][0])
person.greet(); // 객체의 메소드 호출
```

1. 객체의 리터럴 표기법은 `{}`이고 객체는 프로퍼티(데이터)와 메소드(함수)의 집합이다.
2. 객체에는 인덱스의 개념이 없다.
3. 객체의 프로퍼티로 또 다른 객체와 배열이 들어갈 수 있다.
> 객체 안에는 배열이 들어갈 수 있고 그 배열 안에는 객체가 들어갈 수 있다. 그 안에는 배열이 들어갈 수 있고 그 안에는 객체가 들어갈 수 있다. 또 그 안에는 ...

- [객체-MDN](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics)


<br>

### 2. console 객체

`console`은 이미 만들어져 있는 `객체`이다. 다른 객체들과 마찬가지로 프로퍼티와 메소드의 집합이다.
![console](/images/posts/2020-08-31/console.png)
콘솔창에 `console`을 쳐보면 console이라는 객체의 프로퍼티와 메소드를 볼 수 있다. 우리가 자주 쓰는 `console.log`의 `log`는 `console`이라는 객체의 메소드라는 것을 알 수 있다.
이와 마찬가지로 우리가 자주 쓰는 `document.write`는 `document`라는 객체와 `write`라는 메소드로 이루어져 있다.

- [console-MDN](https://developer.mozilla.org/ko/docs/Web/API/Console)

> 이렇게 구조를 이해하고 나니까 왜 이렇게 쓰이는지 알게 되고 대충 모양만 봐도 무슨 역할인지 알 수 있어서 정말 좋다.

<br>

- 참고: [초보자를 위한 바닐라 자바스크립트 (노마드 코더)](https://www.youtube.com/watch?v=wUHncG3VwPw&list=PL7jH19IHhOLM8YwJMTa3UkXZN-LldYnyK)