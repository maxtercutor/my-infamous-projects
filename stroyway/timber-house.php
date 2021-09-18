<?php

/*

Template Name: Дома из бруса

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

    <title>Дома из бруса</title>
    <meta content="width=device-width" name="viewport">
    <meta content="В наших домах из бруса тепло и уютно круглый год!" name="description">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="WordPress 5.2.2" name="generator">
    <meta content="«StroyWay»" lang="ru" name="copyright">
    <link href="<?php echo get_template_directory_uri() . '/timber-house'; ?>/css/normalize.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri() . '/timber-house'; ?>/css/main.min.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri() . '/timber-house'; ?>/css/fonts.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:400,500&display=swap&subset=cyrillic" rel="stylesheet">
    <link href="https://stroyway.com/wp-content/uploads/2019/09/favicon.png" rel="shortcut icon" type="image/x-icon">
</head>

<body>
    <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
 m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 ym(54954226, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
 });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/54954226https://mc.yandex.ru/watch/54954226
" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<script>
  var goalParams = {
    order_price: 1000.35,
    currency: "RUB"
  };
</script>
<!-- /Yandex.Metrika counter -->
    <header class="main-header container">
        <div class="logo header__logo">
            <div class="logo__img">
                <a target="_blank" href="https://stroyway.com/">
                    <img width="65" alt="На главную StroyWay" class="logo-img" src="<?php echo get_template_directory_uri() . '/kupolnie-doma'; ?>/images/logo.svg">
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
                <a href="https://vk.com/stroyway_com">
                    <img alt="Наш Вконтакте" src="<?php echo get_template_directory_uri() . '/kupolnie-doma'; ?>/images/vk.png">
                </a>
            </li>


            <li class="social__inst inst">
                <a href="https://www.instagram.com/stroy_way/">
                    <img alt="Наш Инстаграм" src="<?php echo get_template_directory_uri() . '/kupolnie-doma'; ?>/images/instagram.png">
                </a>
            </li>


            <li class="social__tel tel">
                <a href="tel:84993468409">+7&nbsp;499&nbsp;346 84 09</a>
            </li>
        </ul>

        <h2 class="visually-hidden">Наше время работы</h2>
        <span class="header__time">
            с&nbsp;8:00 до&nbsp;20:00
        </span>
    </header>


    <main class="main" id="main">
        <div class="container">
            <div class="main__title">
                <h1>В&nbsp;наших домах из&nbsp;бруса тепло и&nbsp;уютно круглый год!</h1>
            </div>
            <div class="main__price">
                Строительство от 10 000 руб. м2
            </div>
            <div class="main__subtitle">
                <h2>Пройдите экспресс&nbsp;&mdash; тест, рассчитайте стоимость за&nbsp;м2. При заказе получите подарок на&nbsp;выбор.</h2>
            </div>


            <div class="main__features">
                <div class="features-block">
                    <div class="features-block__count">
                        500+
                    </div>


                    <div class="features-block__text">
                        Реализованных проектов
                    </div>
                </div>


                <div class="features-block">
                    <div class="features-block__count">
                        20<span>лет</span>
                    </div>


                    <div class="features-block__text">
                        Опыт работы в&nbsp;Москве и&nbsp;Московской области
                    </div>
                </div>
            </div>


            <div class="main__btn">
                <button class="btn" id="open_btn">
                    <span class="button-text">Узнать цену</span>
                </button>
                <div class="btn__text">Займёт не более 2 минут</div>
            </div>


            <div class="main__social social">
                <div class="social__vk vk">
                    <a target="_blank" href="https://vk.com/stroyway_com">Вконтакте<img alt="" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/vk.png"></a>
                </div>


                <div class="social__inst inst">
                    <a target="_blank" href="https://www.instagram.com/stroy_way/">Инстаграм<img alt="" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/instagram.png"></a>
                </div>
            </div>
        </div>
    </main>


    <footer class="main-footer container">
        <p class="footer__copyright" id="copyright">
        </p>


        <p class="footer__made-with-love">
            Сделано с&nbsp;любовью в&nbsp;StroyWay
        </p>


        <p class="footer__private-policy">
            <button id="open__pp">Политика конфиденциальности</button>
        </p>


        <p class="footer__text">
            Сайт не&nbsp;является публичной офертой.
        </p>
    </footer>


    <div class="quiz" id="quiz">
        <div class="close-button" id="close_button">
            <button><img alt="Закрыть Тест" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/close.svg"></button>
        </div>


        <div class="quiz__progress">
            <progress max="100" value="0"></progress>
            <div class="progress-value"></div>
            <div class="progress-bg"><div class="progress-bar" style="width: 0%;"></div></div>
        </div>


        <div class="quiz-page">
            <div class="quiz-page__title">
                <h3>Выберите интересующий тип строения</h3>
            </div>


            <form class="quizForm" name="form">
                <div class="quiz__answers-block">
                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_10" name="answer_radio_1" type="radio" value="1 этаж" data-price="0">
                        <label for="answer_radio_10" class="answer__image">
                            <img alt="Одноэтажный дом" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/1%20%D1%8D%D1%82%D0%B0%D0%B6.jpg">
                            <span class="answer__text">1&nbsp;этаж</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_11" name="answer_radio_1" type="radio" value="2 этажа" data-price="0">
                        <label for="answer_radio_11" class="answer__image">
                            <img alt="Двухэтажный дом" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/2%20%D1%8D%D1%82%D0%B0%D0%B6%D0%B0.jpg">
                            <span class="answer__text">2&nbsp;этажа</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_12" name="answer_radio_1" type="radio" value="3 этажа" data-price="0">
                        <label for="answer_radio_12" class="answer__image">
                            <img alt="Трехэтажный дом" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/3%20%D1%8D%D1%82%D0%B0%D0%B6%D0%B0.jpg">
                            <span class="answer__text">3&nbsp;этажа</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_13" name="answer_radio_1" type="radio" value="Не определился" data-price="0">
                        <label for="answer_radio_13" class="answer__image">
                            <img alt="Не определился" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/n_59837302135bb.jpg">
                            <span class="answer__text">Не&nbsp;определился</span>
                        </label>
                    </div>
                </div>
            </form>


            <div class="quiz-page__btn">
                <button>Далее</button>
            </div>
        </div>


        <div class="quiz-page">
            <div class="quiz-page__title">
                <h3>Выберите материал кровельного покрытия</h3>
            </div>


            <form class="quizForm" name="form">
                <div class="quiz__answers-block">
                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_20" name="answer_radio_2" type="radio" value="Мягкая кровля" data-price="1300">
                        <label for="answer_radio_20" class="answer__image">
                            <img alt="Мягкая кровля" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/%D0%BC%D1%8F%D0%B3%D0%BA%D0%B0%D1%8F%20%D0%BA%D1%80%D0%BE%D0%B2%D0%BB%D1%8F.jpg">
                            <span class="answer__text">Мягкая кровля</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_21" name="answer_radio_2" type="radio" value="Черепица" data-price="1200">
                        <label for="answer_radio_21" class="answer__image">
                            <img alt="Черепица" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/%D1%87%D0%B5%D1%80%D0%BF%D0%B8%D1%86%D0%B0.jpg">
                            <span class="answer__text">Черепица</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_22" name="answer_radio_2" type="radio" value="Металлочерепица" data-price="1300">
                        <label for="answer_radio_22" class="answer__image">
                                <img alt="Металлочерепица" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BE%20%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B8%D1%86%D0%B0.jpg">
                                <span class="answer__text">Металлочерепица</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_23" name="answer_radio_2" type="radio" value="Не определился" data-price="0">
                        <label for="answer_radio_23" class="answer__image">
                            <img alt="Не определился" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/n_59837302135bb.jpg">
                            <span class="answer__text">Не&nbsp;определился</span>
                        </label>
                    </div>
                </div>
            </form>


            <div class="quiz-page__btn">
                <button>Далее</button>
            </div>
        </div>


        <div class="quiz-page">
            <div class="quiz-page__title">
                <h3>Выберите материал внутренней отделки</h3>
            </div>


            <form class="quizForm" name="form">
                <div class="quiz__answers-block">
                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_30" name="answer_radio_3" type="radio" value="Вагонка" data-price="600">
                        <label for="answer_radio_30" class="answer__image">
                            <img alt="Вагонка" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D0%BE.jpg">
                            <span class="answer__text">Вагонка</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_31" name="answer_radio_3" type="radio" value="Гипсокартон" data-price="400">
                        <label for="answer_radio_31" class="answer__image">
                            <img alt="Гипсокартон" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/%D0%93%D0%B8%D0%BF%D1%81%D0%BE%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D0%BD.jpg">
                            <span class="answer__text">Гипсокартон</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_32" name="answer_radio_3" type="radio" value="Пластик" data-price="300">
                        <label for="answer_radio_32" class="answer__image">
                            <img alt="Пластик" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/%D0%9F%D0%BB%D0%B0%D1%81%D1%82%D0%B8%D0%BA.jpg">
                            <span class="answer__text">Пластик</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_33" name="answer_radio_3" type="radio" value="Не определился" data-price="0">
                        <label for="answer_radio_33" class="answer__image">
                            <img alt="Не определился" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/n_59837302135bb.jpg">
                            <span class="answer__text">Не&nbsp;определился</span>
                        </label>
                    </div>
                </div>
            </form>


            <div class="quiz-page__btn">
                <button>Далее</button>
            </div>
        </div>


        <div class="quiz-page">
            <div class="quiz-page__title">
                <h3>Выберите материал наружной отделки</h3>
            </div>


            <form class="quizForm" name="form">
                <div class="quiz__answers-block">
                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_40" name="answer_radio_4" type="radio" value="Вагонка" data-price="600">
                        <label for="answer_radio_40" class="answer__image">
                            <img alt="Вагонка" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/%D0%B2%D0%B0%D0%B3%D0%BE%D0%BD%D0%BA%D0%B0.jpg">
                            <span class="answer__text">Вагонка</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_41" name="answer_radio_4" type="radio" value="Блок-хаус" data-price="600">
                        <label for="answer_radio_41" class="answer__image">
                            <img alt="Блок-хаус" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/%D0%B1%D0%BB%D0%BE%D0%BA%20%D1%85%D0%B0%D1%83%D1%81.jpg">
                            <span class="answer__text">Блок-хаус</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_42" name="answer_radio_4" type="radio" value="Сайдинг" data-price="600">
                        <label for="answer_radio_42" class="answer__image">
                            <img alt="Сайдинг" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/%D0%A1%D0%B0%D0%B9%D0%B4%D0%B8%D0%BD%D0%B3.jpg">
                            <span class="answer__text">Сайдинг</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_43" name="answer_radio_4" type="radio" value="Не определился" data-price="0">
                        <label for="answer_radio_43" class="answer__image">
                            <img alt="Не определился" src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/images/n_59837302135bb.jpg">
                            <span class="answer__text">Не&nbsp;определился</span>
                        </label>
                    </div>
                </div>
            </form>


            <div class="quiz-page__btn">
                <button>Далее</button>
            </div>
        </div>


        <div class="quiz-page">
            <div class="quiz-page__title">
                <h3>Укажите планируемую площадь (м2)</h3>
            </div>


            <form class="quizForm" name="form">
                <div class="quiz__answers-block">
                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_50" name="answer_radio_5" type="radio" value="до 100" data-price="0">
                        <label for="answer_radio_50">
                            <span class="answer__text">до&nbsp;100</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_51" name="answer_radio_5" type="radio" value="от 100 до 200" data-price="0">
                        <label for="answer_radio_51">
                            <span class="answer__text">от&nbsp;100 до&nbsp;200</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_52" name="answer_radio_5" type="radio" value="Более 200" data-price="0">
                        <label for="answer_radio_52">
                            <span class="answer__text">Более 200</span>
                        </label>
                    </div>
                </div>
            </form>


            <div class="quiz-page__btn">
                <button>Далее</button>
            </div>
        </div>


        <div class="quiz-page">
            <div class="quiz-page__title">
                <h3>Выберите дизайн-проект в подарок</h3>
            </div>


            <form class="quizForm" name="form">
                <div class="quiz__answers-block">
                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_60" name="answer_radio_5" type="radio" value="Баня" data-price="0">
                        <label for="answer_radio_60">
                            <span class="answer__text">Баня</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_61" name="answer_radio_6" type="radio" value="Гараж" data-price="0">
                        <label for="answer_radio_61">
                            <span class="answer__text">Гараж</span>
                        </label>
                    </div>


                    <div class="quiz__answer">
                        <input class="quiz-answer__radio" id="answer_radio_62" name="answer_radio_6" type="radio" value="Беседка" data-price="0">
                        <label for="answer_radio_52">
                            <span class="answer__text">Беседка</span>
                        </label>
                    </div>
                </div>
            </form>


            <div class="quiz-page__btn">
                <button>Далее</button>
            </div>
        </div>


        <form class="quizForm quiz-page final-quiz-page quiz-page__form" name="form">
            <div class="quiz-page__title">
                <h3>Вы&nbsp;успешно прошли тест!</h3>
            </div>

            <div class="final-quiz-page__price">Укажите Ваш телефон, в SMS-сообщении мы вышлем ответ, подарок и закрепим за номером скидку.</div>

            <div class="quiz-page__subtitle">
                <h4>В ближайшее время наш специалист свяжется с вами для уточнения деталей.</h4>
            </div>
            <input name="DATA[TITLE]" type="hidden" value="Сайт Дома из бруса">

            <div class="quiz-answer quiz-answer__form">
                <label>Телефон<input inputmode="tel" name="DATA[PHONE_WORK]" placeholder="+7 (___) ___ - __ - __" required="" type="tel" id="quiz_phone"></label>
                <input id="quiz_info" name="DATA[QUESTIONS_&_ANSWERS]" type="hidden" value="">
                <input type="hidden" name="DATA[OPPORTUNITY]" id="price_data" value="">
                <input type="hidden" name="post-phone" id="post_phone" value="">
                <input type="hidden" name="post-quiz" id="post_quiz" value="">
                <input type="hidden" name="post-price" id="post_price" value="">
            </div>


            <div class="quiz__btn">
                <button class="btn quiz__next-button quiz__submit-btn" type="submit"><span class="button-text">Готово</span></button>
            </div>
        </form>


        <div class="quiz-page quiz__thankyou-page">
            <h3 class="thankyou-page__title quiz-page__title">Отлично! Мы&nbsp;подобрали для Вас лучшее предложение. Наш специалист свяжется с&nbsp;Вами в&nbsp;ближайшее время.</h3>

            <div class="thankyou-page__closebtn">
                <button class="button close-button" id="tomain_button"><span class="button-text">На&nbsp;главную</span></button>
            </div>
        </div>
    </div>


    <section class="private-policy" id="private-policy">
        <div class="close-button" id="close_ppbutton">
            <button>
                <img alt="Закрыть Политику конфиденциальности" src="<?php echo get_template_directory_uri() . '/kupolnie-doma'; ?>/images/close.svg">
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
    <script src="https://code.jquery.com/jquery-1.12.4.min.js">
    </script>
    <script src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/js/jquery.maskedinput.min.js">
    </script>
    <script defer src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/js/main.min.js">
    </script>
    <script src="<?php echo get_template_directory_uri() . '/timber-house'; ?>/rest-api/rest.js">
    </script>
	<div>
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript" >
			(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
			m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

			ym(55257631, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true,
				trackHash:true
			});
		</script>
		<noscript><div><img src="https://mc.yandex.ru/watch/55257631" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
		<!-- /Yandex.Metrika counter -->
	</div>
</body>
</html>