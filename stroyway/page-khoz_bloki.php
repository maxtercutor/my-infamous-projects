<?php
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<base href="https://stroyway.com/wp-content/themes/stroyway-theme/">
	<link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/template_1.min.css">
    <link rel="stylesheet" href="css/quiz_1.min.css">
    <link rel="stylesheet" href="css/khoz-bloki.min.css">
	<link rel="stylesheet" href="css/quiz_3.min.css">
	<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="js/template_1.js" defer></script>
	<script src="js/quiz_2.js" defer></script>
	<script src="js/functions.js" defer></script>
	<script src="rest-api/common.js" defer></script>
    <title>Хозблоки</title>
</head>
<body>
    <header class="header">
        <div class="logo">
           <div class="logo-img">
				<a href="/" target="_blank">
					<img src="images/logo_stroyway.png" alt="" class="logo-img">
				</a>
            </div>
            <div class="logo-text">Исполним Вашу мечту</div>
        </div>
        <div id="social_tel" class="social-tel">
            <div class="vk"><a href="https://vk.com/stroyway_com" target="_blank"><img src="images/vk.png" alt=""></a></div>
            <div class="instagram"><a href="https://www.instagram.com/stroy_way" target="_blank"><img src="images/instagram.png" alt=""></a>
            </div>
            <div class="tel">
                <div class="tel-text"><a href="tel:+7-499-346-84-09">+ 7 499 346 84 09</a></div>
            </div>
        </div>
    </header>
    <main id="main" class="main">
        <h1 class="block">
            Все для дачи и дома! <br>
            Любой тип построек за короткий срок.
        </h1>
        <div class="block subheading-block">
           <div class="hustle-text">
                <div class="top-row">
                    Пройдите короткий тест, узнайте стоимость! При заказе в подарок дизайн проект.
                </div>
            </div>
        </div>
        <div class="success-block">
            <div class="first-row">
                    <div class="numbers">500+</div>
                    <div class="info-text">Реализованных проектов</div>
            </div>
            <div class="second-row">
                    <div class="numbers">20 лет</div>
                    <div class="info-text">Опыт работы в Москве <br>и Московской области</div>
                
            </div>
        </div>
        <div class="button-container">
           <button id="open_button" class="open-button">
            Расчитать
            </button>
            <div class="sub-button-text">Займет не более 2 минут</div>
        </div>
        <div class="mobile-social">
            <div class="vk-mobile"><a href="https://vk.com/stroyway.com" target="_blank"><img src="images/vk.png" alt="#"></a></div>
            <div class="instagram-mobile"><a href="https://www.instagram.com/stroy_way" target="_blank"><img src="images/instagram.png" alt=""></a>
            </div>
        </div>
    </main>
    <footer class="footer">
        <div id="copyright" class="copyright"></div>
        <div id="private_policy" class="private-policy">Политика конфиденциальности</div>
        <div class="made-with-love">Сделано с любовью в StroyWay</div>
        <div class="public-offert">Сайт не является публичой офертой</div>
    </footer>
    <div id="quiz_container" class="quiz-container">
       <div id="close_button" class="close-button"><img src="images/close-button.png" alt=""></div>
        <div class="quiz-page">
            <h2>Выберите тип постройки</h2>
            <div class="answers-block">
                <figure class="figure">
                    <img src="images/picture_15.png" alt="Хозблок">
                    <figcaption>Хозблок</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_16.png" alt="Баня-хозблок">
                    <figcaption>Баня-хозблок</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_17.png" alt="Гараж-хозблок">
                    <figcaption>Гараж-хозблок</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_18.png" alt="Туалет-хозблок">
                    <figcaption>Туалет-хозблок</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_19.png" alt="Угловой хозблок">
                    <figcaption>Угловой хозблок</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_20.png" alt="Беседка-хозблок">
                    <figcaption>Беседка-хозблок</figcaption>
                </figure>
            </div>
        </div>
        <div class="quiz-page">
            <h2 class="h2">Укажите желаемый размер постройки (м2)</h2>
            <div class="answers-block radio-answers">
                <input type="radio" id="radio_1"><label for="radio_1" class="radio">до 10</label>
                <input type="radio" id="radio_2"><label for="radio_2" class="radio">от 10 до 20</label>
                <input type="radio" id="radio_3"><label for="radio_3" class="radio">более 20</label>
            </div>
        </div>
        <div class="quiz-page">
            <h2 class="h2">Выберите материал наружной отделки</h2>
            <div class="answers-block single-line-answers">
                <figure class="figure">
                    <img src="images/picture_21.png" alt="Вагонка">
                    <figcaption>Вагонка</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_22.png" alt="Пластик">
                    <figcaption>Пластик</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_23.png" alt="Металлопрофиль">
                    <figcaption>Металлопрофиль</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_24.png" alt="Еще не решил">
                    <figcaption>Еще не решил</figcaption>
                </figure>
            </div>
        </div>
        <div class="quiz-page">
            <h2 class="h2">Выберите материал внутренней отделки</h2>
            <div class="answers-block single-line-answers">
                <figure class="figure">
                    <img src="images/picture_25.png" alt="Вагонка">
                    <figcaption>Вагонка</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_26.png" alt="Пластик">
                    <figcaption>Пластик</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_27.png" alt="Гипсокартон">
                    <figcaption>Гипсокартон</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_24.png" alt="Еще не решил">
                    <figcaption>Еще не решил</figcaption>
                </figure>
            </div>
        </div>
        <div class="quiz-page">
            <h2 class="h2">Выберите материал кровельного покрытия</h2>
            <div class="answers-block single-line-answers">
                <figure class="figure">
                    <img src="images/picture_28.png" alt="Мягкая кровля">
                    <figcaption>Мягкая кровля</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_29.png" alt="Черепица">
                    <figcaption>Черепица</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_30.png" alt="Металлочерепица">
                    <figcaption>Металлочерепица</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_24.png" alt="Еще не решил">
                    <figcaption>Еще не решил</figcaption>
                </figure>
            </div>
        </div>
        <form id="form" class="quiz-page">
            <h2 class="h2">Тест успешно пройден</h2>
			<!--<h3>По выбранным Вами параметрам расчетная стоимость <br> строительства составит <span class="total-price"></span> ₽ за м2</h3>-->
            <h3>Оставьте ваш телефон, и мы закрепим за номером скидку 10%.<br>В ближайшее время мы свяжется с вами для уточнения деталей.</h3>
            <input type="hidden" name="DATA[TITLE]" value="Сайт Хозблоки">
			<input type="hidden" name="DATA[QUESTIONS_&_ANSWERS]" id="quiz_info" value="">
			<input type="hidden" name="DATA[OPPORTUNITY]" id="price_data" value="">
			<input type="hidden" name="mail-site-name" id="mail_site_name" value="Хозблоки">
			<input type="hidden" name="mail-phone" id="mail_phone" value="">
			<input type="hidden" name="mail-quiz" id="mail_quiz" value="">
			<input type="hidden" name="mail-price" id="mail_price" value="">
            <div class="answers-block final-form">
                <label for="tel_input">Телефон</label><input type="tel" id="tel_input" name="DATA[PHONE_WORK]" placeholder="+7(___)___-__-__" pattern="^\+?\d{11}$" title="Номер содержит + (необязательно) и 11 цифр (обязательно)">
            </div>
        
            <button type="submit" id="back_to_main_button" class="final-form-button">Готово</button>
        </form>
        <progress id="progress" value="0" max="100"></progress>
    </div>
	<div id="private_policy_container" class="private-policy-container">
        <h4>Политика конфиденциальности</h4>
        <p>Данное соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.</p>
        <p>Все лица, заполнившие сведения, составляющие персональные данные на данном сайте, а также разместившие иную информацию обозначенными действиями подтверждают свое согласие на обработку персональных данных и их передачу оператору обработки персональных данных. Под персональными данными Гражданина понимается нижеуказанная информация: общая информация (ФИО и адрес электронной почты, телефон, город проживания, дата рождения, личная информация, фото и видео с участием Гражданина). Гражданин, принимая настоящее Соглашение, выражает свою заинтересованность и полное согласие, что обработка персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.</p>
        <p>Гражданин гарантирует: информация, им предоставленная, является полной, точной и достоверной; при предоставлении информации не нарушается действующее законодательство Российской Федерации, законные права и интересы третьих лиц; вся предоставленная информация заполнена Гражданином в отношении себя лично.</p>
    </div>
    <!--<div id="overlay" class="overlay"></div>-->
    <script>
		var goalParams = {
			order_price: 1000.35,
			currency: "RUB"
		};
		form.addEventListener('submit', function() {
		ym(54730792, 'reachGoal', 'ZAKAZ', goalParams); return true;
	});
    </script>
	
	<div>
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript" >
		(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
		m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
		ym(54730792, "init", {
			clickmap:true,
			trackLinks:true,
			accurateTrackBounce:true,
			webvisor:true
		});
		</script>
		<noscript><div><img src="https://mc.yandex.ru/watch/54730792https://mc.yandex.ru/watch/54730792
		" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
		<!-- /Yandex.Metrika counter -->
	</div>
	<script>
	
	</script>
</body>
</html>