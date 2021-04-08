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