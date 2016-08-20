# perlinwarp.github.io

Adding P5.js to a page
1. Go to _layouts and make a html file
2. Add p5.js and a div where you want your canvas after or before. 
'''html
---
layout: default
---
<!-- Imports processing for the 404 page -->
<article class="page">
 <script src="/js/p5.min.js"></script>
  <h1>{{ page.title }}</h1>

  <div class="entry">
    {{ content }}
  </div>
  <div id="myCanvas"></div>
  <script src="/js/sketches/sketch.js" type="text/javascript"></script>
</article>
'''html

3.
