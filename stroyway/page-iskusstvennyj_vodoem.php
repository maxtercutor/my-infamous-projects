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
	<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="js/template_1.js" defer></script>
	<script src="js/quiz_1.js" defer></script>
	<script src="js/functions.js" defer></script>
	<script src="rest-api/common.js" defer></script>
	<style>
	
	</style>
    <title>Искусственный Водоем</title>
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
                <div class="tel-img"><img src="images/phone.png" alt=""></div>
                <div class="tel-text"><a href="tel:+7-499-346-84-09">+7 499 346 84 09</a></div>
            </div>
        </div>
    </header>
    <main id="main" class="main">
        <div class="block upheading-block">
            Строительство искусственных водоемов и прудов под ключ с гарантией 1 год!
        </div>
        <h1 class="block">
            Рассчитайте <span class="yellow">стоимость</span> Вашего водоема или пруда <span class="yellow">за 2 минуты</span> 
        </h1>
        <div class="block subheading-block">
            <div class="layer-img">
                <img src="images/layer.png" alt="">
            </div>
            <div class="hustle-text">
                <div class="top-row">
                    Пройдя экспресс-тест из 5 простых вопросов вы получите:
                </div>
                <div class="center-row">
                    <div class="left-block">
                        <div class="center-img-block">
                            <img src="images/checked.png" alt="">
                        </div>
                        <div class="center-text-block">
                            Смету на стоимость работ
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="center-img-block">
                            <img src="images/checked.png" alt="">
                        </div>
                        <div class="center-text-block">
                            Персональную скидку 15%
                        </div>
                    </div>
                </div>
                <div class="bottom-row">
                    И гарантированный подарок!
                </div>
            </div>
        </div>
        <div class="achievement-block">
            <div class="left-column">
                <div class="frame"><img src="images/rectangle_1.png" alt=""></div>
                <div class="info-block">
                    <div class="numbers left">500+</div>
                    <div class="info-text">Реализованных проектов</div>
                </div>
            </div>
            <div class="right-column">
                <div class="frame"><img src="images/rectangle_1.png" alt=""></div>
                <div class="info-block">
                    <div class="numbers right">20 лет</div>
                    <div class="info-text">Опыт в Москве<br>  и Московской области</div>
                </div>
            </div>
            <div class="share"><img src="images/arrow_yellow.png" alt=""></div>
        </div>
        <div class="button-container">
           <button id="open_button" class="button">
            <span class="button-content">
                <span class="button-text">РАССЧИТАТЬ</span>
                <span class="button-img"><img src="images/arrow.png" alt=""></span>
            </span>
            </button>
        </div>
        <div class="mobile-social">
            <div class="vk-mobile"><a href="https://vk.com/stroyway_com" target="_blank"><img src="images/vk.png" alt="#"></a></div>
            <div class="instagram-mobile"><a href="https://www.instagram.com/stroy_way" target="_blank"><img src="images/instagram.png" alt=""></a>
            </div>
        </div>
    </main>
    <footer class="footer">
        <div id="copyright" class="copyright">. Все права защищены.  Сайт не является публичой офертой</div>
        <div id="private_policy" class="private-policy">Политика конфиденциальности</div>
        <div class="made-with-love">Сделано с любовью в StroyWay</div>
    </footer>
	
	<div id="quiz_container" class="quiz-container">
       <div id="close_button" class="close-button">X</div>
        <div class="quiz-page">
            <h2>Какой по назначению водоем или пруд Вы планируете построить?</h2>
            <div class="answers-block">
                <figure class="figure">
                    <img src="images/picture_1.png" alt="">
                    <figcaption>Декоративный</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_2.png" alt="">
                    <figcaption>Для рыбной ловли</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_3.png" alt="">
                    <figcaption>Для купания</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_4.png" alt="">
                    <figcaption>Смешанный</figcaption>
                </figure>
            </div>
            <div class="button-container">
               <button class="button next-button">
                 <span class="button-content">
                    <span class="button-text">Продолжить</span>
                    <span class="button-img"><img src="images/arrow.png" alt=""></span>
                 </span>
               </button>
            </div>
        </div>
        <div class="quiz-page">
            <h2>Укажите размеры Вашего будущего водоема или пруда</h2>
            <div class="answers-block">
                <label><input type="text">Длина, м</label>
                <label><input type="text">Ширина, м</label>
                <label><input type="text">Глубина, м</label>
            </div>
            <div class="button-container">
               <button class="button next-button">
                 <span class="button-content">
                    <span class="button-text">Продолжить</span>
                    <span class="button-img"><img src="images/arrow.png" alt=""></span>
                 </span>
               </button>
            </div>              
            <button class="prev-button">
                <img src="images/arrow_back.png" alt="">
            </button>
        </div>
        <div class="quiz-page">
            <h2>Готова ли площадка под строительство водоема или пруда?</h2>
            <div class="answers-block flex-wrap">
                <div class="text-answer">Участок не тронут, ничего не готово</div>
                <div class="text-answer">Котлован под водоем или пруд  уже выкопан</div>
                <div class="text-answer">Хочу переделать старый водоем  или пруд</div>
                <div class="text-answer">Выбрано только место под строительство водоема или пруда</div>
            </div>
            <div class="button-container">
               <button class="button next-button">
                 <span class="button-content">
                    <span class="button-text">Продолжить</span>
                    <span class="button-img"><img src="images/arrow.png" alt=""></span>
                 </span>
               </button>
            </div>
            <button class="prev-button">
                <img src="images/arrow_back.png" alt="">
            </button>
        </div>
        <div class="quiz-page">
            <h2>У Вас уже есть представление как будет выглядеть водоем или пруд?</h2>
            <div class="answers-block flex-wrap">
                <div class="text-answer">Да, есть готовый проект с черетежами</div>
                <div class="text-answer">Да, есть эскиз будущего водоема  или пруда</div>
                <div class="text-answer">Да, есть пара картинок из интернета</div>
                <div class="text-answer">Нет, хотим посмотреть ваш каталог</div>
            </div>
            <div class="button-container">
               <button class="button next-button">
                 <span class="button-content">
                    <span class="button-text">Продолжить</span>
                    <span class="button-img"><img src="images/arrow.png" alt=""></span>
                 </span>
               </button>
            </div>
            <button class="prev-button">
                <img src="images/arrow_back.png" alt="">
            </button>
        </div>
        <div class="quiz-page">
            <h2>Какие элементы Вы бы хотели видеть в своем водоеме или пруду?</h2>
            <div class="answers-block">
                <figure class="figure">
                    <img src="images/picture_5.png" alt="">
                    <figcaption>Водопад/Каскад</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_6.png" alt="">
                    <figcaption>Мостик</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_7.png" alt="">
                    <figcaption>Ручей</figcaption>
                </figure>
                <figure class="figure">
                    <img src="images/picture_8.png" alt="">
                    <figcaption>Смешанный</figcaption>
                </figure>
            </div>
            <div class="button-container">
               <button class="button next-button">
                 <span class="button-content">
                    <span class="button-text">Продолжить</span>
                    <span class="button-img"><img src="images/arrow.png" alt=""></span>
                 </span>
               </button>
            </div>
            <button class="prev-button">
                <img src="images/arrow_back.png" alt="">
            </button>
        </div>
        <form id="form" class="quiz-page final-quiz-page">
            <h4>Все данные переданы нашим менеджерам, они уже приступили к расчету стоимости</h4>
            <h3>Введите свои контактные данные и с Вами свяжутся в течение 30 м</h3>
			<input type="hidden" name="DATA[TITLE]" value="Искусственный Водоем">
            <div class="answers-block final-form">
                <label><input type="text" name="DATA[NAME]">Имя</label>
                <label><input type="text" name="DATA[EMAIL_HOME]">Email</label>
                <label><input type="text" name="DATA[PHONE_WORK]">Номер телефона</label>
				<input type="hidden" name="DATA[QUESTIONS_&_ANSWERS]" id="quiz_info" value="">
				<input type="hidden" name="DATA[OPPORTUNITY]" id="price_data" value="">
				<input type="hidden" name="mail-site-name" id="mail_site_name" value="Хозблоки">
				<input type="hidden" name="mail-phone" id="mail_phone" value="">
				<input type="hidden" name="mail-quiz" id="mail_quiz" value="">
				<input type="hidden" name="mail-price" id="mail_price" value="">
            </div>
			<div id="present_box" class="present-box">
                <input type="image" src="images/present_box.png" alt="#">
                <div class="twenty"><img src="images/20%25.png" alt=""></div>
                <div class="discount"><img src="images/discount.png" alt=""></div>
            </div>
            <button type="button" class="prev-button">
                <img src="images/arrow_back.png" alt="">
            </button>
        </form>
    </div>
	<div id="private_policy_container" class="private-policy-container">
        <h2>Политика конфиденциальности</h2>
        <p>Данное соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.</p>
        <p>Все лица, заполнившие сведения, составляющие персональные данные на данном сайте, а также разместившие иную информацию обозначенными действиями подтверждают свое согласие на обработку персональных данных и их передачу оператору обработки персональных данных. Под персональными данными Гражданина понимается нижеуказанная информация: общая информация (ФИО и адрес электронной почты, телефон, город проживания, дата рождения, личная информация, фото и видео с участием Гражданина). Гражданин, принимая настоящее Соглашение, выражает свою заинтересованность и полное согласие, что обработка персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.</p>
        <p>Гражданин гарантирует: информация, им предоставленная, является полной, точной и достоверной; при предоставлении информации не нарушается действующее законодательство Российской Федерации, законные права и интересы третьих лиц; вся предоставленная информация заполнена Гражданином в отношении себя лично.</p>
    </div>
    <div id="overlay" class="overlay"></div>

    <script>

    </script>
</body>
</html>