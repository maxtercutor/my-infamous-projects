<?php

/*

Template Name: Дачное строительство

*/

/**

 * The template for displaying archive pages

 *

 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/

 *

 * @package main

 */  ?>
<!DOCTYPE html>

<html lang="ru">
<head>
  <meta charset="UTF-8">

  <title>Дачные дома для комфортного отдыха!</title>
  <meta content="width=device-width" name="viewport">
  <meta content="Дачные дома для комфортного отдыха! Продуманный интерьер и дизайн! 7 ступеней контроля качества" name="description">
  <meta content="WordPress 5.2.2" name="generator">
  <meta content="«StroyWay»" lang="ru" name="copyright">
  <base href="https://stroyway.com/wp-content/themes/stroyway-theme/">
  <link href="css/normalize.css" rel="stylesheet">
  <link href="css/dachnoe-stroitelstvo/dachnoe-stroitelstvo.css" rel="stylesheet">
  <link href="css/dachnoe-stroitelstvo/fonts.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500|Rubik:400,500,700&display=swap&subset=cyrillic" rel="stylesheet">
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
</head>

<body>
<script>
  var goalParams = {
    order_price: 1000.35,
    currency: "RUB"
  };
</script>
    <header class="main-header container">
        <div class="logo header__logo">
            <div class="logo__img">
                <a href="https://stroyway.com/" target="_blank">
                    <img class="logo-img" src="images/logo.svg" alt="На главную StroyWay" width="65">
                </a>
            </div>


            <p class="logo__text">
                Исполним<br>
                Вашу мечту
            </p>
        </div>

        <h2 class="visually-hidden">Наши контакты</h2>
        <ul class="header__social social">
            <li class="social__vk vk">
                <a href="https://vk.com/stroyway_com" target="_blank">
                    <img src="images/vk.svg" alt="Наш Вконтакте">
                </a>
            </li>


            <li class="social__inst inst">
                <a href="https://www.instagram.com/stroy_way/" target="_blank">
                    <img src="images/instagram.svg" alt="Наш Инстаграм">
                </a>
            </li>


            <li class="social__tel tel">
                <a href="tel:84993468409">+7&nbsp;499&nbsp;346 84 09</a>
            </li>
        </ul>

        <h2 class="visually-hidden">Наше время работы</h2>
        <span class="header__time">с&nbsp;8:00 до&nbsp;20:00</span>
    </header>


    <main class="main container" id="main">
        <h1 class="main__title">Дачные дома для комфортного отдыха!</h1>
        <strong class="main__subtitle">Продуманный интерьер и дизайн! 7 ступеней контроля качества</strong>
        <b class="main_call-to-action">
            Сделать заказ и получить скидку? Легко!<br>
            Вам достаточно оставить заявку!<br>
            Все остальное мы продумаем за Вас!
        </b>

        <section class="main__features">
            <h2 class="visually-hidden">Наша статистика</h2>
            <ul class="feature__list">
                <li class="features-block">
                    <div class="features-block__count">
                        500+
                    </div>


                    <div class="features-block__text">
                        Реализованных проектов
                    </div>
                </li>


                <li class="features-block">
                    <div class="features-block__count">
                        20<span>лет</span>
                    </div>


                    <div class="features-block__text">
                        Опыт работы в&nbsp;Москве и&nbsp;Московской области
                    </div>
                </li>
            </ul>
        </section>


        <button class="btn main__btn" id="open_btn">Узнайте больше</button>


        <section class="main__social social">
            <h2 class="visually-hidden">Наши контакты</h2>
            <ul class="social-list">
                <li class="social__vk vk">
                    <a href="https://vk.com/stroika_atlant" target="_blank">
                      <img src="images/vk.svg" alt="Наш Вконтакте">
                    </a>
                </li>

                <li class="social__inst inst">
                    <a href="https://www.instagram.com/stroy_way/" target="_blank">
                      <img src="images/instagram.svg" alt="Наш Инстаграм">
                    </a>
                </li>
            </ul>
        </section>
    </main>


    <footer class="main-footer container">
        <p class="footer__copyright" id="copyright"></p>


        <p class="footer__made-with-love">Сделано с&nbsp;любовью в&nbsp;StroyWay</p>


        <p class="footer__private-policy">
            <button id="open__pp">Политика конфиденциальности</button>
        </p>


        <p class="footer__text">Сайт не&nbsp;является публичной офертой.</p>
    </footer>


    <section class="quiz" id="quiz">
        <div class="close-button" id="close_button">
            <button>
              <img src="images/close.svg" alt="Закрыть Тест">
            </button>
        </div>

        <div class="quiz-page">
          <h3 class="quiz-page__title">Из чего мы строим?</h3>


            <form class="quizForm quiz__answers-block" name="form">
                <div class="quiz__answer">
                    <input class="quiz-answer__radio visually-hidden" id="answer_radio_10" type="radio" name="answer_radio_1" value="Брус" data-price="0">
                    <label for="answer_radio_10" tabindex="0">
                        <img alt="Брус" src="images/dachnoe-stroitelstvo/1.jpg">
                        <span class="answer__text">Брус</span>
                    </label>
                </div>


                <div class="quiz__answer">
                    <input class="quiz-answer__radio visually-hidden" id="answer_radio_11" type="radio" name="answer_radio_1" value="Оцилиндрованный брус" data-price="0">
                    <label for="answer_radio_11" tabindex="0">
                        <img alt="Оцилиндрованный брус" src="images/dachnoe-stroitelstvo/2.jpg">
                        <span class="answer__text">Оцилиндрованный брус</span>
                    </label>
                </div>


                <div class="quiz__answer">
                    <input class="quiz-answer__radio visually-hidden" id="answer_radio_12" type="radio" name="answer_radio_1" value="Профилированный брус" data-price="0">
                    <label for="answer_radio_12" tabindex="0">
                        <img alt="Профилированный брус" src="images/dachnoe-stroitelstvo/3.jpg">
                        <span class="answer__text">Профилированный брус</span>
                    </label>
                </div>

                <div class="quiz__answer">
                    <input class="quiz-answer__radio visually-hidden" id="answer_radio_13" type="radio" name="answer_radio_1" value="Бревно" data-price="0">
                    <label for="answer_radio_13" tabindex="0">
                        <img alt="Бревно" src="images/dachnoe-stroitelstvo/4.jpg">
                        <span class="answer__text">Бревно</span>
                    </label>
                </div>


                <div class="quiz__answer">
                    <input class="quiz-answer__radio visually-hidden" id="answer_radio_14" type="radio" name="answer_radio_1" value="Каркасное строительство" data-price="0">
                    <label for="answer_radio_14" tabindex="0">
                        <img alt="Каркасное строительство" src="images/dachnoe-stroitelstvo/5.jpg">
                        <span class="answer__text">Каркасное строительство</span>
                    </label>
                </div>


                <div class="quiz__answer">
                    <input class="quiz-answer__radio visually-hidden" id="answer_radio_15" type="radio" name="answer_radio_1" value="Кирпич" data-price="0">
                    <label for="answer_radio_15" tabindex="0">
                        <img alt="Кирпич" src="images/dachnoe-stroitelstvo/6.jpg">
                        <span class="answer__text">Кирпич</span>
                    </label>
                </div>

                <div class="quiz__answer">
                    <input class="quiz-answer__radio visually-hidden" id="answer_radio_16" type="radio" name="answer_radio_1" value="Газоблок" data-price="0">
                    <label for="answer_radio_16" tabindex="0">
                        <img alt="Газоблок" src="images/dachnoe-stroitelstvo/7.jpg">
                        <span class="answer__text">Газоблок</span>
                    </label>
                </div>


                <div class="quiz__answer">
                    <input class="quiz-answer__radio visually-hidden" id="answer_radio_17" type="radio" name="answer_radio_1" value="СМЛ-панели" data-price="0">
                    <label for="answer_radio_17" tabindex="0">
                        <img alt="СМЛ-панели" src="images/dachnoe-stroitelstvo/8.jpg">
                        <span class="answer__text">СМЛ-панели</span>
                    </label>
                </div>
            </form>
            <button class="btn quiz-page__btn">Сделать заявку</button>
        </div>

        <form class="quizForm quiz-page final-quiz-page quiz-page__form" name="form">

            <strong class="quiz-page__call-to-action">Для подтверждения заказа оставьте телефон, мы закрепим за номером скидку 10% и вышлем прайс лист и каталог на строительство по СМС или на мессенджер.</strong>

            <b class="quiz-page__info">Для расчета стоимости и уточнения деталей в ближайшее время с вами свяжется наш специалист.</b>

            <div class="quiz-answer quiz-answer__form">
                <label>Имя<input id="quiz_name" type="name" name="DATA[NAME]" required></label>
                <label>Телефон<input id="quiz_phone" type="tel" name="DATA[PHONE_WORK]" placeholder="+7 (___) ___ - __ - __" inputmode="tel" required></label>
                <input id="quiz_info" type="hidden" name="DATA[QUESTIONS_&_ANSWERS]" value="">
                <input id="quiz_title" type="hidden" name="DATA[TITLE]" value="Сайт Дачное строительство">
                <input id="price_data" type="hidden" name="DATA[OPPORTUNITY]" value="">
                <input id="post_title" type="hidden" name="mail-site-name" value="Сайт Дачное строительство">
                <input id="post_phone" type="hidden" name="mail-phone" value="">
                <input id="post_price" type="hidden" name="mail-name" value="">
                <input id="post_quiz" type="hidden" name="mail-quiz" value="">
                <input id="post_price" type="hidden" name="mail-price" value="">
            </div>


            <button class="btn quiz__submit-btn" type="submit">Далее</button>
        </form>


        <div class="quiz-page quiz__thankyou-page">
            <h3 class="thankyou-page__title quiz-page__title">Отлично! Мы&nbsp;подобрали для Вас лучшее предложение. Наш специалист свяжется с&nbsp;Вами в&nbsp;ближайшее время.</h3>


            <div class="thankyou-page__closebtn">
                <button class="btn close-button" id="tomain_button">
                  <span class="button-text">На&nbsp;главную</span>
                </button>
            </div>
        </div>
    </section>


    <section class="private-policy" id="private-policy">
        <div class="close-button" id="close_ppbutton">
            <button>
                <img alt="Закрыть Политику конфиденциальности" src="images/close.svg">
            </button>
        </div>

        <h3 class="private-policy__title">Политика конфиденциальности</h3>


        <div class="private-policy__block">
            <p>Данное соглашение об&nbsp;обработке персональных данных разработано в&nbsp;соответствии с&nbsp;законодательством Российской Федерации.</p>


            <p>Все лица, заполнившие сведения, составляющие персональные данные на&nbsp;данном сайте, а&nbsp;также разместившие иную информацию обозначенными действиями подтверждают свое согласие на&nbsp;обработку персональных данных и&nbsp;их&nbsp;передачу оператору обработки персональных данных. Под персональными данными Гражданина понимается нижеуказанная информация: общая информация (ФИО и&nbsp;адрес электронной почты, телефон, город проживания, дата рождения, личная информация, фото и&nbsp;видео с&nbsp;участием Гражданина). Гражданин, принимая настоящее Соглашение, выражает свою заинтересованность и&nbsp;полное согласие, что обработка персональных данных может включать в&nbsp;себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.</p>


            <p>Гражданин гарантирует: информация, им&nbsp;предоставленная, является полной, точной и&nbsp;достоверной; при предоставлении информации не&nbsp;нарушается действующее законодательство Российской Федерации, законные права и&nbsp;интересы третьих лиц; вся предоставленная информация заполнена Гражданином в&nbsp;отношении себя лично.</p>
        </div>
    </section>


    <div class="overlay" id="overlay">
    </div>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="js/jquery.maskedinput.min.js"></script>
    <script src="js/dachnoe-stroitelstvo/dachnoe-stroitelstvo.js"></script>
    <script src="js/dachnoe-stroitelstvo/rest.js"></script>
</body>
</html>
