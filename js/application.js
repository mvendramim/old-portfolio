$(document).ready(function() {
    configureLightBox();
    configureEventsOfMenu();
    

    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 2000,
        scrollThreshold: 1.0,
        filter: '',
        easing: 'swing',
        begin: function() {

        },
        end: function() {
            var $selectedItem = $('.item.current');
        },
        scrollChange: function($currentListItem) {
            $liSecondScreen = $('#li-second-screen');
            var currentItemId = $currentListItem.attr('id');
            if (currentItemId === 'li-second-screen' || currentItemId === 'li-third-screen') {
                $('.item').addClass('red');
                $('.logo').addClass('logo-scroll');
                $('.logo').addClass('bounceInLeft');
            } else {
                $('.item').removeClass('red');
                $('.logo').removeClass('logo-scroll');
            }
        }
    });
});

function configureEventsOfMenu() {
    $(document).on('click', '.item > a', function() {
        var clickedLink = $(this).parent();
        var clickedLinkId = clickedLink.attr('id');

        if (clickedLinkId === 'li-second-screen' || clickedLinkId === 'li-third-screen') {
            $('.item').addClass('red');
        } else {
            $('.item').removeClass('red');
        }

    });
}


function configureLightBox()
{
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
};

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".logo").addClass("logo-scroll");
        $('.logo').addClass('bounceInLeft');
    } else {
        $(".logo").removeClass("logo-scroll");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 3600) {
        $(".logo").addClass("logo-white");
    } else {
        $(".logo").removeClass("logo-white");
    }
});



