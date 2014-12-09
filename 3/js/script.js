$(function() {
    // Initiate fast click to remove the 300ms delay on click events for mobile 
    // devices https://github.com/ftlabs/fastclick
    FastClick.attach(document.body); 
});

$(document).ready(function () {

    // @TODO Add annimating icon for menu
    //  Test cross browser 

    // Create menu opening and closing functions 
    function closeMobMenu() {
        $('body').removeClass('mob-menu-opened').addClass('mob-menu-closing');
        setTimeout(function () {
            $('body').removeClass('mob-menu-closing').addClass('mob-menu-closed');
        }, 1000);
    }

    function openMobMenu() {
        $('body').removeClass('mob-menu-closed').addClass('mob-menu-opening');
        setTimeout(function () {
            $('body').removeClass('mob-menu-opening').addClass('mob-menu-opened');
        }, 1000);
    }

    // THE TIMEOUT TIME NEEDS TO BE THE SAME AS THE CSS TRANSITION TIME
    $('.menu-trigger').click(function () {
        if ($('body').hasClass('mob-menu-closed')) {
            openMobMenu();
        }
        else if ($('body').hasClass('mob-menu-opened')) {
            closeMobMenu();
        }
    });

    // Close the menu if you click the small amount of page content visible
    $('.content').click(function () {
        if ($('body').hasClass('mob-menu-opened')) {
            closeMobMenu();
        }
    });

    //Swipe gestures: https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
    // CURRENTLY NOT WORKING ON LINKS 
    $("body").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            openMobMenu();
        },
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            closeMobMenu();
        },
        threshold: 75 //Default is 75px, set to 0 for demo so any distance triggers swipe
    });


});
