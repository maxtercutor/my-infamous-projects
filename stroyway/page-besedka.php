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
	<link rel="stylesheet" href="css/besedka.min.css">
	<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="js/template_1.js" defer></script>
	<script src="js/quiz_3.js" defer></script>
	<script src="js/functions.js" defer></script>
	<script src="rest-api/common.js" defer></script>
    <title>Беседка</title>
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
            <span style="color: #f2ea1f">Беседка</span> - уютное место отдыха!
        </h1>
        <div class="block subheading-block">
           <div class="hustle-text">
                <div class="top-row">
                    Готовые проекты. Индивидуальный подход!
                </div>
                <div class="center-row">
                    Сделать заказ и получить скидку? Легко! <br>
                           Вам достаточно оставить заявку! <br>
                           Все остальное мы продумаем за Вас!       
                            
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
            Узнайте больше
            </button>
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
            <h2>Какие строим?</h2>
            <div class="answers-block">
                <figure class="figure">
                    <img src="images/picture_42.png" alt="Открытые">
                    <figcaption>Открытые</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_43.png" alt="Закрытые">
                    <figcaption>Закрытые</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_44.png" alt="С хозблоком">
                    <figcaption>С хозблоком</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_45.png" alt="С барбекю">
                    <figcaption>С барбекю</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_46.png" alt="Угловой хозблок">
                    <figcaption>Шестигранные</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_47.png" alt="Беседка-хозблок">
                    <figcaption>Восьмигранные</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_48.png" alt="Восьмигранные">
                    <figcaption>Японские</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_49.png" alt="2х этажные">
                    <figcaption>2х этажные</figcaption>
                </figure>
            </div>
            <div class="quiz-button-container">
               <button id="next_button" class="button next-button">
                 <span class="button-content">
                    <span class="button-text">Сделать заявку</span>
                 </span>
               </button>
            </div>
        </div>
        
        <form id="form" class="quiz-page">
            <div class="form-text-max">
                Для подтверждения заказа оставьте телефон, 
                мы закрепим за номером скидку 10% и вышлем прайс-лист
                и каталог на строительство по СМС или на мессенджер.
            </div>
			<div class="form-text-min">
			    Для расчета стоимости и уточнения деталей в ближайшее время с вами свяжется наш специалист.
			</div>
            
            <input type="hidden" name="DATA[TITLE]" value="Сайт Беседка">
			<input type="hidden" name="DATA[QUESTIONS_&_ANSWERS]" id="quiz_info" value="">
			<input type="hidden" name="DATA[OPPORTUNITY]" id="price_data" value="">
			<input type="hidden" name="mail-site-name" id="mail_site_name" value="Беседка">
			<input type="hidden" name="mail-phone" id="mail_phone" value="">
			<input type="hidden" name="mail-quiz" id="mail_quiz" value="">
			<input type="hidden" name="mail-price" id="mail_price" value="">
            <div class="answers-block final-form">
               <label for="name_input">Имя</label><input autofocus type="text" id="name_input" name="DATA[NAME]">
                <label for="tel_input">Телефон</label><input type="tel" id="tel_input" name="DATA[PHONE_WORK]" placeholder="+7(___)___-__-__" pattern="^\+?\d{11}$" title="Номер содержит + (необязательно) и 11 цифр (обязательно)">
                <input type="submit" style="display: none;">
            </div>
        </form>
        <div class="quiz-page final-page">
            <div class="form-text-max final-page-text">
                Отлично! Мы подобрали для Вас лучшее предложение.
                Наш специалист свяжется с Вами в ближайшее время.
            </div>
            <div class="quiz-button-container final-button">
               <button id="back_to_main_button" class="button next-button">
                 <span class="button-content">
                    <span class="button-text">На главную</span>
                 </span>
               </button>
            </div>
        </div>
        <!--<progress id="progress" value="0" max="100"></progress>-->
    </div>
	<div id="private_policy_container" class="private-policy-container">
        <h4>Политика конфиденциальности</h4>
        <p>Данное соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.</p>
        <p>Все лица, заполнившие сведения, составляющие персональные данные на данном сайте, а также разместившие иную информацию обозначенными действиями подтверждают свое согласие на обработку персональных данных и их передачу оператору обработки персональных данных. Под персональными данными Гражданина понимается нижеуказанная информация: общая информация (ФИО и адрес электронной почты, телефон, город проживания, дата рождения, личная информация, фото и видео с участием Гражданина). Гражданин, принимая настоящее Соглашение, выражает свою заинтересованность и полное согласие, что обработка персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.</p>
        <p>Гражданин гарантирует: информация, им предоставленная, является полной, точной и достоверной; при предоставлении информации не нарушается действующее законодательство Российской Федерации, законные права и интересы третьих лиц; вся предоставленная информация заполнена Гражданином в отношении себя лично.</p>
    </div>
    <script>
		var goalParams = {
			order_price: 1000.35,
			currency: "RUB"
		};
		form.addEventListener('submit', function() {
		ym('', 'reachGoal', 'ZAKAZ', goalParams); return true;
	});
    </script>
	
	<div>
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript" >
		(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
		m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
		ym('', "init", {
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