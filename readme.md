# An Image Slider

Create an image slider using the slideShow function with five parameters

Usage:
``` javascript
import slideShow from "https://unpkg.com/@silv21/image_slider@1.0.0/index.js";

// creating an image slider with a **Click Event** (true) for the user to slide back and forth
// imageElement is provided to have a starting image 
// slider will automatically change image every 2 sec (2000 ms, arbitrary time settings) if not clicked
// an array needs to be provided
// mouse event is off (false)
var array = ["./img1.jpg", "./img2.jpg", "./img3.jpg", "./img4.jpg"]

slideShow(imageElement, array, 2000, false, true);
```

``` javascript
import slideShow from "https://unpkg.com/@silv21/image_slider@1.0.0/index.js";

// creating an image slider with **Mouse Event** (true) when the user hovers over the image (freezes the image)
// imageElement is provided to have a starting image 
// slider will automatically change image every 2 sec (2000 ms, arbitrary time settings) if not clicked
// an array needs to be provided
// click event is off (false)
var array = ["./img1.jpg", "./img2.jpg", "./img3.jpg", "./img4.jpg"]

slideShow(imageElement, array, 2000, true, false);