---
layout: page
title: Blog
permalink: /blog
---

<div class="d-flex justify-content-end mb-3">
  <a href="{{ site.baseurl }}/categories" class="see-all-link">Ver categorias →</a>
</div>

<div class="row listrecent">
  {% for post in site.posts %}
    {% include postbox.html %}
  {% endfor %}
</div>
