---
layout: post
title: '[MarkDown,Git Blog] 마크다운 내부에 HTML, CSS, JavaScript 작성하기'
tags: [markdown, html, css, javascript, gitblog]
categories: [jekyll]
image:
  feature: /images/posts/markdown.jpg
---

어제 처음 [블로그 포스트](https://uiuxchanh.github.io/2020/08/20/hex-opacity/ "Hex코트(16진수)와 투명도")를 올리는데 HTML, CSS, JavaScript가 모두 포스트 내부에 들어가야 했습니다. 마크다운 문서는 처음 써보는 거라서 방법을 찾아봤습니다.
1. 첫 번째로 **마크다운을 작성한 후 Html로 변환하는 방법**을 사용해봤습니다. 변환기가 있어서 변환 자체는 어렵지 않았지만 포스트 작성을 위해 필요한 마크다운 태그 중 HTML로 변환되지 않는 태그가 있었습니다. 그리고 제가 사용하는 블로그는 HTML 문서에 레이아웃이 적용되어 있지 않아 레이아웃 또한 엉망이어서 사용할 수 없었습니다.
2. 다음으로는 그냥 **마크다운 문서 내부에 모든 태그들을 집어넣었습니다**. 유레카! 대부분의 값들이 HTML 문서로 만든 것처럼 보여졌습니다. 문제가 있는 부분들은 태그를 더하거나 빼며 수정해 나갔습니다.

<br>

### HTML
```html
<div class="box0">
  <div class="hex0">0</div>
  <div class="rgb0">0</div>
</div>
```
- HTML 문서가 아니기 때문에 `<html>`, `<head>`, `<body>` 태그는 제외시켰습니다. `<!DOCTYPE>`, `<meta>`태그도 함께 제외했습니다. 뭔가 있어야할 것들이 빠진 것 같아서 불안했지만 이 태그들이 없어도 문제없이 동작했습니다.
>이번에는 `<div>` 박스 태그 외에는 사용한 태그가 없어서 다른 태그들은 사용 가능한지 확인 못했지만 원시 HTML 문법은 대부분 사용 가능하다고 합니다. 심지어 마크다운에서 지원하지 않는 기능을 사용해야 할 때는 원시 HTML을 사용해야 하는 경우도 있습니다. ([참고](https://heropy.blog/2017/09/30/markdown/#weonsi-html-raw-html))
1. 밑줄을 위해서는 `<u>` 태그를 사용해야 하고 이미지의 크기를 조절하기 위해서는 `<img>` 태그를 이용해야 합니다. 단순히 마크다운을 사용하더라도 HTML을 이미 알고 있다면 사용하기 더 좋겠네요.
2. 마크다운에서 구분선 사용 오류로 인해 html 태그인 [`<hr>`을 사용했다는 글](https://steemit.com/kr/@goodcontent4u/markdown-html)도 있네요.
3. 마크다운에서 동영상 삽입을 위해서는 `<iframe>`을 써야 합니다. 이외에도 필요에 의해 HTML 태그를 사용해야 하는 경우가 많을 것 같습니다.

<br>

### CSS
```css
<style type='text/css'>
  [class*="box"] { display: flex; width: 20%; height: 50px; }
</style>
```
1. `<style>` 태그 내부에 작성하면 적용이 됩니다.
2. 처음 상자를 지정할 때 `display: grid` 속성을 사용했는데 적용이 되지 않아 `display: flex`로 변경하여 사용했습니다. 그 외에 사용했던 속성 중에는 적용되지 않는 속성은 없었습니다. 브라우저마다 적용되는 CSS 속성이 다른 것과 비슷한 원리인 것 같습니다.
3. CSS를 적용하는 더 좋은 방법으로 변수로 감싸서 사용하는 것을 추천하는 글도 있네요. 하단의 코드가 그것입니다. 글에 나온대로 적용해보니 `(setq markdown-xhtml-header-content" ")`이라는 변수가 포스트 내부에도 보여서 그냥 삭제하고 `<style>` 태그만 남겼습니다. 제가 뭔가 잘못해서 적용이 안되는 걸까요? ([참고1](https://jblevins.org/log/custom-css), [참고2](https://github.com/jrblevin/markdown-mode/issues/183))
4. 3번의 변수를 이용해 외부 CSS도 적용 가능하다고 합니다. 이건 제대로 동작할지 궁금하네요. [링크](https://jblevins.org/log/custom-css))

```css
(setq markdown-xhtml-header-content
  "<style type='text/css'>
a { text-decoration: none; }
a:hover { text-decoration: underline; }
</style>")
```

<br>

### JavaScript
```javascript
function hexText() {
  for(let i = 0; i <= 100; i++) {
    let num = Math.round(255/100*i);
    let hexNum = decimalToHex(num, 2);
    document.getElementsByClassName(`hex${i}`)[0].innerHTML = `HEX<br>${hexNum}`;
  }
}
hexText();
```
1. `<script>` 태그 내부에 쓰니 문제없이 동작합니다.
2. 크롬과 엣지에서는 문제없이 동작했지만 IE에서는 제대로 동작하지 않았습니다. 또한 IE에서는 마크다운에 적용된 속성도 인식하지 못하는지 컨텐츠의 width 값이 제대로 조절되지 않았습니다. (IE에서는 반응형이 동작을 하지 않습니다.)
3. 문서를 작성하면서 태그의 위치가 몇 번 바뀌었지만 문제 없이 동작했습니다. 최종적으로 HTML 문서에서 제일 하단에 작성하는 것처럼 제일 하단에 작성했습니다.

<br>

# 마침
1. 마크다운과 마크업 언어 HTML은 참 많이 닮아있네요.
2. 어디까지가 원시 HTML일까요? `display: flex`가 적용되는 것을 보면 아주 원시는 아닌 것 같은데... 마크다운도 계속해서 발전하면서 읽을 수 있는 태그가 늘어나나 봅니다.
3. 마크다운은 브라우저에 따라서만 적용 여부가 결정되는 것은 아닙니다. 크롬에서도 `display: grid` 속성은 적용이 되거든요. 그런데 또 IE에서만 JS가 적용이 안된 것을 면면 브라우저의 영향도 받습니다. 뭐가 적용 기준인거죠?
4. 마크다운의 단점 중에 **표준이 없다**는 것이 있습니다. 그래서 그런지 HTML과 CSS, JavaScript 적용에 관해서도 표준이 없나 봐요. 어떻게 써야 마크다운 내부에 코드를 잘 썼다고 소문이 날까요.
5. 외부 CSS와 JavaScript도 link 등을 이용해 적용 가능한지 궁금하네요. 나중에 또 CSS와 JavaScript 적용이 필요한 글을 쓰게 되면 외부 링크를 이용해 봐야겠네요.

&nbsp;&nbsp;&nbsp;&nbsp;이런저런 의문이 많기는 하지만 마크다운은 단순히 글을 쓰기에는 아주 좋은 확장자인 것 같습니다. 마크다운에서 HTML, CSS, JavaScript를 사용하는 것에 있어서 표준이 좀 잡히면 좋을 것 같네요.