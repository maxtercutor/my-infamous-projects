$(document).ready(function () {
 
    var show = true;
    var countbox = '#numbers';
    $(window).on("scroll load resize", function () {
        if (!show) return false; 
        var w_top = $(window).scrollTop(); 
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height(); 
        var d_height = $(document).height(); 
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.numbers__number').css('opacity', '1');
            $('.numbers__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
             
            show = false;
        }
    });

    $('#partners').each(function () {
        var owl = $(this).find('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            autoplay: true,

            responsive: {
                576: {
                    items: 2,
                    margin: 80
                },
                992: {
                    items: 3,
                    margin: 60
                },
                1200: {
                    items: 4,
                    margin: 40,
                }
            }
        });
      
        $(this).find('.partners__button--prev').on('click', function () {
          owl.trigger('prev.owl.carousel');
        });
      
        $(this).find('.partners__button--next').on('click', function () {
          owl.trigger('next.owl.carousel');
        });
      });

      $('form').on('submit', sendForm);

});

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');

burger.onclick = () => menu.classList.toggle('active');
menu.onclick = () => {
    setTimeout(() => {
        menu.classList.toggle('active');
    });
}

function sendForm(e) {
	e.preventDefault();

    var form = $(this),
        name = form.find('input[type="text"]'),
        tel = form.find('input[type="tel"]'),
		email = form.find('input[type="tel"]');
        btn = form.find('button[type="email"]');
    
    btn.attr('disabled', true).addClass('disabled');

    var data = form.serialize();

    $.ajax({
        url: '/mail.php',
        type: 'POST',
        data: data,
    }).done(function(data) {
        $('button.fancybox-close-small').click();

        console.log("Ok! " + data);

        setTimeout(function() {
            alert('Письмо отправлено...');
        }, 2000);

        form.find('input').val('');
        btn.removeAttr('disabled').removeClass('disabled'); 
    }).fail(function() {
        $('button.fancybox-close-small').click();

        console.log("Error from mail!!!" + data);

        setTimeout(function() {
            alert('Не удалось отправить письмо, \nповторите попытку позже...');
        }, 2000);

        btn.removeClass('disabled');
        btn.removeAttr('disabled').removeClass('disabled'); 
    });
}


