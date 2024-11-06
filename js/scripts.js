// Initialize slide indices for each slideshow
let slideIndexDoorstep = 0;
let slideIndexAnother = 0;
let slideIndexrec = 0;
let slideIndexport = 0;

// Event listener for Doorstep slideshow
document.getElementById('slideshow').addEventListener('click', function (event) {
  const slideshowWidth = this.offsetWidth;
  const clickX = event.offsetX;

  if (clickX < slideshowWidth / 2) {
    slideIndexDoorstep--; // Move to previous slide
  } else {
    slideIndexDoorstep++; // Move to next slide
  }

  showSlides(slideIndexDoorstep, 'slideshow');
});


document.getElementById('slideshow-another').addEventListener('click', function (event) {
  const slideshowWidth = this.offsetWidth;
  const clickX = event.offsetX;

  if (clickX < slideshowWidth / 2) {
    slideIndexAnother--; // Move to previous slide
  } else {
    slideIndexAnother++; // Move to next slide
  }

  showSlides(slideIndexAnother, 'slideshow-another');
});

document.getElementById('slideshow-rec').addEventListener('click', function (event) {
  const slideshowWidth = this.offsetWidth;
  const clickX = event.offsetX;

  if (clickX < slideshowWidth / 2) {
    slideIndexrec--; // Move to previous slide
  } else {
    slideIndexrec++; // Move to next slide
  }

  showSlides(slideIndexrec, 'slideshow-rec');
});


document.getElementById('slideshow-portfolio').addEventListener('click', function (event) {
  const slideshowWidth = this.offsetWidth;
  const clickX = event.offsetX;

  if (clickX < slideshowWidth / 2) {
    slideIndexport--; // Move to previous slide
  } else {
    slideIndexport++; // Move to next slide
  }

  showSlides(slideIndexport, 'slideshow-portfolio');
});



function showSlides(index, slideshowId) {
  const slides = document.querySelectorAll(`#${slideshowId} .slide`);
  const totalSlides = slides.length;

  // Wrap the index within bounds
  if (index >= totalSlides) {
    index = 0;
  } else if (index < 0) {
    index = totalSlides - 1;
  }

  // Hide all slides in the specified slideshow, then show the active slide
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');

  // Update the specific slideshow's index
  if (slideshowId === 'slideshow') {
    slideIndexDoorstep = index;
  } else if (slideshowId === 'slideshow-another') {
    slideIndexAnother = index;
  } else if (slideshowId === 'slideshow-rec') {
    slideIndexrec = index;
  } else if (slideshowId === 'slideshow-portfolio') {
    slideIndexport = index;
  }
}

// Initialize both slideshows with the first slide
showSlides(slideIndexDoorstep, 'slideshow');
showSlides(slideIndexAnother, 'slideshow-another');
showSlides(slideIndexrec, 'slideshow-rec');
showSlides(slideIndexport, 'slideshow-portfolio');











document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('#nav-menu li');
    const dynamicText = document.getElementById('dynamic-text');
  
    // Add click event listeners to all navigation items
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove active class from all items
        navItems.forEach(nav => nav.classList.remove('active'));
  
        // Add active class to clicked item
        this.classList.add('active');
  
        // Change the description text based on the clicked item
        const newText = this.getAttribute('data-description');
        dynamicText.innerHTML = newText;
      });
    });
  });
  



  

window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");

  // Hide the loading screen after animation completes
  setTimeout(() => {
      loadingScreen.classList.add("hidden");
      document.body.classList.add("loaded"); // Adds class to trigger animations
  }, 2000); // Adjust this time to match the loading screen animation duration
});



document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll("#nav-menu li");
  const dynamicText = document.getElementById("dynamic-text");
  const descriptions = {
      "UI/UX Designer": 'I believe that <span class="highlight highlight2">form</span> and <span class="highlight highlight2">function</span> must work together, and I’m driven by the challenge of turning <span class="highlight highlight3">complex</span> needs into simple, beautiful solutions.',
      "Product Designer": `I believe the best products are those that solve <span class="highlight highlight3">real problems</span> while sparking a <span class="highlight highlight1">sense of joy</span>. I'll partner closely with you to generate the <span class="highlight highlight2">highest impact</span> possible.`,
      "Graphic Designer": 'Every pixel is a chance to tell a <span class="highlight highlight1">story</span>. I strive to create visuals that resonate on an <span class="highlight highlight3">emotional level</span> while communicating <span class="highlight highlight2">clearly and purposefully</span>.',
      "Fullstack": 'I craft <span class="highlight highlight3">seamless</span> digital experiences. I believe in the balance of <span class="highlight highlight1">elegance and efficiency</span>—writing code that is not just functional but <span class="highlight highlight3">beautiful</span>.',
      
  };

  // Function to update the main text with gradient-highlighted descriptions
  const updateDescription = (key) => {
      dynamicText.innerHTML = descriptions[key] || "";
  };

  // Event listener for each navigation item
  navItems.forEach((item) => {
      item.addEventListener("click", () => {
          // Remove active class from all items and set it on the clicked one
          navItems.forEach(nav => nav.classList.remove("active"));
          item.classList.add("active");

          // Get the key for the selected description and update the text
          const key = item.textContent.trim();
          updateDescription(key);
      });
  });

  // Initialize with the first item's description
  const initialKey = document.querySelector("#nav-menu li.active").textContent.trim();
  updateDescription(initialKey);
});




