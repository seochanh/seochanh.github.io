---
layout: post
title: CSS 스크롤바 디자인
tags: [html, css, tag01]
# image: '/images/posts/8.jpg'
---

(IE에서는 적용이 되지 않았지만) CSS만 있으면 적용할 수 있어서 아주 간단했다.
스크롤이 있는 요소에 가상요소를 3개만 추가해주기만 하면 된다.

- `::webkit-scrollbar` : 스크롤바 전체
- `::webkit-scrollbar-thumb` : 스크롤 막대
- `::webkit-scrollbar-track` : 스크롤 막대 외부

그리고 마음에 드는 모양과 색으로 커스텀 해주기만 하면 된다.

```css
#header nav{height:100vh; overflow-y:auto;}
#header nav::-webkit-scrollbar{width:10px;}
#header nav::-webkit-scrollbar-thumb{background-color:#f2f2f2; border-radius:10px; background-clip:padding-box; border:2px solid transparent;}
#header nav::-webkit-scrollbar-track{background-color:#bdbdbd; border-radius:10px; box-shadow:inset 0px 0px 5px white;}
```

<br>

---

###### 참고: [[HTML, CSS] 스크롤바 스타일(디자인)하는 방법 - Eoldam spark](https://codingbroker.tistory.com/66)