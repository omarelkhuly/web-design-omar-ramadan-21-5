function validateForm() {
  var form = document.forms["contactForm"];
  var inputs = form.getElementsByTagName("input");
  var textarea = form.getElementsByTagName("textarea")[0];

  var name = inputs.namedItem("name").value.trim();
  var email = inputs.namedItem("email").value.trim();
  var subject = inputs.namedItem("subject").value.trim();
  var message = textarea.value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("subjectError").textContent = "";
  document.getElementById("messageError").textContent = "";

  var valid = true;

  var nameRegex = /^[a-zA-Z\s]{2,}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var subjectRegex = /^.{5,}$/;
  var messageRegex = /^.{10,}$/;

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
    document.getElementById("successMessage").classList.remove("d-none");
    document.getElementById("successMessage").textContent =
      "Message sent successfully!";
  }

  return valid;
}
function toggleScrollButton() {
  var btns = document.getElementsByTagName("button");
  var scrollBtn = null;

  for (var i = 0; i < btns.length; i++) {
    if (btns[i].id === "scrollTopBtn") {
      scrollBtn = btns[i];
      break;
    }
  }

  if (!scrollBtn) return;

  scrollBtn.classList.toggle(
    "d-none",
    document.documentElement.scrollTop <= 550 && document.body.scrollTop <= 550
  );
}

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
  if (document.documentElement.scrollTop > 600 && counted) {
    const counters = document.getElementsByClassName("count");

    animateCount(counters[0], 0, 8000, 5000);
    animateCount(counters[1], 0, 810, 5000);
    animateCount(counters[2], 0, 3000, 5000);
    animateCount(counters[3], 0, 20, 5000);
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
