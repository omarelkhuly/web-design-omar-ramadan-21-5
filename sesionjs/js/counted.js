var counted = true;

function animateCount(element, start, end, totalTime) {
  if (!counted) return;

  var numCount = start;
  const range = end - start;
  const numUpdate = 1000;
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

    animateCount(counters[0], 0, 8000, 10000);
    animateCount(counters[1], 0, 810, 10000);
    animateCount(counters[2], 0, 3000, 10000);
    animateCount(counters[3], 0, 20, 10000);
  }
};
