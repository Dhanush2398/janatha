
(function ($) {
  "use strict";
  $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");
    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show");
      });
    return false;
  });
  $(document).on("ready", function () {
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });
  });
  $(".search-btn").on("click", function () {
    $(".search-area").toggleClass("open");
  });
  $(".sidebar-btn").on("click", function () {
    $(".sidebar-popup").addClass("open");
    $(".sidebar-wrapper").addClass("open");
  });
  $(".close-sidebar-popup, .sidebar-popup").on("click", function () {
    $(".sidebar-popup").removeClass("open");
    $(".sidebar-wrapper").removeClass("open");
  });
  new WOW().init();
  $(".hero-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    items: 1,
    navText: [
      "<i class='far fa-long-arrow-left'></i>",
      "<i class='far fa-long-arrow-right'></i>",
    ],
    onInitialized: function (event) {
      var $firstAnimatingElements = $(".owl-item")
        .eq(event.item.index)
        .find("[data-animation]");
      doAnimations($firstAnimatingElements);
    },
    onChanged: function (event) {
      var $firstAnimatingElements = $(".owl-item")
        .eq(event.item.index)
        .find("[data-animation]");
      doAnimations($firstAnimatingElements);
    },
  });
  function doAnimations(elements) {
    var animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data("delay");
      var $animationDuration = $this.data("duration");
      var $animationType = "animated " + $this.data("animation");
      $this.css({
        "animation-delay": $animationDelay,
        "-webkit-animation-delay": $animationDelay,
        "animation-duration": $animationDuration,
        "-webkit-animation-duration": $animationDuration,
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 4 } },
  });
  $(".partner-slider").owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: { 0: { items: 2 }, 600: { items: 3 }, 1000: { items: 6 } },
  });
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });
  $(".counter").countTo();
  $(".counter-box").appear(
    function () {
      $(".counter").countTo();
    },
    { accY: -100 }
  );
  $(".popup-gallery").magnificPopup({
    delegate: ".popup-img",
    type: "image",
    gallery: { enabled: true },
  });
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $(window).scroll(function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      $("#scroll-top").addClass("active");
    } else {
      $("#scroll-top").removeClass("active");
    }
  });
  $("#scroll-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });
  if ($("#countdown").length) {
    $("#countdown").countdown("2028/01/30", function (event) {
      $(this).html(
        event.strftime(
          "" +
            '<div class="row">' +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%-D</h2>' +
            '<h5 class="mb-0">Day%!d</h5>' +
            "</div>" +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%H</h2>' +
            '<h5 class="mb-0">Hours</h5>' +
            "</div>" +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%M</h2>' +
            '<h5 class="mb-0">Minutes</h5>' +
            "</div>" +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%S</h2>' +
            '<h5 class="mb-0">Seconds</h5>' +
            "</div>" +
            "</div>"
        )
      );
    });
  }
  let date = new Date().getFullYear();
  $("#date").html(date);
  $(".select").niceSelect();
  $(window).on("load", function () {
    if ($(".filter-box").children().length > 0) {
      $(".filter-box").isotope({
        itemSelector: ".filter-item",
        masonry: { columnWidth: 1 },
      });
      $(".filter-btns").on("click", "li", function () {
        var filterValue = $(this).attr("data-filter");
        $(".filter-box").isotope({ filter: filterValue });
      });
      $(".filter-btns li").each(function () {
        $(this).on("click", function () {
          $(this).siblings("li.active").removeClass("active");
          $(this).addClass("active");
        });
      });
    }
  });
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  $(".profile-img-btn").on("click", function () {
    $(".profile-img-file").click();
  });
  if ($(".date-picker").length) {
    $(function () {
      $(".date-picker").datepicker();
    });
  }
  if ($(".time-picker").length) {
    $(function () {
      $(".time-picker").timepicker();
    });
  }
})(jQuery);
