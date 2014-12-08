$(document).ready(function () {

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

});
