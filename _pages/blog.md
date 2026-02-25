---
layout: default
title: Blog
permalink: /blog
---

<div class="section-header" style="padding-top:1rem;">
  <h2 class="section-heading">Blog</h2>
  <a href="{{ site.baseurl }}/categories" class="see-all-link">Ver categorias →</a>
</div>

<div class="row listrecent">
  {% for post in site.posts %}
    {% include postbox.html %}
  {% endfor %}
</div>
