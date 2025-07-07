//Form Validation
function validateForm() {
  const form = document.forms["contactForm"];
  const inputs = form.getElementsByTagName("input");
  const textarea = form.getElementsByTagName("textarea")[0];

  const name = inputs.namedItem("name").value.trim();
  const email = inputs.namedItem("email").value.trim();
  const subject = inputs.namedItem("subject").value.trim();
  const message = textarea.value.trim();

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("subjectError").textContent = "";
  document.getElementById("messageError").textContent = "";

  let valid = true;

  const nameRegex = /^[a-zA-Z\s]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const subjectRegex = /^.{5,}$/;
  const messageRegex = /^.{10,}$/;

  if (!nameRegex.test(name)) {
    document.getElementById("nameError").textContent =
      "Enter a valid name (only letters and spaces).";
    valid = false;
  }

  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email (e.g., user@example.com).";
    valid = false;
  }

  if (!subjectRegex.test(subject)) {
    document.getElementById("subjectError").textContent =
      "Subject must be at least 5 characters.";
    valid = false;
  }

  if (!messageRegex.test(message)) {
    document.getElementById("messageError").textContent =
      "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    const successBox = document.getElementById("successMessage");
    successBox.classList.remove("d-none");
    successBox.textContent = "Message sent successfully!";
  }

  return valid;
}

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
