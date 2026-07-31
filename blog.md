---
layout: list
title: "Blog"
date: 2026-07-31 10:00:00 +0700
permalink: /blog/
published: true
tags: [Index]
excerpt: "A collection of blog posts."
---
# Blog

{% assign sorted_blog = site.blog | sort: 'date' | reverse %}
{% for post in sorted_blog %}
* **[{{ post.title }}]({{ post.url }})** `{{ post.date | date: "%b %d, %Y" }}` - *{{ post.excerpt | strip_html | truncatewords: 20 }}*
{% endfor %}
