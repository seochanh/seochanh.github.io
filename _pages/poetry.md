---
layout: page
permalink: /poetry/
title: Poetry
---

<div class='o-wrapper'>
  <div class='o-grid'>
    {% for poem in site.poetry reversed %}
      {% include poetry-card.liquid %}
    {% endfor %}
  </div>

  <div class='o-grid'>
    {% include pagination.html %}
  </div>
</div>

<h3>123</h3>


<article class="post-content">

  <ul class="post-list">
  {% for poem in site.poetry reversed %}
    <li>
      <h2>
        <a class="poem-title" href="{{ poem.url | prepend: site.baseurl }}">{{ poem.title }}</a>
      </h2>
      <p class="post-meta">{{ poem.date | date: '%B %-d, %Y — %H:%M' }}</p>
    </li>
  {% endfor %}
  </ul>

</article>