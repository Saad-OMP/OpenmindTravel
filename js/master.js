// Check if there's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  // console.log('Local storage is not empty, you can set it on root now');
  // console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty("--main-color", mainColors);

  // Remove Active Class From All Colors List Items
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class on Element with Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

// Random Background Option
let backgroundOption = true;

// variable to control the Background interval
let backgroundInterval;

// Check if there's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check if Random Background Local Storage is not Empty
if (backgroundLocalItem !== null) {
  // Remove Active class from all Spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    backgroundOption = true;
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    backgroundOption = false;
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  // Margin to trigger animation before the section is fully in view
  let margin = 1;

  if (
    windowScrollTop >
    skillsOffsetTop + skillsOuterHeight - windowHeight - margin
  ) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// Creat Popup with the Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Overlay element
    let overlay = document.createElement("div");

    // Add class to overlay
    overlay.className = "popup-overlay";

    // Append overlay to the body
    document.body.appendChild(overlay);

    // Create the Popup
    let popupBox = document.createElement("div");

    // Add Class to the Popup Box
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create text for heading
      let imgTetx = document.createTextNode(img.alt);

      // Append the text to the heading
      imgHeading.appendChild(imgTetx);

      // Append the heading to the popup box
      popupBox.appendChild(imgHeading);
    }

    // Create the Image
    let popupImage = document.createElement("img");

    // Set image source
    popupImage.src = img.src;

    // Add Image to Popup Box
    popupBox.appendChild(popupImage);

    // Append the popop box to body
    document.body.appendChild(popupBox);

    // Create the Close Span
    let closeButton = document.createElement("span");

    // Create the Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append text to Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class to Close Button
    closeButton.className = "close-button";

    // Add Close Button to the Popup Box
    popupBox.appendChild(closeButton);
  });

  // Close popup
  document.addEventListener("click", function (e) {
    if (e.target.className == "close-button") {
      // Remove the current popup
      e.target.parentNode.remove();

      // Remove Overlay
      document.querySelector(".popup-overlay").remove();
    }
  });
});

// Select All Bullets
// const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToElement(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      // Check if the link is external
      if (e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

// scrollToElement(allBullets);
scrollToElement(allLinks);

// Handle Active State
function handleActive(ev) {
  // Remove Active Class From All Children
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  // Add Active Class on Self
  ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletsLocalItem = localStorage.getItem("bullets_option");

if (bulletsLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletsLocalItem === "block") {
    bulletsContainer.style.display = "block";

    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";

    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";

      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";

      localStorage.setItem("bullets_option", "none");
    }

    handleActive(e);
  });
});

// Reset Button
document.querySelector(".reset-options").onclick = function () {
  // localStorage.clear();
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets_option");

  // Reload Window
  window.location.reload();
};

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let theLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  // Stop Propagation
  e.stopPropagation();

  // Toggle Class "menu-active" on Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" on Links
  theLinks.classList.toggle("open");
};

// Click anywhere outside menu and toggle button to close menu
document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== theLinks) {
    // Check if Menu is Open
    if (theLinks.classList.contains("open")) {
      // Toggle Class "menu-active" on Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class "open" on Links
      theLinks.classList.toggle("open");
    }
  }
});

// Stop Propagation on Menu
theLinks.onclick = function (e) {
  e.stopPropagation();
};

// Send Email
(function() {
  emailjs.init("E6kb0V1mzinyL9gw5"); // Replace with your public key
})();


function sendEmail() {
  var templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_1dg6q4h", "template_jfmtj0q", templateParams) 
    .then(function(response) {
      alert("Message sent successfully!");
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      alert("Message not sent. Please try again later.");
      console.log('FAILED...', error);
    });
}

// Tab switching functionality for the search panel
document.querySelectorAll('.tab-link').forEach(tab => {
    tab.addEventListener('click', function() {
        let tab_id = this.dataset.tab;

        document.querySelectorAll('.tab-link').forEach(tab => {
            tab.classList.remove('current');
        });

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('current');
        });

        this.classList.add('current');
        document.getElementById(tab_id).classList.add('current');
    });
});