<?php

/*

Template Name: Главная

*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta id="myViewport" name="viewport" content="width=device-width">
    <script>
        if(screen.width <= 600) {
            var mvp = document.getElementById('myViewport');
            mvp.setAttribute('content','width=410');
        };
        if(screen.width >= 601) {
            var mvp = document.getElementById('myViewport');
            mvp.setAttribute('content','width=1200, initial-scale=0.50, maximum-scale=0.50, minimum-scale=0.50, user-scalable=no');
        };
        
        window.onorientationchange = function () {
            var orientation = window.orientation;
            switch (orientation) {
                case 0:
                case 90:
                case -90:
                    window.location.reload();
                    break;
            }
        };
        
    </script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>StroyWay</title>
    <?php wp_head();?>
    <script type="text/javascript">
        !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?162",t.onload=function(){VK.Retargeting.Init("VK-RTRG-398064-h8rnj"),VK.Retargeting.Hit()},document.head.appendChild(t)}();</script><noscript><img src="https://vk.com/rtrg?p=VK-RTRG-398064-h8rnjhttps://vk.com/rtrg?p=VK-RTRG-398064-h8rnj(49 B)https://vk.com/rtrg?p=VK-RTRG-398064-h8rnjhttps://vk.com/rtrg?p=VK-RTRG-398064-h8rnj" style="position:fixed; left:-999px;" alt=""/></noscript>
	<script type="text/javascript" src="https://vk.com/js/api/openapi.js?162"></script>	
    <link rel="stylesheet" href="https://stroyway.com/wp-content/themes/stroyway-theme/main.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap&subset=cyrillic" rel="stylesheet">
</head>
<body>
    <section class="head">
        <header class="header container">
            <div class="logo-part">
                <img src="https://stroyway.com/wp-content/uploads/2019/08/STROYWAY-logo-mini-01-1.png" alt="StroyWay">
            </div>
            <div class="menu-part">
                <ul class="menu">
                    <li class="menu-item"><a href="">О сервисе</a></li>
                    <li class="menu-item"><a href="">Области строительства</a></li>
                    <li class="menu-item"><a href="">Акции</a></li>
                </ul>
            </div>
            <div class="socials-part">
                <a href="https://vk.com/stroyway_com" class="social vk"></a>
                <a href="https://www.instagram.com/stroy_way/" class="social inst"></a>
            </div>
            <div class="contacts-part">
                <a href="" class="phone">+7 499 346 84 09</a>
                <div class="time">с 8:00 до 20:00</div>
            </div>
        </header>
        <div class="main container">
            <div class="title">Любая строительная услуга за 5 кликов</div>
            <div class="subtitle">При заказе строительства дома на выбор проект гаража, беседки или бани в подарок</div>
            <a href="#areas" class="button">Выбрать объект</a>
        </div>
        <div class="flying">
            <div class="part">
                <div class="num">1</div>
                <div class="title">шаг</div>
                <div class="txt">выберите область строительства</div>
            </div>
            <div class="part">
                <div class="num">2</div>
                <div class="title">шаг</div>
                <div class="txt">ответьте на вопросы</div>
            </div>
            <div class="part">
                <div class="num">3</div>
                <div class="title">шаг</div>
                <div class="txt">получите консультацию специалиста</div>
            </div>
            <div class="part">
                <div class="num">4</div>
                <div class="title">шаг</div>
                <div class="txt">закажите строительство</div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="container">
            <?php the_post(); the_content(); ?>
        </div>
    </section>
    <section class="areas" id="areas">
        <div class="container">
            <div class="title">Выберите область строительства</div>
            <div class="area-blocks">
                <?php 
                $query = new WP_Query(array(
                    'post_type' => 'post',
                ));
                if ($query->have_posts()): 
                while ($query->have_posts()): $query->the_post();
                 ?>

                <a href="<?php the_field('link'); ?>" class="area-block">
                    <?php the_post_thumbnail(); ?>
                    <div class="area-block__subscr"><?php the_title(); ?></div>
                </a>

                <?php
                 endwhile; wp_reset_query();
                 endif;
                 ?>
                

            </div>
            <!-- <button class="more">Показать все</button>!--> 
        </div>
    </section>
    <section class="about">
        <div class="container">
            <div class="left">
                <img src="https://stroyway.com/wp-content/uploads/2019/08/Фото.png" alt="" class="avatar">
                <div class="name">Василий Голубков</div>
                <div class="job">основатель компании</div>
            </div>
            <div class="right">
                <div class="about-title">Что такое Stroyway?</div>
                <div class="text">
                   <p><b>Stroyway</b> — это новая интеллектуальная платформа на рынке строительной индустрии. </p> 
                   <p>Единый агрегатор 100 видов строительных работ в одном приложении — это экономия времени и денег. </p>
                   <p>Мы представляем новый подход к созданию и улучшению жилищных условий, коммерческих и технических сооружений. </p>
                   <p> <b>Что нового и какие удобства</b></p>
                   <p>Строительный рынок охватывает все население не только России, но и мира. Весьма сложные технологии и правовые тонкости строительства не всегда позволяют простому обывателю выбрать подходящую бригаду. А подрядчикам то и дело не удается отличить недобросовестных заказчиков, со всеми вытекающими, от платежеспособных клиентов.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="feedbacks">
        <div class="container">
            <div class="title">Отзывы наших заказчиков</div>
            <div class="slider">

                <div class="slide">
                    <div class="slide-title">Прозрачная документация</div>
                    <div class="slide-content">При размещении заказа на строительство каркасного дома чётко и оперативно получил смету, был заключён договор и т.д.............</div>
                    <div class="author">
                        <div class="avatar"></div>
                        <div class="author-data">
                            <div class="name">Иван Иванов</div>
                            <div class="subscr">Vkontakte</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="container">
            <div class="logo-part">
                <img src="https://stroyway.com/wp-content/uploads/2019/08/STROYWAY-logo-mini-01-1.png" alt="StroyWay">
            </div>
            <div class="menu-part">
                <ul class="menu">
                    <li class="menu-item"><a href="">О сервисе</a></li>
                    <li class="menu-item"><a href="">Области строительства</a></li>
                    <li class="menu-item"><a href="">Акции</a></li>
                </ul>
            </div>
            <div class="contacts-part">
                <a href="" class="phone">+7 499 346 84 09</a>
                <div class="time">с 8:00 до 20:00</div>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
	<div>
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript" >
			(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
			m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

			ym(55174333, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true,
				trackHash:true
			});
		</script>
		<noscript><div><img src="https://mc.yandex.ru/watch/55174333" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
		<!-- /Yandex.Metrika counter -->
	</div>
	<script>
    (function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
    })(window,document,'https://cdn.bitrix24.ru/b10804768/crm/tag/call.tracker.js');
	</script>
	<div>
		<!-- VK Widget -->
		<div id="vk_groups" style="position: fixed; bottom: 0px; right: 0px;"></div>
		<script type="text/javascript">
			VK.Widgets.Group("vk_groups", {mode: 3, wide: 1, height: "400"}, 41857665);
		</script>
	</div>
	<script>
		const vkGroups = document.querySelector('#vk_groups');
		
		window.onscroll = () => {
			if(vkGroups.style.opacity !== '1') {
				vkGroups.style.opacity = '1';
				setTimeout(() => {
					vkGroups.style.opacity = '0';
				}, 20000);
			}
		}
	</script>
</body>
</html>

