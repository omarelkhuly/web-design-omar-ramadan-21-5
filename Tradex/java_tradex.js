// loading
function hideLoader() {
  var loaders = document.getElementsByClassName("loading");
  setTimeout(function () {
    if (loaders.length > 0) {
      loaders[0].classList.add("d-none");
    }
  }, 1000);
}

//Form Validation
function validateForm(event) {
  event.preventDefault();

  const form = document.forms["contactForm"];

  const nameInput = form.elements["name"];
  const emailInput = form.elements["email"];
  const subjectInput = form.elements["subject"];
  const messageInput = form.elements["message"];

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");

  const nameRegex = /^[a-zA-Z\s]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const subjectRegex = /^.{5,}$/;
  const messageRegex = /^.{10,}$/;

  let valid = true;

  // Check each field for emptiness first
  if (nameInput.value.trim() === "") {
    nameError.textContent = "This field is required.";
    valid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "This field is required.";
    valid = false;
  }

  if (subjectInput.value.trim() === "") {
    subjectError.textContent = "This field is required.";
    valid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "This field is required.";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMessage").classList.remove("d-none");
    document.getElementById("successMessage").textContent = "Message sent successfully!";
  }

  return valid;
}

// Add focus and input events for live validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["contactForm"];

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


//Counter Animation
let counted = true;

function animateCount(element, start, end, totalTime) {
  if (!counted) return;

  let current = start;
  const steps = 60;
  const stepValue = (end - start) / steps;
  const stepTime = totalTime / steps;

  const timer = setInterval(() => {
    current += stepValue;
    if (current >= end) {
      element.textContent = end;
      clearInterval(timer);
      counted = false;
    } else {
      element.textContent = Math.floor(current);
    }
  }, stepTime);
}

//Scroll Events
window.onscroll = function () {
  toggleScrollButton();

  if (document.documentElement.scrollTop > 600 && counted) {
    const counters = document.getElementsByClassName("count");

    if (counters.length >= 4) {
      animateCount(counters[0], 0, 8000, 5000);
      animateCount(counters[1], 0, 810, 5000);
      animateCount(counters[2], 0, 3000, 5000);
      animateCount(counters[3], 0, 20, 5000);
    }
  }
};

//Scroll To Top Button
function toggleScrollButton() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (!scrollBtn) return;

  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  scrollBtn.classList.toggle("d-none", scrollTop <= 500);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
