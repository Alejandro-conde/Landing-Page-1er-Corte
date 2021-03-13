/* Activador de jQuery   Funcion principal de jQuery */
$(document).ready(function() { 

    // Activación de transición del menú principal y del menú movil
    $('header article nav a, aside#menu-moviles nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    /* Funciones de abrir y cerrar el menú responsive */
    $('a#abrir-menu').click(function(){
        $('aside#menu-moviles').animate({
            right: 0
        },300,'easeOutExpo');

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();

        event.preventDefault()
    });

    $('a#cerrar-menu, aside#menu-moviles nav a').click(function(){
        $('aside#menu-moviles').animate({
            right: -290
        },300,'easeOutExpo');

        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault()
    });
});