---
layout: post
title: '[YAML,Liquid,GitBlog] 깃허브 블로그에 Open Graph 태그 넣기 (1)'
tags: [jekyll, yaml, liquid, github, tag01]
image:
  feature: /images/posts/jekyll.jpg
---

현재 이 블로그는 Jekyll의 테마를 이용해 만든 깃허브 블로그입니다. 테마를 그대로 이용하니 오픈그래프가 제대로 입력되어 있지 않아 입력하는 방법을 찾느라 고생했습니다. 오픈그래프를 제대로 동작하게 입력하기 위해서는 그동안 몰라서 건드리기 싫었던 Jekyll 내부의 문법을 건드려야 했거든요..


{% raw %}
```
{ % for post in paginator.posts % }
  { include post-card.liquid }
{ % endfor % }
```
{% endraw %}


생전 처음보는 문법이라서 이 문법을 사용하는 양식의 이름을 찾는 것부터가 고비였습니다. 처음에는 비슷한 문법을 사용하는 파이썬의 Django라는 프레임워크를 찾았습니다.
![Django](/images/posts/2020-08-25/django.png)
[위의 사진](https://tutorial.djangogirls.org/ko/django_templates/)을 보면 아시겠지만 Jekyll의 문법과 정말 유사해서 처음에는 정말 파이썬을 공부해야 하나 했습니다. 다행인지 Django로 구현한 것은 아니었습니다. 더 찾아보니 YAML라는 양식과 Liquid라는 언어로 구현한 것이었습니다.

<br>

### 1. YAML
[위키백과](https://ko.wikipedia.org/wiki/YAML)에 정의되어 있듯이 YAML은 **사람이 쉽게 읽을 수 있는 데이터 직렬화 양식**입니다. 다른 양식들에 비해 얼마나 쉬운지는 [이 글](https://www.inflearn.com/questions/16184)의 다른 양식(Json, Xml)과 비교를 한 것을 보면 확실히 이해할 수 있습니다.
<p align="center"><img src="/images/posts/2020-08-25/yaml.jpg" alt="YAML"></p>
프로그래밍 언어를 조금이라도 아는 사람이라면 이 사진만 보면 구조를 단숨에 이해할 수 있을 것입니다. 이 양식의 구조가 포스트 상단 쓰이고 오픈그래프를 불러오는데 사용되기 때문에 이 양식을 먼저 알아야 했습니다.

```markdown
---
layout: post
title: '[YAML,Liquid,GitBlog] 깃허브 블로그에 Open Graph 태그 넣기(1)'
tags: [jekyll, yaml, liquid]
# image: '/images/posts/8.jpg'
---
```

실제 이 글 상단에 들어간 YAML 구조입니다. 이것을 `YAML Front Matter`하며 정의된 변수도 있고 사용자가 지정하여 사용할 수도 있습니다.
> YAML은 HTML과도 호환이 되는 것 같습니다. 나중에 확인해 봐야겠네요.
- [정의된 YAML 머리말 변수](https://jekyllrb.com/docs/front-matter/)

<br>

### 2. Jekyll 변수
처음에는 YAML에서 정의되지 않은 객체들의 등장에 당황했습니다. 알고 나니 Jekyll이 블로그를 관리하기 참 편하게 만들어졌다는 걸 깨달았지만요. YAML에서 정의되지 않은 site와 page와 같은 객체가 등장한다면 Jekyll의 변수입니다. 더 자세한 내용는 아래 사이트를 참고하세요.
- [변수 참고](http://jekyllrb-ko.github.io/docs/variables/)

<br>

### 3. Liquid
Liquid는 **Ruby로 작성된 오픈소스 템플릿 언어로 일반 텍스트를 정적 웹사이트로 변환해주는 Jekyll에 사용되는 언어입니다.**
YAML을 이해했다면 YAML의 요소들을 Liquid 문법을 이용해 불러와서 사용하면 됩니다. 문법이 매우 단순해서 프로그래밍 언어를 조금 알고 있다면 사용하는데 큰 어려움은 없습니다. YAML구조와 Jekyll의 변수를 잘 고려하여 작성하면 됩니다.
저는 처음에 YAML 구조를 모르고 작성하느라 엄청 고생했습니다. 들여쓰기가 있으면 객체가 되고 `-`를 사용하면 배열이 됩니다. 객체는 {% raw %}`{{ page.image.feature }}`{% endraw %}과 같이 사용하여 출력이 가능합니다. 배열은 {% raw %}`{% for item in page.image %}`{% endraw %}과 같은 Liquid의 for 구문 사용이 가능합니다.
- [내용 출처 및 문법 요소 참고](https://goodgid.github.io/What-is-Liquid-Grammer/), [더 자세한 내용 참고](https://jekyllrb.com/docs/includes/)
> 1. Liquid는 {% raw %}`{% if %}`{% endraw %}와 {% raw %}`{% endif %}`{% endraw %} 사이에서는 주석 처리가 되지 않습니다. 주석처리는 {% raw %}`{% comment %}{% endcomment %}`{% endraw %}로 합니다.
> 2. Liquid 코드를 포스트 내부에 쓰려면 [raw 태그를 사용해야 합니다.](https://shopify.github.io/liquid/tags/raw/) 굉장히 특이해서 배우는 맛이 있네요.


<br>

# 마침
1. `YAML`, `Liquid`라는 이름도 모른 채로 검색을 하고 공부를 하는 건 굉장히 힘들지만 재미있네요. 꽤 어려운 문제도 구글링을 통해 해결할 수 있다는 자신감이 생겼습니다.
2. `Jekyll`은 (제대로 알고만 있으면) 정말 블로그 작업을 쉽게 할 수 있게 만들어진 것 같습니다.
3. 오픈그래프도 마무리 짓고 카테고리도 설정하고 검색도 할 수 있게 하고 싶어요. 할 일이 태산이네요.