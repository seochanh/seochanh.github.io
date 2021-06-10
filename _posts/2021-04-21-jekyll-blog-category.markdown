---
layout: post
title: 'Jekyll 블로그 카테고리 기능 추가'
tags: [jekyll]
categories: [jekyll]
# image: '/images/posts/8.jpg'
---

태그 기능을 한 번 추가해봐서 그런지 태그 기능을 추가할 때보다 작업하기 확실히 수월했다. 다만 아직 `liquid` 문법을 제대로 이해하지 못해서 끼워 맞추는 형식이기는 하지만 잘 작동한다.

### 1. _layouts 폴더에 category.html 파일 생성
`_layouts` 폴더에 `category.html` 파일을 생성하여 나의 jekyll 블로그 테마 맞게 내용을 바꿔 추가해주었다.

```html
{% raw %}
---
layout: default
---
<div class='o-wrapper'>
  <div class="o-grid">
    {% assign category = page.category | default: page.title %}
    {% for post in site.categories[category] %}
      {% include post-card.liquid %}
    {% endfor %}
  </div>
</div>
{% endraw %}
```

<br>

### 2. category 폴더 생성 및 파일 생성
최상위 디렉토리에 `category` 폴더를 생성하고 원하는 카테고리 명의 `md` 파일을 추가해준다. 파일 내부에는 아래와 같은 내용을 추가한다.

```liquid
{% raw %}
---
layout: category
title: '카테고리 제목'
---
{% endraw %}
```

내가 쓰는 jekyll 블로그의 테마는 `/_includes/navigation.html` 부분은 따로 수정하지 않았지만 `category` 폴더 내부의 카테고리가 내비게이션에 잘 추가되었다.

<br>

### 3. 블로그 포스트에 category 추가
포스트 내용에 `categories`를 추가하여 카테고리를 지정해주면 된다. 카테고리를 복수로도 지정할 수 있다.

```liquid
{% raw %}
---
layout: post
title: 'Lorem ipsum'
categories: [hello, bye]
---
{% endraw %}
```

<br>

---

### 추가로 공부가 필요한 내용
1. 모든 태그와 카테고리가 중복으로 적용되어 사용이 애매해졌다.
2. `navigation.html` 파일을 따로 수정하지 않았지만, 정상적으로 구동되는 이유를 분석해봐야겠다.

---

###### 참고: [지킬(Jekyll) 블로그 카테고리(category) 만들기 - devYurim](https://devyurim.github.io/development%20environment/github%20blog/2018/08/07/blog-6.html)