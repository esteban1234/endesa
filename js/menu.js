$(document).ready(main);

var contador = 1;

function main() {
    $('.op-menu').click(function() {
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            }, 800);


             $('.op-menu').animate({
                left: '70%'
            }, 800);


            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            }, 800);

           
            $('.op-menu').animate({
                left: '0'
            }, 800);

        }
    });

}
