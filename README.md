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
  <title>Simple Image Enlarge</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h2>Click an image to enlarge</h2>

    <div class="image-section">
      <img class="clickable-image" src="new.jpg" alt="Image 1">
      <img class="clickable-image" src="stark.jpg" alt="Image 2">
      <img class="clickable-image" src="sk.jpg" alt="Image 3">
      <img class="clickable-image" src="vijay.jpg" alt="Image 4">
    </div>

    <h1>Amal Tony Charles (25016419)</h1>
  </div>

  <script src="index.js"></script>
</body>
</html>
style.css
body {
  margin: 0;
  background-color: lightblue;
  height: 100vh;
  display: flex;
  justify-content: center;  
  align-items: center;       
}

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
index.jss
body {
  margin: 0;
  background-color: lightblue;
  height: 100vh;
  display: flex;
  justify-content: center;  
  align-items: center;       
}

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
![alt text](<Screenshot 2025-10-09 155623.png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
