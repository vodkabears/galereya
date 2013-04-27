Galereya
=================
Responsive, easily customizable jquery gallery with a masonry layout.
Almost all animation and effects are based on CSS features.

[View Demo](http://vodkabears.github.io/galereya)

Browser compatibility
---------------------
Tested on Chrome, Safari, Firefox, Opera(turned off some CSS animations), IE7+(Graceful degradation),
Android browser, Chrome mobile, Firefox mobile, Safari on iOS.
Galereya effects and browser compatibility depends on your custom CSS styles a lot!

Rapid start
-----
```html
<head>
	<meta charset="utf-8" />
	<title>Galereya</title>
    <link href="css/jquery.galereya.css" rel="stylesheet"/>
    <!--[if lt IE 9]>
    <link rel="stylesheet" href="css/jquery.galereya.ie.css">
    <![endif]-->

    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.galereya.js"></script>
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

Options
----------
**Transition durations, cells width and all other parameters, except below ones, are read from your CSS!** This allows you to do a lot of different customizations for Galereya without any pain.

**Options and their default values:**
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
            load: function(next) {
                //Data structure example
                var data = [{"lowsrc":"upload\/thumbnails\/5165b70278e0e2.80829014.jpg","fullsrc":"upload\/5165b70278e0e2.80829014.jpg","description":"Mehmet Dere","category":"drawing"}]
                next(data);
            }
    });
```

Methods
----------
Calling example:
```js
var gallery = $('#gal1').galereya();
gallery.openSlider(5);
```

| Method                        | Description                                                                   |
| -------------                 |:-------------:                                                                |
| openSlider(visibleIndex)      | Open slider. `visibleIndex` parameter is an index of a set of visible cells.  |
| closeSlider()                 | Yes, close it.                                                                |
| changeCategory(categoryName)  | Show a special category of images. `categoryName` is a name of a category.    |
| startSlideShow()              | Start slide show.                                                             |
| stopSlideShow()               | Stop slide show.                                                              |
| nextSlide()                   | Go to the next slide, if slider is opened.                                    |
| prevSlide()                   | Go to the previous slide, if slider is opened.                                |

Customization
--------------
[Simple example](http://vodkabears.github.io/galereya#customization)