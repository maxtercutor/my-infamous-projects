<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<base href="https://stroyway.com/wp-content/themes/stroyway-theme/">
	<link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/template_1.min.css">
    <link rel="stylesheet" href="css/quiz_1.min.css">
    <link rel="stylesheet" href="css/khoz-bloki_old.min.css">
	<link rel="stylesheet" href="css/quiz_2.min.css">
	<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="js/template_1.js" defer></script>
	<script src="js/quiz_1.js" defer></script>
	<script src="js/functions.js" defer></script>
	<script src="rest-api/common.js" defer></script>
    <title>Хозблоки-Old</title>
</head>
<body>
    <header class="header">
        <div class="logo">
           <div class="logo-img">
				<a href="/" target="_blank">
					<img src="images/logo_atlant.png" alt="" class="logo-img">
				</a>
            </div>
            <div class="logo-text">Исполним Вашу мечту</div>
        </div>
        <div id="social_tel" class="social-tel">
            <div class="vk"><a href="https://vk.com" target="_blank"><img src="images/vk.png" alt=""></a></div>
            <div class="instagram"><a href="https://www.instagram.com" target="_blank"><img src="images/instagram.png" alt=""></a>
            </div>
            <div class="tel">
                <div class="tel-text"><a href="tel:+7-499-346-84-09">+ 7 499 346 84 09</a></div>
            </div>
        </div>
    </header>
    <main id="main" class="main">
        <h1 class="block">
            Все для дачи. <br>
            Сараи, амбары, хозблоки.
        </h1>
        <div class="block subheading-block">
           <div class="hustle-text">
                <div class="top-row">
                    Закажи у нас, пройдя опрос и получи бесплатную доставку по всей области + быструю сборку + гарантию
                </div>
            </div>
        </div>
        <div class="success-block">
            <div class="first-row">
                    <div class="numbers">500+</div>
                    <div class="info-text">Реализованных <br> проектов</div>
            </div>
            <div class="second-row">
                    <div class="numbers">20 лет</div>
                    <div class="info-text">Опыт работы в Москве<br>  и Московской области</div>
                
            </div>
        </div>
        <div class="button-container">
           <button id="open_button" class="open-button">
            Пройти опрос
            </button>
            <div class="sub-button-text">Займет не более 2 минут</div>
        </div>
        <div class="mobile-social">
            <div class="vk-mobile"><a href="https://vk.com" target="_blank"><img src="images/vk.png" alt="#"></a></div>
            <div class="instagram-mobile"><a href="https://www.instagram.com" target="_blank"><img src="images/instagram.png" alt=""></a>
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
       <div id="close_button" class="close-button">x</div>
        <div class="quiz-page">
            <h2>Что Вам нужно?</h2>
            <div class="answers-block">
                <figure class="figure">
                    <img src="images/picture_9.png" alt="">
                    <figcaption>Сарай</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_10.png" alt="">
                    <figcaption>Амбар</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_11.png" alt="">
                    <figcaption>Хозблок</figcaption>
                </figure>
            </div>
            <div class="buttons-container">
                <button class="prev-button">
                    <span class="button-text">Назад</span>
                </button>
                <button class="button next-button">
                    <span class="button-content">
                        <span class="button-text">Далее</span>
                   </span>
                </button>
            </div>
        </div>
        <div class="quiz-page">
            <h2 class="h2">Укажите желаемый размер постройки (м2)</h2>
            <div class="answers-block">
                <input type="text">
            </div>
            <div class="buttons-container">
                <button class="button prev-button">
                    <span class="button-text">Назад</span>
                </button>
                <button class="button next-button">
                    <span class="button-content">
                        <span class="button-text" style="text-transform: none;">Далее</span>
                    </span>
                </button>
            </div>
        </div>
        <div class="quiz-page">
            <h2 class="h2">Из какого материала Вам нужна постройка?</h2>
            <div class="answers-block">
                <figure class="figure">
                    <img src="images/picture_12.png" alt="">
                    <figcaption>Из дерева</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_13.png" alt="">
                    <figcaption>Из пластика</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_14.png" alt="">
                    <figcaption>Из стали</figcaption>
                </figure>
            </div>
            <div class="buttons-container">
                <button class="button prev-button">
                    <span class="button-text">Назад</span>
                </button>
                <button class="button next-button">
                    <span class="button-content">
                        <span class="button-text">Далее</span>
                    </span>
                </button>
            </div>
        </div>
        <div class="quiz-page">
            <h2 class="h2">Сколько этажей должно быть в постройке?</h2>
            <div class="answers-block answers-block_radio">
                <input name="radio" type="radio" value="1"><label class="first" for="radio">1</label>
                <input name="radio" type="radio" value="2"><label for="radio">2</label>
                <input name="radio" type="radio" value="3"><label class="last" for="radio">3</label>
            </div>
            <div class="buttons-container">
                <button class="button prev-button">
                    <span class="button-text">Назад</span>
                </button>
                <button class="button next-button">
                    <span class="button-content">
                        <span class="button-text" style="text-transform: none;">Далее</span>
                    </span>
                </button>
            </div>
        </div>
        <form id="form" class="quiz-page">
            <h2 class="h2">Введите Ваши данные</h2>
            <input type="hidden" name="DATA[TITLE]" value="Сайт Хозблоки-Old">
            <div class="answers-block final-form">
                <label for="contact">Имя</label><input type="text" name="DATA[NAME]">
                <label for="contact">Телефон</label><input type="text" name="DATA[PHONE_WORK]" placeholder="+7(___)___-__-__">
				<input type="hidden" name="DATA[QUESTIONS_&_ANSWERS]" id="quiz_info" value="">
				<input type="hidden" name="DATA[OPPORTUNITY]" id="price_data" value="">
				<input type="hidden" name="mail-site-name" id="mail_site_name" value="Хозблоки">
				<input type="hidden" name="mail-phone" id="mail_phone" value="">
				<input type="hidden" name="mail-quiz" id="mail_quiz" value="">
				<input type="hidden" name="mail-price" id="mail_price" value="">
            </div>
            <div class="buttons-container">
                <button class="button prev-button">
                    <span class="button-text">Назад</span>
                </button>
                <button type="submit" class="button next-button">
                    <span class="button-content">
                        <span class="button-text">Далее</span>
                    </span>
                </button>
            </div>
        </form>
        <div class="quiz-page" >
            <h3>Спасибо за Ваши ответы. <br> Менеджер перезвонит Вам в ближайшее время</h3>
            
            <button id="back_to_main_button" class="button next-button next-button_mobile-last">
                <span class="button-content">
                    <span class="button-text" style="text-transform: none;">На главную</span>
                </span>
            </button>
        </div>
    </div>
	<div id="private_policy_container" class="private-policy-container">
        <h2>Политика конфиденциальности</h2>
        <p>Данное соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.</p>
        <p>Все лица, заполнившие сведения, составляющие персональные данные на данном сайте, а также разместившие иную информацию обозначенными действиями подтверждают свое согласие на обработку персональных данных и их передачу оператору обработки персональных данных. Под персональными данными Гражданина понимается нижеуказанная информация: общая информация (ФИО и адрес электронной почты, телефон, город проживания, дата рождения, личная информация, фото и видео с участием Гражданина). Гражданин, принимая настоящее Соглашение, выражает свою заинтересованность и полное согласие, что обработка персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.</p>
        <p>Гражданин гарантирует: информация, им предоставленная, является полной, точной и достоверной; при предоставлении информации не нарушается действующее законодательство Российской Федерации, законные права и интересы третьих лиц; вся предоставленная информация заполнена Гражданином в отношении себя лично.</p>
    </div>
    <div id="overlay" class="overlay"></div>
	<script>
		if(window.innerWidth > 480 && window.innerWidth <= 1200)
        document.querySelector('.footer').style.top = document.body.scrollHeight + 10 + 'px';
	</script>
</body>
</html>