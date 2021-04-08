---
layout: page
permalink: /poetry/
title: Poetry
---

<!-- /layouts/page.html 파일의 {{content}} 내부에 삽입 -->

테스트 중입니다.
<ul class="post-list">
  <li>
    <h2><a class="poem-title" href="{{ poem.url | prepend: site.baseurl }}">테스트 중입니다.</a></h2>
    <p class="post-meta">{{ poem.date | date: '%B %-d, %Y — %H:%M' }}</p>
  </li>
<!-- {% for poem in site.poetry reversed %} -->
{% for poem in site.posts reversed %}
  <li>
    <h2><a class="poem-title" href="{{ poem.url | prepend: site.baseurl }}">{{ poem.title }}</a></h2>
    <p class="post-meta">{{ poem.date | date: '%B %-d, %Y — %H:%M' }}</p>
  </li>
{% endfor %}
</ul>