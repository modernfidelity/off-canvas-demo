$(document).ready(function() {
   
   // THE TIMEOUT TIME NEEDS TO BE THE SAME AS THE CSS TRANSITION TIME
   
   $('.menu-trigger').click(function() {
       if ( $('body').hasClass('mob-menu-closed') ) {
            $('body').removeClass('mob-menu-closed').addClass('mob-menu-opening');
            setTimeout(function(){ 
                $('body').removeClass('mob-menu-opening').addClass('mob-menu-opened');
            }, 1000);
        }
        else if ( $('body').hasClass('mob-menu-opened') ) {
            $('body').removeClass('mob-menu-opened').addClass('mob-menu-closing');
            setTimeout(function(){ 
                $('body').removeClass('mob-menu-closing').addClass('mob-menu-closed');
            }, 1000);
        }
   });
   

});