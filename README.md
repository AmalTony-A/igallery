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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive Image Gallery</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <div class="image-section">
      <div class="image-wrapper"><img class="clickable-image" src="new.jpg" alt="Image 1"></div>
      <div class="image-wrapper"><img class="clickable-image" src="stark.jpg" alt="Image 2"></div>
      <div class="image-wrapper"><img class="clickable-image" src="sk.jpg" alt="Image 3"></div>
      <div class="image-wrapper"><img class="clickable-image" src="vijay.jpg" alt="Image 4"></div>
    </div>

    <div class="footer">
      © Image Gallery | Designed by: <b>AMAL TONY CHARLES</b>
    </div>
  </div>

  <!-- Popup overlay for enlarged image -->
  <div id="overlay">
    <img id="overlay-img" src="" alt="Enlarged image">
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

/* Wrapper to ensure same size for all images */
.image-wrapper {
  width: 200px;
  height: 250px;
  overflow: hidden;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

/* Hover effect on wrapper */
.image-wrapper:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
}

/* Image styling */
.clickable-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.footer {
  text-align: right;
  margin-top: 40px;
  font-size: 14px;
  color: #333;
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
index.jss
const images = document.querySelectorAll('.clickable-image');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.style.display = 'flex';
  });
});

// Close overlay when clicking outside the image
overlay.addEventListener('click', (e) => {
  if (e.target !== overlayImg) {
    overlay.style.display = 'none';
  }
});

.container {
  display: flex;
  flex-direction: column;   
  justify-content: space-between; 
  align-items: center;
  height: 90vh;
  text-align: center;
}

.image-section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.clickable-image {
  width: 150px;
  height: 250px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 8px;
  transition: transform 0.3s;
  cursor: pointer;
}

.clickable-image:hover {
  border-color: blue;
}

/* When clicked */
.enlarged {
  transform: scale(2);
  border-color: red;
}


```


## OUTPUT:
![alt text](<Screenshot 2025-10-15 161456.png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
