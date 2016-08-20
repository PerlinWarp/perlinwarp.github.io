# perlinwarp.github.io

##Adding a post

To add a post make a new mark down file in the _posts folder.
The naming convention needs to be year-month-day-title.md

## Adding P5.js to a page
1. Go to _layouts and make a html file

2. Add p5.js and a div where you want your canvas after or before. 

```
---
layout: default
---
<!-- Imports processing for the any page using this layout -->
<article class="page">
 <script src="/js/p5.min.js"></script>
  <h1>{{ page.title }}</h1>

  <div class="entry">
    {{ content }}
  <!-- Here the p5.js box will be after the content -->
  </div>
  <div id="myCanvas"></div>
 
  <!-- script src must be equal to the sketch you want displayed-->
  <script src="/js/sketches/sketch.js" type="text/javascript"></script>
</article>
```

3.Go to the p5 sketch file you want and add these lines to the setup function

```javascript
function setup() {
  var canvasDiv = document.getElementById("myCanvas");
  var divWidth = document.getElementById("myCanvas").clientWidth;
  var sketchCanvas = createCanvas(divWidth,450);
  sketchCanvas.parent("myCanvas"); 
}
```

Note that myCanvas is the name of the div id. This needs to be the same. 

The script src in the layouts page must be the same as the p5.js file you want to run. 

I create a new layout page for every different post I need processing in. 

