console.log(`header: ${document.querySelector('header.header').offsetHeight}`);

const headerMenu = document.querySelector('nav.header__menu');

if(window.innerWidth > 1000) {
    const headerSearch = document.querySelector('.header__search');

    headerSearch.addEventListener('mouseenter', () => headerMenu.classList.add('disable'));
    headerSearch.addEventListener('mouseleave', () => headerMenu.classList.remove('disable'));
}

const burger = document.querySelector('.burger');
const closeMenu = document.querySelector('.header__close-menu');

burger.addEventListener('click', function() {
    headerMenu.classList.add('active');
});
closeMenu.addEventListener('click', function() {
    headerMenu.classList.remove('active');
});

if(window.innerWidth < 1000) {
    const footerItems = document.querySelector('.footer__items');
    const footerCopyright = document.querySelector('.footer__copyright');

    footerItems.append(footerCopyright);
}
if (window.innerWidth < 480) {
    const headerIcons = document.querySelector('.header__icons');

    headerMenu.append(headerIcons);
}

$('.form__close').on('click', () => $('.fancybox-button').click());

$('#modalForm').on('submit', sendForm);

function sendForm(e) {
	e.preventDefault();

    var form = $(this),
        name = form.find('input[type="text"]'),
        tel = form.find('input[type="tel"]'),
        btn = form.find('button[type="submit"]');
    
    btn.attr('disabled', true).addClass('disabled');

    var data = form.serialize();

    $.ajax({
        url: '/wp-content/themes/anker-geo/mail.php',
        type: 'POST',
        data: data,
    }).done(function(data) {
        $('button[title="Close"]').click();

        console.log("Ok! " + data);

        setTimeout(function() {
            $.fancybox.open($('#fancyboxSuccess'));
        }, 2000);

        form.find('input').val('');
        btn.removeAttr('disabled').removeClass('disabled'); 
    }).fail(function() {
        $('button[title="Close"]').click();

        console.log("Error from mail!!!" + data);

        setTimeout(function() {
            $.fancybox.open($('#fancyboxError'));
        }, 2000);

        btn.removeAttr('disabled').removeClass('disabled'); 
    });
}
