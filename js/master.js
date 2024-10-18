// TODO fix the menu, make it close when a link is clicked
// TODO add phone menu for links
// TODO typewriter effect tips = DONE
// TODO add the two bottom buttons in the hero section
// TODO fix the infinite scroll

// Start Typewriter
var app = document.getElementById("app");

var Typewriter = new Typewriter(app, {
  loop: true,
  delay: 35,
  deleteSpeed: 10,
});

Typewriter
  .pauseFor(2000)
  .typeString('Help us raise funds to help poor children, at <strong>no extra cost to you!</strong>')
  .pauseFor(500)
  .deleteChars(67)
  .typeString('By visiting our website you help raise funds. Raise more by <strong>searching</strong> and <strong>comparing</strong> travel deals.')
  .pauseFor(500)
  .deleteChars(51)
  .typeString('<strong><span style="color:#196AFB">Tell you friends.</span></strong>')
  .pauseFor(1000)
  .deleteChars(64)
  .typeString('For every ticket you purchase, a portion of the proceeds directly funds <strong>underprivileged children\'s education<Strong>.')
  .pauseFor(1000)
  .start();
// End Typewriter

let scroller = document.querySelector(".scroller");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  let totalHeight = document.documentElement.scrollHeight - window.innerHeight;

  let scrolledPercentage = (scrollTop / totalHeight) * 100;

  scroller.style.width = `${scrolledPercentage}%`;
});

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

// Tab switching functionality for the search panel
document.querySelectorAll(".tab-link").forEach((tab) => {
  tab.addEventListener("click", function () {
    let tab_id = this.dataset.tab;

    document.querySelectorAll(".tab-link").forEach((tab) => {
      tab.classList.remove("current");
    });

    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("current");
    });

    this.classList.add("current");
    document.getElementById(tab_id).classList.add("current");
  });
});
