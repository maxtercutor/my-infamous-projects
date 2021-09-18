if(window.innerWidth < 768) {

	const menuList = document.querySelector('ul.menu-list');
	const menuListItems = document.querySelectorAll('ul.menu-list > li > a');
	const subMenus = document.querySelectorAll('ul.sub-menu');

	for(let i = 1; i < 5; i++) {
		let elem = document.createElement('div');
		elem.style.position = 'absolute';
		elem.style.top = '10px';
		elem.style.right = '0';
		elem.innerHTML = '&#9660;';

		menuListItems[i].after(elem);

		elem.addEventListener('click', () => {
			subMenus[i - 1].classList.toggle('active');

			if(subMenus[i - 1].classList.contains('active')) elem.innerHTML = '&#9650;';
			else elem.innerHTML = '&#9660;';
		});
	}
}

/*const headerLangSpan = document.querySelector('.header__lang > span');
const headerLangSub = document.querySelector('.header__lang-sub');

headerLangSpan.addEventListener('click', () => {
	headerLangSub.classList.toggle('active');

	if(headerLangSub.classList.contains('active')) headerLangSpan.innerHTML = '&nbsp;&nbsp;&#9650;';
		else headerLangSpan.innerHTML = '&nbsp;&nbsp;&#9660;'
});*/



$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

$('input[type="tel"]').mask("+38(999) 999 99 99");

$('input[type="tel"]').click(function(){
    $(this).setCursorPosition(4);
});

const modalForm = document.querySelector('#modalForm');
const modalForm2 = document.querySelector('#modalForm2');

modalForm.addEventListener('click', blurInput);
modalForm2.addEventListener('click', blurInput);

function blurInput(event) {
	if(event.target.tagName !== 'INPUT') $('input').blur();
}

$('form.form-box').on('submit', sendForm);

function sendForm(e) {
	e.preventDefault();

    var form = $(this),
        name = form.find('input[type="text"]'),
        tel = form.find('input[type="tel"]'),
        btn = form.find('button[type="submit"]');

    btn.attr('disabled', true).addClass('disabled');

    var data = form.serialize();

    $.ajax({
        url: '/wp-content/themes/vivaton/mail.php',
        type: 'POST',
        data: data,
    }).done(function(data) {
        $('button[title="Close"]').click();

        console.log("Ok! " + data);

        setTimeout(function() {
            $.fancybox.open('<h3>Спасибо!</h3><p class="">Благодарим за Ваш запрос.<br>В ближайшее время менеджер свяжется с Вами.</p>');
        }, 2000);

        form.find('input').val('');
        form.find('textarea').val('');

        btn.removeAttr('disabled').removeClass('disabled');
    }).fail(function() {
        $('button[title="Close"]').click();

        console.log("Error from mail!!!" + data);

        setTimeout(function() {
            $.fancybox.open('<h3>Извините, с отправкой письма <span>произошла ошибка</h3><p class="hero-slide__desc">Попробуйте еще раз позже...</p>');
        }, 2000);

        btn.removeAttr('disabled').removeClass('disabled');
    });
}

const personalBlock = document.querySelector('div.personal');
const servicesBlock = document.querySelector('div.services');

if(personalBlock || servicesBlock) {
	setTimeout(() => {

		let personalSlideNames = document.querySelectorAll('.personal-slide__name');
		const personalSlideDescs = document.querySelectorAll('.personal-slide__desc');

		let personalSlideNameMaxHeight = getComputedStyle(personalSlideNames[0]).height;
		let personalSlideDescMaxHeight = getComputedStyle(personalSlideDescs[0]).height;

		for(let i = 0; i < personalSlideNames.length; i++) {
			if(getComputedStyle(personalSlideNames[i]).height > personalSlideNameMaxHeight) personalSlideNameMaxHeight = getComputedStyle(personalSlideNames[i]).height;
			else personalSlideNameMaxHeight = personalSlideNameMaxHeight;
			if(getComputedStyle(personalSlideDescs[i]).height > personalSlideDescMaxHeight) personalSlideDescMaxHeight = getComputedStyle(personalSlideDescs[i]).height;
		}

		for(let i = 0; i < personalSlideNames.length; i++) {

			personalSlideNames[i].style.height = personalSlideNameMaxHeight;
			personalSlideDescs[i].style.height = personalSlideDescMaxHeight;
	}

	}, 500);
}

const pricePage = document.querySelector('div.price');

if(pricePage) {
	const priceAccordeonTitles = document.querySelectorAll('.price-accordeon__title');
	const priceAccordeonIcons = document.querySelectorAll('.price-accordeon__icon');

	let flag;

	for(let i = 0; i < priceAccordeonTitles.length; i++) {
		let priceAccordeonTitle = priceAccordeonTitles[i];

		flag = true;

		priceAccordeonTitle.addEventListener('click', () => {
			if(flag) priceAccordeonIcons[i].innerHTML = '&#9650;';
			else priceAccordeonIcons[i].innerHTML = '&#9660;';

			flag = !flag;
		});
	}
}