$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  navText: ['<i class="fa-solid fa-arrow-right-long"></i>', '<i class="fa-solid fa-arrow-left-long"></i>'],
  responsive: {
    0: {
      items: 0,
      nav: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 2,
      nav: true,
    }
  }
})