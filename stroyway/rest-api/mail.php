<?php
$site_name = $_POST['mail-site-name'];
$phone = $_POST['mail-phone'];
$name = $_POST['mail-name'];
$quiz = $_POST['mail-quiz'];
$price = $_POST['mail-price'];
$site_name = htmlspecialchars($site_name);
$phone = htmlspecialchars($phone);
$name = htmlspecialchars($name);
$quiz = htmlspecialchars($quiz);
$price = htmlspecialchars($price);
$site_name = urldecode($site_name);
$phone = urldecode($phone);
$name = urldecode($name);
$quiz = urldecode($quiz);
$price = urldecode($price);
$site_name = trim($site_name);
$phone = trim($phone);
$name = trim($name);
$quiz = trim($quiz);
$price = trim($price);

if (mail("info@stroyway.com", "Заявка с сайта ".$site_name, "Сумма заказа: ".$price."руб/м2 \Имя: ".$name." \nТелефон: ".$phone."\nВопросы-Ответы: ".$quiz, "From: example2@mail.ru \r\n"))
{    
	echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>