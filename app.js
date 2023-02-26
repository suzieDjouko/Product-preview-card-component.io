const myButton = document.getElementById("myButton");
let isButtonNew= true;

myButton.addEventListener("click", function() {
  if (isButtonNew) {
    myButton.style.backgroundColor = "hsl(158, 36%, 37%)"; // initialize button- color
  } else {
    myButton.style.backgroundColor = "hsl(143, 45%, 20%)"; // new color-found
  }
  isButtonNew = !isButtonNew; // reverse color-button
});


const image = document.querySelector('img');

window.addEventListener('resize', function() {
  if (window.innerWidth >= 1400) {
    image.src = 'images/image-product-desktop.jpg';
   
  } else {
    image.src = 'images/image-product-mobile.jpg';
  }
});
