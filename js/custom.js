$(window).load(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $("body").addClass("ios");
  } else {
    $("body").addClass("web");
  }
  $("body").removeClass("loaded");
});
/*-------------------------------------------------------- */
/* viewport width */
function viewport() {
  var e = window,
    a = "inner";
  if (!("innerWidth" in window)) {
    a = "client";
    e = document.documentElement || document.body;
  }
  return { width: e[a + "Width"], height: e[a + "Height"] };
}
/* viewport width */
/*-------------------------------------------------------- */
/* header menu */
$(document).ready(function () {
  $(".header__nav_item, .drop-right_item").click(function () {
    $(".header__nav_item , .drop-right_item").removeClass("current_nav_item");
    $(this).addClass("current_nav_item");
    return false;
  });

  $(".sub-menu_item").each(function (element) {
    // производим перебор элементов <li> коллекции jQuery
    if ($(this).children("ul").length > 0) {
      // если в елементе есть <ul>
      $(this).addClass("sub-menu_item-arrow"); // добавляем ему класс для отображения стрелки >
    }
  });

  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    pagination: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 2500,
  });
});

var handler = function () {
  var height_footer = $("footer").height();
  var height_header = $("header").height();

  var viewport_wid = viewport().width;
  var viewport_height = viewport().height;

  if (viewport_wid <= 1200) {
    $(document).ready(function () {
      $(".header__burger-menu")
        .unbind("click")
        .click(function () {
          $(this).toggleClass("active"), $(".header__nav").slideToggle();
          return false;
        });

      $(".has_sub-menu")
        .unbind("click")
        .click(function () {
          $(this).toggleClass("active"),
            $(this).children(".sub-menu").slideToggle();
          return false;
        });

      $(".sub-menu_item-arrow")
        .unbind("click")
        .click(function () {
          $(this).toggleClass("active"),
            $(this).children(".drop-right").slideToggle();
          return false;
        });
    });
  }
};
$(window).bind("load", handler);
$(window).bind("resize", handler);
