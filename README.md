Galereya
=================
Responsive, easily customizable gallery with masonry layout.
Almost all animation and effects are based on CSS properties.

**Look here**: [Click](http://vodkabears.github.com/galereya)

Browser Compatibility
---------------------
Depends on your styles.

Rapid start
-----
```html
<head>
    <link href="css/jquery.galereya.css" rel="stylesheet"/>
    <script src="js/jquery.galereya.js"></script>
    <style>
        /* don't forget to set body height for a fullscreen slider */
        html, body {
            height: 100%; 
            margin: 0;
        }
    </style>
    <script>
        $(function() {
            $('#galleryherepls').galereya();
        });
    </script>
</head>
<body>
    <div id="galleryherepls">
        <img src="path/to/thumbnail"
            alt="Title here"
            title="Or here(more priority)"
            data-desc="some description"
            data-category="image category here"
            data-fullsrc="path/to/full/image."
        />        
        ...        
        <img src="imgs/thumbnails/image42.jpg"
            alt="Image"
            data-desc="Example"
            data-fullsrc="imgs/image42.jpg"
        />
    </div>
</body>
```
OR
```html
<head>
    <link href="jquery.galereya.css" rel="stylesheet"/>
    <script src="jquery.galereya.js"></script>
    <style>
        /* don't forget to set body height for a fullscreen slider */
        html, body {
            height: 100%; 
            margin: 0;
        }
    </style>
    <script>
        $(function() {
            $('#galleryherepls').galereya({
                load: function(next) {
                    $.getJSON('images.json', function(data) {
                        next(data);
                    });
                }
            });
        });
    </script>
</head>
<body>
    <div id="galleryherepls"></div>
</body>
```
Parameters
----------
**Transition durations, cells width and all other parameters, except below ones, are read from your CSS!** This allows you to do a lot different customizations for Galereya without any shit.

**Parameters and their default values:**
```js
    $('#galleryherepls').galereya({
            //spacing between cells of the masonry grid
            spacing: 0,
            
            //waving visual effect
            wave: true,
            
            //waving visual effect timeout duration
            waveTimeout: 300, 
            
            //speed of the slide show
            slideShowSpeed: 10000,
            
            //speed of appearance of cells
            cellFadeInSpeed: 200,
            
            //the name of the general category
            noCategoryName: 'all',
            
            //set to true, if you don't want to show the slider on the cell click.
            disableSliderOnClick: false,
            
            //loading of images from JS. Just pass data to the callback 'next'.
            //Data structure example: [{"lowsrc":"upload\/thumbnails\/5165b70278e0e2.80829014.jpg","fullsrc":"upload\/5165b70278e0e2.80829014.jpg","description":"Mehmet Dere","category":"drawing"}
            load: function(next) { 
                next();
            }
    });
```








