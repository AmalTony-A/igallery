# Ex.08 Design of Interactive Image Gallery
## Date:09.10.2025

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
tony.html

<!DOCTYPE html>
<html>
<head>
  <title>Interactive Image Gallery</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1> Click To Enlarge </h1>
  <div class="container">
    <div class="image-section">
      <img class="clickable-image" src="new.jpg" alt="Image 1">
      <img class="clickable-image" src="stark.jpg" alt="Image 2">
      <img class="clickable-image" src="sk.jpg" alt="Image 3">
      <img class="clickable-image" src="vijay.jpg" alt="Image 4">
    </div>

    <div class="footer">
     &copy;Image Gallery | Designed by: <b>AMAL TONY CHARLES</b>
     <b>(25016419)</b>
    </div>
  </div>

  <!-- Popup overlay for enlarged image -->
  <div id="overlay">
    <img id="overlay-img" src="">
  </div>

  <script src="index.js"></script>
</body>
</html>


style.css

body {
  margin: 0;
  padding: 0;
  background-color: #e5e5e5;
  font-family: Arial, sans-serif;
}
h1{
    text-align: center;
    color: #333;
    margin-top: 30px;
}
.container {
  text-align: center;
  padding: 50px 20px;
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
}

.clickable-image {
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
}

.clickable-image:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
}

.footer {
  text-align: right;
  margin-top: 40px;
  font-size: 14px;
  color: #141111;
}

/* Overlay for enlarged image */
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

#overlay img {
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255,255,255,0.3);
  transition: transform 0.3s ease;
}


index.js

const images = document.querySelectorAll('.clickable-image');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.style.display = 'flex';
  });
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});


```


## OUTPUT:
![alt text](<Screenshot 2025-10-19 141704.png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
