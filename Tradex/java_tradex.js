//loading
function hideLoader() {
  var loaders = document.getElementsByClassName("loading");
  setTimeout(function () {
    if (loaders.length > 0 && loaders[0]) {
      if (loaders[0].classList) {
        loaders[0].classList.add("d-none");
      }
    }
  }, 1000);
}
window.addEventListener("load", hideLoader);

const header = document.getElementById("mainHeader");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("sticky-top");
  } else {
    header.classList.remove("sticky-top");
  }
});

//Form Validation
function validateForm(event) {
  event.preventDefault();

  const form = document.forms["contactForm"];
  if (!form) return false;

  const nameInput = form.elements["name"];
  const emailInput = form.elements["email"];
  const subjectInput = form.elements["subject"];
  const messageInput = form.elements["message"];

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  const nameRegex = /^[a-zA-Z\s]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const subjectRegex = /^.{5,}$/;
  const messageRegex = /^.{10,}$/;

  let valid = true;

  if (nameInput && nameInput.value.trim() === "") {
    if (nameError) nameError.textContent = "This field is required.";
    valid = false;
  }

  if (emailInput && emailInput.value.trim() === "") {
    if (emailError) emailError.textContent = "This field is required.";
    valid = false;
  }

  if (subjectInput && subjectInput.value.trim() === "") {
    if (subjectError) subjectError.textContent = "This field is required.";
    valid = false;
  }

  if (messageInput && messageInput.value.trim() === "") {
    if (messageError) messageError.textContent = "This field is required.";
    valid = false;
  }

  if (valid && successMessage) {
    successMessage.classList.remove("d-none");
    successMessage.textContent = "Message sent successfully!";
    form.reset();
  }

  return valid;
}

//Live validation after DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["contactForm"];
  if (!form) return;

  const fields = [
    {
      input: form.elements["name"],
      error: document.getElementById("nameError"),
      regex: /^[a-zA-Z\s]{2,}$/,
      message: "Name must contain only letters and be at least 2 characters."
    },
    {
      input: form.elements["email"],
      error: document.getElementById("emailError"),
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address."
    },
    {
      input: form.elements["subject"],
      error: document.getElementById("subjectError"),
      regex: /^.{5,}$/,
      message: "Subject must be at least 5 characters long."
    },
    {
      input: form.elements["message"],
      error: document.getElementById("messageError"),
      regex: /^.{10,}$/,
      message: "Message must be at least 10 characters long."
    }
  ];

  fields.forEach(({ input, error, regex, message }) => {
    if (!input || !error) return;

    input.addEventListener("focus", () => {
      if (input.value.trim() === "") {
        error.textContent = message;
      }
    });

    input.addEventListener("input", () => {
      if (input.value.trim() === "") {
        error.textContent = "This field is required.";
      } else if (!regex.test(input.value.trim())) {
        error.textContent = message;
      } else {
        error.textContent = "";
      }
    });
  });
});

var counted = true;

function animateCount(element, start, end, totalTime) {
  if (!counted) return;

  var numCount = start;
  const range = end - start;
  const numUpdate = 60;
  const amoSteps = range / numUpdate;
  const timeWait = totalTime / numUpdate;

  const timer = setInterval(() => {
    numCount += amoSteps;

    if (numCount >= end) {
      element.textContent = end;
      clearInterval(timer);
      counted = false;
    } else {
      element.textContent = Math.floor(numCount);
    }
  }, timeWait);
}

window.onscroll = function () {
  toggleScrollButton();
  if (document.documentElement.scrollTop > 600 && counted) {
    const counters = document.getElementsByClassName("count");

    if (counters.length >= 4) {
      animateCount(counters[0], 0, 8000, 10000);
      animateCount(counters[1], 0, 810, 10000);
      animateCount(counters[2], 0, 3000, 10000);
      animateCount(counters[3], 0, 20, 10000);
    }
  }
};


//Scroll To Top Button
function toggleScrollButton() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (!scrollBtn) return;

  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  scrollBtn.classList.toggle("d-none", scrollTop <= 500);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
