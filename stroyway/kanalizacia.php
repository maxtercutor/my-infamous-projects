<?php

/*

Template Name: Септики

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

    <title>Септики</title>
    <meta content="width=device-width" name="viewport">
    <meta content="Установим септик за 2 дня. Обеспечим комфорт на 50 лет." name="description">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="WordPress 5.2.2" name="generator">
    <meta content="«StroyWay»" lang="ru" name="copyright">
    <link href="<?php echo get_template_directory_uri() . '/septic'; ?>/css/normalize.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri() . '/septic'; ?>/css/main.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,800|Roboto:300,400&display=swap&subset=cyrillic" rel="stylesheet">
    <link href="https://stroyway.com/wp-content/uploads/2019/09/favicon.png" rel="shortcut icon" type="image/x-icon">
</head>

<body>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
     ym(55274107, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
     });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/55274107https://mc.yandex.ru/watch/55274107
    " style="position:absolute; left:-9999px;" alt="" /></div></noscript>

    <script>

    var goalParams = {
        order_price: 1000.35,
        currency: "RUB"
    };
    </script>
    <!-- /Yandex.Metrika counter -->


    <header class="header container">
        <div class="header__block">
            <div class="logo header__logo">
                <a class="logo__img" href="https://stroyway.com/" target="_blank"><img alt="На главную StroyWay" class="logo-img" src="<?php echo get_template_directory_uri() . '/septic'; ?>/images/logo.svg"></a>
            </div>


            <div class="header__social social">
                <div class="social__vk vk">
                    <a tabindex="0" href="https://vk.com/stroyway_com" target="_blank"><img alt="Вконтакте Stroyway" src="<?php echo get_template_directory_uri() . '/septic'; ?>/images/vk.png"></a>
                </div>


                <div class="social__inst inst">
                    <a href="https://www.instagram.com/stroy_way/" target="_blank"><img alt="Instagram Stroyway" src="<?php echo get_template_directory_uri() . '/septic'; ?>/images/instagram.png"></a>
                </div>


                <div class="social__tel tel">
                    <a href="tel:84993468409"><img alt="Номер телефона:" class="tel__img" src="<?php echo get_template_directory_uri() . '/septic'; ?>/images/phone.png"> +7&nbsp;499&nbsp;346 84 09</a>
                </div>
            </div>


            <div class="header__time">
                с&nbsp;8:00 до&nbsp;20:00
            </div>
        </div>
    </header>


    <main class="main container" id="main">
        <div class="main__title">
            <h1>Установим септик за&nbsp;<span class="main__title_yellow">2&nbsp;дня.</span></h1>


            <h2>Обеспечим комфорт на&nbsp;<span class="main__title_yellow">50&nbsp;лет.</span></h2>
        </div>


        <div class="main__subtitle">
            <h2>Пройдите короткий тест.</h2>
        </div>


        <div class="main__btn">
            <button class="btn" id="open_btn"><span class="button-text">Пройти тест</span></button>
        </div>


        <div class="main__features">
            <div class="feature__text">
                Мы&nbsp;подберем септик.
            </div>


            <div class="feature__text">
                Рассчитаем стоимость.
            </div>
        </div>


        <div class="main__social social">
            <div class="social__vk vk">
                <a href="https://vk.com/stroyway_com" target="_blank"><img alt="Вконтакте" src="<?php echo get_template_directory_uri() . '/septic'; ?>/images/vk.png"></a>
            </div>


            <div class="social__inst inst">
                <a href="https://www.instagram.com/stroy_way/" target="_blank"><img alt="Инстаграм" src="<?php echo get_template_directory_uri() . '/septic'; ?>/images/instagram.png"></a>
            </div>
        </div>
    </main>


    <footer class="footer">
        <div class="container">
            <div class="footer__block">
                <div class="footer__copyright">
                    &copy;&nbsp;<span id="copyright">2019</span> &laquo;StroyWay&raquo;. Все права защищены.<br>
                    Сайт не&nbsp;является публичной офертой.
                </div>


                <div class="footer__private-policy">
                    <button id="open__pp">Политика конфиденциальности</button>
                </div>


                <div class="footer__made-with-love">
                    Сделано с&nbsp;любовью в&nbsp;StroyWay
                </div>
            </div>
        </div>
    </footer>


    <div class="quiz" id="quiz">
        <div class="close-button" id="close_button">
            <button><img alt="Закрыть Тест" src="<?php echo get_template_directory_uri() . '/septic'; ?>/images/close.svg"></button>
        </div>


        <div class="quiz__progress">
            <progress max="100" value="0"></progress>

            <div class="progress-value">
            </div>


            <div class="progress-bg">
                <div class="progress-bar" style="width: 0%;">
                </div>
            </div>
        </div>


        <div class="quiz-page">
            <div class="quiz-page__title">
                <h3>Выберите тип объекта.</h3>
            </div>


            <form class="quizForm" name="form">
                <div class="quiz__answers-block">
                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="0" id="answer_radio_10" name="answer_radio_1" type="radio" value="Загородный дом, дача"> <label for="answer_radio_10"><span class="answer__text">Загородный дом, дача</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="0" id="answer_radio_11" name="answer_radio_1" type="radio" value="Гостиница, дом отдыха, ресторан"> <label for="answer_radio_11"><span class="answer__text">Гостиница, дом отдыха, ресторан</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="0" id="answer_radio_12" name="answer_radio_1" type="radio" value="Канализация для поселка"> <label for="answer_radio_12"><span class="answer__text">Канализация для поселка</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="0" id="answer_radio_13" name="answer_radio_1" type="radio" value="Другое"> <label for="answer_radio_13"><span class="answer__text">Другое</span></label>
                    </div>
                </div>
            </form>


            <div class="quiz-page__btn">
                <button>Далее</button>
            </div>
        </div>


        <div class="quiz-page">
            <div class="quiz-page__title">
                <h3>Выберите количество проживающих</h3>
            </div>


            <form class="quizForm" name="form">
                <div class="quiz__answers-block">
                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="1300" id="answer_radio_20" name="answer_radio_2" type="radio" value="До 4 человек"> <label for="answer_radio_20"><span class="answer__text">До&nbsp;4&nbsp;человек</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="1200" id="answer_radio_21" name="answer_radio_2" type="radio" value="От 4 до 8 человек"> <label for="answer_radio_21"><span class="answer__text">От&nbsp;4&nbsp;до&nbsp;8&nbsp;человек</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="1300" id="answer_radio_22" name="answer_radio_2" type="radio" value="Более 8 человек"> <label for="answer_radio_22"><span class="answer__text">Более 8&nbsp;человек</span></label>
                    </div>
                </div>
            </form>


            <div class="quiz-page__btn">
                <button>Далее</button>
            </div>
        </div>


        <div class="quiz-page">
            <div class="quiz-page__title">
                <h3>Проживаете постоянно?</h3>
            </div>


            <form class="quizForm" name="form">
                <div class="quiz__answers-block">
                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="600" id="answer_radio_30" name="answer_radio_3" type="radio" value="Да"> <label for="answer_radio_30"><span class="answer__text">Да</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="400" id="answer_radio_31" name="answer_radio_3" type="radio" value="Нет"> <label for="answer_radio_31"><span class="answer__text">Нет</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="300" id="answer_radio_32" name="answer_radio_3" type="radio" value="Не определился"> <label for="answer_radio_32"><span class="answer__text">Не&nbsp;определился</span></label>
                    </div>
                </div>
            </form>


            <div class="quiz-page__btn">
                <button>Далее</button>
            </div>
        </div>


        <div class="quiz-page">
            <div class="quiz-page__title">
                <h3>Общее количество ванн в&nbsp;вашем доме от&nbsp;200 до&nbsp;350 литров</h3>
            </div>


            <form class="quizForm" name="form">
                <div class="quiz__answers-block">
                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="600" id="answer_radio_40" name="answer_radio_4" type="radio" value="Нету"> <label for="answer_radio_40"><span class="answer__text">Нету</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="600" id="answer_radio_41" name="answer_radio_4" type="radio" value="Одна"> <label for="answer_radio_41"><span class="answer__text">Одна</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="600" id="answer_radio_42" name="answer_radio_4" type="radio" value="Две"> <label for="answer_radio_42"><span class="answer__text">Две</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="0" id="answer_radio_43" name="answer_radio_4" type="radio" value="Три и более"> <label for="answer_radio_43"><span class="answer__text">Три и&nbsp;более</span></label>
                    </div>
                </div>
            </form>


            <div class="quiz-page__btn">
                <button>Далее</button>
            </div>
        </div>


        <div class="quiz-page">
            <div class="quiz-page__title">
                <h3>Общее количество стиральных или посудомоечных машин в&nbsp;доме:</h3>
            </div>


            <form class="quizForm" name="form">
                <div class="quiz__answers-block">
                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="600" id="answer_radio_50" name="answer_radio_5" type="radio" value="Нету"> <label for="answer_radio_50"><span class="answer__text">Нету</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="600" id="answer_radio_51" name="answer_radio_5" type="radio" value="Одна"> <label for="answer_radio_51"><span class="answer__text">Одна</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="600" id="answer_radio_52" name="answer_radio_5" type="radio" value="Две"> <label for="answer_radio_52"><span class="answer__text">Две</span></label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" data-price="0" id="answer_radio_53" name="answer_radio_5" type="radio" value="Три и более"> <label for="answer_radio_53"><span class="answer__text">Три и&nbsp;более</span></label>
                    </div>
                </div>
            </form>


            <div class="quiz-page__btn">
                <button>Далее</button>
            </div>
        </div>


        <form class="quizForm quiz-page final-quiz-page quiz-page__form" name="form">
            <div class="quiz-page__title">
                <h3>Тест успешно пройден!</h3>
            </div>


            <div class="quiz-page__subtitle">
                <h4>По&nbsp;вашим данным подходит 3&nbsp;модели септиков.<br>
                <span>Для окончательного подбора осталось уточнить детали.</span></h4>


                <h4>Укажите свои данные для связи, мы&nbsp;закрепим за&nbsp;вашим номером скидку&nbsp;10% и&nbsp;в&nbsp;ближайшее время свяжемся с&nbsp;вами.</h4>
            </div>
            <input name="DATA[TITLE]" type="hidden" value="Сайт Септики">

            <div class="quiz-answer quiz-answer__form">
                <label>Телефон<input id="quiz_phone" inputmode="tel" name="DATA[PHONE_WORK]" placeholder="+7 (900) 000 00 00" required="" type="tel"></label> <input id="quiz_info" name="DATA[QUESTIONS_&_ANSWERS]" type="hidden" value=""> <input id="price_data" name="DATA[OPPORTUNITY]" type="hidden" value=""> <input id="post_phone" name="post-phone" type="hidden" value=""> <input id="post_quiz" name="post-quiz" type="hidden" value=""> <input id="post_price" name="post-price" type="hidden" value="">
            </div>


            <div class="quiz__btn">
                <button class="btn quiz__next-button quiz__submit-btn" type="submit"><span class="button-text">Отправить</span></button>
            </div>
        </form>


        <div class="quiz-page quiz__thankyou quiz-page__title">
            <div class="thankyou-page__title quiz-page__title">
                <h3>Отлично! Мы&nbsp;подобрали для Вас лучшее предложение. Наш специалист свяжется с&nbsp;Вами в&nbsp;ближайшее время.</h3>
            </div>


            <div class="thankyou-page__closebtn">
                <button class="button" id="tomain_button"><span class="button-text">На&nbsp;главную</span></button>
            </div>
        </div>
    </div>


    <div class="private-policy" id="private-policy">
        <div class="close-button" id="close_ppbutton">
            <button><img alt="Закрыть Политику конфиденциальности" src="<?php echo get_template_directory_uri() . '/septic'; ?>/images/close.svg"></button>
        </div>


        <div class="private-policy__title">
            <h3>Политика конфиденциальности</h3>
        </div>


        <div class="private-policy__block">
            <p>Данное соглашение об&nbsp;обработке персональных данных разработано в&nbsp;соответствии с&nbsp;законодательством Российской Федерации.</p>


            <p>Все лица, заполнившие сведения, составляющие персональные данные на&nbsp;данном сайте, а&nbsp;также разместившие иную информацию обозначенными действиями подтверждают свое согласие на&nbsp;обработку персональных данных и&nbsp;их&nbsp;передачу оператору обработки персональных данных. Под персональными данными Гражданина понимается нижеуказанная информация: общая информация (ФИО и&nbsp;адрес электронной почты, телефон, город проживания, дата рождения, личная информация, фото и&nbsp;видео с&nbsp;участием Гражданина). Гражданин, принимая настоящее Соглашение, выражает свою заинтересованность и&nbsp;полное согласие, что обработка персональных данных может включать в&nbsp;себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.</p>


            <p>Гражданин гарантирует: информация, им&nbsp;предоставленная, является полной, точной и&nbsp;достоверной; при предоставлении информации не&nbsp;нарушается действующее законодательство Российской Федерации, законные права и&nbsp;интересы третьих лиц; вся предоставленная информация заполнена Гражданином в&nbsp;отношении себя лично.</p>
        </div>
    </div>


    <div class="overlay" id="overlay">
    </div>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js">
    </script>
    <script src="<?php echo get_template_directory_uri() . '/septic'; ?>/js/jquery.maskedinput.min.js">
    </script>
    <script defer src="<?php echo get_template_directory_uri() . '/septic'; ?>/js/main.min.js">
    </script>
    <script src="<?php echo get_template_directory_uri() . '/septic'; ?>/rest-api/rest.js">
    </script>
</body>
</html>