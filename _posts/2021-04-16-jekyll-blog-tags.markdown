---
layout: post
title: 'jekyll 블로그 태그 기능 추가'
tags: []
# image: '/images/posts/8.jpg'
---

다양한 종류의 글을 쓰다보니까 분류가 필요할 것 같아서 jekyll 블로그에 태그를 추가해보았다. 같은 테마가 아니라서 똑같이 복사 붙여넣기를 할 수 없어서 어렵기는 했지만 오랜만에 문제를 해결해나가는 공부를 해서 재밌었다.
다 만들고 나서 깨달은 사실은 나에게 필요한 것은 태그가 아니라 카테고리라는 것..?
그래도 태그를 한 번 추가해봤으니까 카테고리는 좀 더 쉽게 만들 수 있을 것 같다.

<br>

### 태그 목록을 별도 파일로 관리하기
#### tags.yml
```yml
# _data/tags.yml
- javascript
- blog
- jekyll
```


`_data`라는 디렉토리에 `tags.yml`이라는 파일을 만들어 저장된 태그만 사용하는 기능을 추가할 수 있었다.


```html
{% raw %}
{% if page.tags %}
  {% for tag in page.tags %}
    {% if site.data.tags contains tag %}
      <span class="tag">{{ tag }}</span>
    {% endif %}
  {% endfor %}
{% endif %}
{% endraw %}
```


아직 문법 사용하는 방법을 제대로는 모르겠지만 보다보니까 조금은 알 것 같다. `if`를 이용해 `site.data.tags` 안의 `tag`만 불러오는 것이다. 신기하다.

> Jekyll 문법에 대한 설명 :
> "Jekyll에는 기본적으로 몇 개의 전역 변수들이 선언되어 있는데, 그 중 하나가 `page`입니다. 이 `page`에는 아까 각 포스트의 머릿말에 포함된 변수들이 포함되어 있기 때문에, `page.tags`와 같은 문법으로 태그 목록을 불러올 수 있습니다."

<br>

#### format.yml
```yml
# _data/format.yml
javascript : JavaScript
blog : Blog
jekyll : Jekyll
```

추가로 `_data` 디렉토리에 `format.yml`파일을 만들어 `key`와 `value`를 선언해주면 태그를 원하는 값으로 출력할 수 있다.(javascript -> JavaScript)

<br>

### 포스트 목록에서 태그 별 필터링 기능
#### data-tag가 붙은 태그 추가

```liquid
{% raw %}
<!-- /index.html -->
{% for tag in site.data.tags %}
  <a class="tag" data-tag="{{tag}}">
    {{ site.data.format[tag] }}
  </a>
{% endfor %}
{% endraw %}
```

위 코드를 사용해 Jekyll에서 사용하고 있는 모든 태그를 보여지게 한다. 추가로 `data-tag`라는 속성도 붙는다.

<br>

#### data-tag가 붙은 포스트 목록 추가

```html
{% raw %}
<!-- post-card.liquid-->
<div class='o-grid__col o-grid__post'
  {% if post.tags %}
    {% for tag in post.tags %}
      data-{{ tag }}
    {% endfor %}
  {% endif %}>
{% endraw %}
```

index 페이지의 포스트 목록에 위 코드를 이용해 포스트에 `data-[태그값]`을 추가해준다. (`<div class='o-grid__col o-grid__post' data-blog data-jekyll>...</div>`)

<br>

#### 필터링 추가

```javascript
// custom.js
$("[data-tag]").click((e) => {
  currentTag = e.target.dataset.tag;
  filterByTagName(currentTag);
})

function filterByTagName(tagName) {
  $('.hidden').removeClass('hidden');
  $('.o-grid__post').each((index, elem) => {
    if (!elem.hasAttribute(`data-${tagName}`)) {
      $(elem).addClass('hidden');
    }
  });
  $(`.tag`).removeClass('selected');
  $(`.tag[data-tag=${tagName}]`).addClass('selected');
}
```

> 1. 클릭한 태그의 `data-tag` 속성에 저장된 값을 읽어온다
> 2. 만약 이미 필터링 된 포스트들이 있다면, 기존의 필터링을 해제한다
> 3. `data-[태그값]`들을 포함하고 있는 엘리먼트(`.post-wrapper`)를 순환하면서 태그값이 없는 경우 `.hidden` 클래스로 숨겨준다
> 4. 태그가 선택되었다는 것을 시각적으로 표현하기 위해 선택된 태그에 `.selected` 클래스를 입혀준다

- `hidden`과 `selected` 클래스에 `css`를 주고 선택자를 적절히 맞춰야 제대로 동작한다.

<br>

---

### 나중에 공부할 내용
- 마지막 필터링 추가 내용에서 `js` 코드가 어렵다. 나중에 차차 공부해야 겠다. 특히 중간에 `.each()` 안에 `index` 파라미터는 사용되지도 않는 것 같다.

---

###### 출처: [Jekyll 포스트에 태그 기능 추가하기 - 재그지그](https://wormwlrm.github.io/2019/09/22/How-to-add-tags-on-Jekyll.html)

<br>
