// main.js

// Create a constant array with the image file names
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Get references to the elements
const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Loop through the image array starting from 1
for (let i = 1; i <= imageFiles.length; i++) {
  const imgElement = document.createElement('img');
  imgElement.src = `images/${imageFiles[i - 1]}`;
  thumbBar.appendChild(imgElement);

  // Add a click event listener to each thumbnail
  imgElement.addEventListener('click', function() {
    displayedImg.src = imgElement.src;
  });
}

// Add an event listener to the button for lightening/darkening the overlay
btn.addEventListener('click', function() {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
