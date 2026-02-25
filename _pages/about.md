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

<div class="social-links mt-4">
  <a href="mailto:{{ author.email }}" class="social-link" title="{{ author.email }}" aria-label="E-mail">
    <i class="fas fa-envelope"></i>
  </a>
  <a href="{{ author.github }}" target="_blank" class="social-link" title="GitHub" aria-label="GitHub">
    <i class="fab fa-github"></i>
  </a>
  <a href="{{ author.linkedin }}" target="_blank" class="social-link" title="LinkedIn" aria-label="LinkedIn">
    <i class="fab fa-linkedin-in"></i>
  </a>
  <a href="{{ author.cin }}" target="_blank" class="social-link" title="Página no CIn-UFPE" aria-label="CIn-UFPE">
    <i class="fas fa-university"></i>
  </a>
  <a href="{{ author.lattes }}" target="_blank" class="social-link" title="Currículo Lattes" aria-label="Lattes">
    <i class="ai ai-lattes"></i>
  </a>
  <a href="{{ author.orcid }}" target="_blank" class="social-link" title="ORCID" aria-label="ORCID">
    <i class="ai ai-orcid"></i>
  </a>
</div>
