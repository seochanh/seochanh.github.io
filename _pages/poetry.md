---
layout: page
permalink: /poetry/
title: Poetry
description: in reverse chronological order, dating back to 2002. Dates preserved as closely to orignal writing as possible.
---

테스트 중입니다.
<ul class="post-list">
{% for poem in site.poetry reversed %}
  <li>
    <h2><a class="poem-title" href="{{ poem.url | prepend: site.baseurl }}">{{ poem.title }}</a></h2>
    <p class="post-meta">{{ poem.date | date: '%B %-d, %Y — %H:%M' }}</p>
  </li>
{% endfor %}
</ul>


<div class='o-wrapper'>
  <div class='o-grid'>
    <div class='o-grid__col'>
      <article class='c-post' itemscope itemtype='http://schema.org/BlogPosting'>

        <h1 class='c-post__title u-text-center'>테스트 중</h1>

        <time class='c-post__date' datetime='{{ page.date | date_to_xmlschema }}' itemprop='datePublished'>{{ page.date | date: '%d %b %Y' }}</time>

        <div class='c-content' itemprop='articleBody'>
          {% include page-image.html %}

          {{ content }}
        </div>

        <div class='c-tags'>
          {% for tag in page.tags %}
            <a href='{{ site.baseurl }}/tag/{{ tag }}'>{{ tag }}</a>
          {% endfor %}
        </div>

        <hr>

        {% include disqus.html %}

      </article>
    </div>
  </div>
</div>