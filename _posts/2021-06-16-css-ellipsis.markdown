---
title: '[HTML, CSS] CSS 말줄임 처리하는 방법'
tag: [html, css]
---

### 한 줄일 경우
```css
p {
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  width: 100%;
  overflow: hidden;
}
```
- `text-overflow: ellipsis`: 말줄임표로 처리, 상위 요소의 너비가 auto로 되어있는 경우는 적용할 수 없음.
- `white-space: nowrap`: 텍스트가 길어져도 줄바꿈을 하지 않고 한 줄로 표시함.

<br>

### 두 줄 이상일 경우
```css
p {
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap:break-word;
  line-height: 1.2em;
  height: 3.6em;                /* = (line-height 값) * (줄 수) */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;        /* 줄 수 */
}
```
> `webkit` 엔진을 사용하지 않는 브라우저의 경우 문제가 될수 있으므로, `line-height` 속성과 `height` 속성을 이용하여 높이를 계산하여 넣어준다.

- `display: -webkit-box`: `display: flex`의 `webkit`
  > `-webkit-`은 `Safari / Chrome`을 위한 HTML / CSS 웹 브라우저 렌더링 엔진
  > ###### 출처: [css - WebKit이란 무엇이며 CSS와 어떤 관련이 있습니까?](https://pythonq.com/so/css/9478)
- `-webkit-box-orient: vertical`: 상자의 내용물을 세로로 배치
- `-webkit-line-clamp: 3`: 블록 컨테이너의 콘텐츠를 지정한 줄 수만큼으로 제한.
  > `display` 속성을 `-webkit-box` 또는 `-webkit-inline-box`로, 그리고 `-`webkit-box-orient` 속성을 `vertical`로 설정한 경우에만 동작
  > ###### 출처: [-webkit-line-clamp - MDN](https://developer.mozilla.org/ko/docs/Web/CSS/-webkit-line-clamp)

<br>

---

<br>

###### 출처: [CSS 말줄임 처리하기 - 천재작곡가의 작업실](http://blog.tjsrms.me/css-%EB%A7%90%EC%A4%84%EC%9E%84-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0/)
###### 참고: [box-orient - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient), [css3 다양한 브라우저 지원 - eggs30](https://blog.naver.com/rwans0397/220646946889)