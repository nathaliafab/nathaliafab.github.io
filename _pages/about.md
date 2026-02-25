---
layout: page
title: Sobre mim
permalink: /about
---

{% assign author = site.authors.nathalia %}

<div class="about-card mb-4">

<p>Sou <strong>Mestranda em Ciência da Computação</strong> no Centro de Informática (CIn) da Universidade Federal de Pernambuco (UFPE), e graduada em <strong>Engenharia da Computação</strong> também pelo CIn. Minha paixão genuína por tecnologia me impulsiona a buscar constantemente aprofundar meus conhecimentos nas diversas vertentes da computação.</p>

<p>Meus principais interesses incluem <strong>Inteligência Artificial (IA)</strong>, <strong>desenvolvimento de software</strong>, segurança da informação e hardware. Sou entusiasta de <strong>código aberto</strong> e acredito na importância da colaboração e do compartilhamento de conhecimento dentro da comunidade tecnológica.</p>

<p>Você pode conferir alguns dos meus projetos e contribuições no <a href="{{ author.github }}" target="_blank">GitHub</a>.</p>

</div>

<div class="row mt-4">
  <div class="col-md-6 mb-3">
    <a href="mailto:{{ author.email }}" class="social-link d-flex align-items-center gap-2 p-3" style="border-radius:12px; width:auto; height:auto; background:var(--card-bg); border:1px solid var(--card-border);">
      <i class="fas fa-envelope" style="color:var(--link-color)"></i>
      <span style="color:var(--text-color)">{{ author.email }}</span>
    </a>
  </div>
  <div class="col-md-6 mb-3">
    <a href="{{ author.github }}" target="_blank" class="social-link d-flex align-items-center gap-2 p-3" style="border-radius:12px; width:auto; height:auto; background:var(--card-bg); border:1px solid var(--card-border);">
      <i class="fab fa-github" style="color:var(--link-color)"></i>
      <span style="color:var(--text-color)">GitHub</span>
    </a>
  </div>
  <div class="col-md-6 mb-3">
    <a href="{{ author.linkedin }}" target="_blank" class="social-link d-flex align-items-center gap-2 p-3" style="border-radius:12px; width:auto; height:auto; background:var(--card-bg); border:1px solid var(--card-border);">
      <i class="fab fa-linkedin" style="color:var(--link-color)"></i>
      <span style="color:var(--text-color)">LinkedIn</span>
    </a>
  </div>
  <div class="col-md-6 mb-3">
    <a href="{{ author.cin }}" target="_blank" class="social-link d-flex align-items-center gap-2 p-3" style="border-radius:12px; width:auto; height:auto; background:var(--card-bg); border:1px solid var(--card-border);">
      <i class="fas fa-university" style="color:var(--link-color)"></i>
      <span style="color:var(--text-color)">Página no CIn-UFPE</span>
    </a>
  </div>
  <div class="col-md-6 mb-3">
    <a href="{{ author.lattes }}" target="_blank" class="social-link d-flex align-items-center gap-2 p-3" style="border-radius:12px; width:auto; height:auto; background:var(--card-bg); border:1px solid var(--card-border);">
      <i class="ai ai-lattes" style="color:var(--link-color)"></i>
      <span style="color:var(--text-color)">Currículo Lattes</span>
    </a>
  </div>
  <div class="col-md-6 mb-3">
    <a href="{{ author.orcid }}" target="_blank" class="social-link d-flex align-items-center gap-2 p-3" style="border-radius:12px; width:auto; height:auto; background:var(--card-bg); border:1px solid var(--card-border);">
      <i class="ai ai-orcid" style="color:var(--link-color)"></i>
      <span style="color:var(--text-color)">ORCID</span>
    </a>
  </div>
</div>
