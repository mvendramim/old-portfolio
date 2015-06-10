$(document).ready(function () {
  sliderInit();
  listenScroll();

  var $fixedNav = $('#nav');

  $fixedNav.onePageNav({
    easing: 'linear',
    end: function () {
      reanimateSkills();
    },
    scrollChange: function ($currentListItem) {
      if ($currentListItem.attr('id') === 'fixed-li-work') {
        reanimateSkills();
      }
    }
  });

  var $midNav = $('#wrapper-home');

  $midNav.on('click', 'a', function (e) {
    var $destination;
    if ($(this).attr('href') === '#work') {
      $destination = $fixedNav.find('#fixed-link-work');
    } else if ($(this).attr('href') === '#about') {
      $destination = $fixedNav.find('#fixed-link-about');
    }

    $destination.trigger('click');
    e.preventDefault();
  });

});

function reanimateSkills() {
  var x = 'slideInLeft';
  $('#loading-1').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass();
  });
  $('#loading-2').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass();
  });
  $('#loading-3').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass();
  });
  $('#loading-4').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass();
  });
};

function sliderInit() {
  $('.carousel').carousel({
    interval: false
  });

};

function listenScroll() {
  var $nav = $('.navbar');
  var $wrapperHome = $('#wrapper-home');
  var eTop = $wrapperHome.offset().top;
  var calculatedTop = eTop - $(window).scrollTop();
  var $home = $("#home");
  var $containerBody = $(".container-body");

  $(window).scroll(function () {
  	var homeHeight = $home.height();
    if ($(this).scrollTop() > homeHeight/3) {
      $nav.addClass("hidden-no");
      $nav.addClass("fadeInDown");
      $nav.removeClass("fadeOutUp");

    } else {
      $nav.removeClass("fadeInDown");
      $nav.addClass("fadeOutUp");
    }

    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $containerBody.addClass("container-body-hidden");
    } else {
        $containerBody.removeClass("container-body-hidden");
    }

  });
};

