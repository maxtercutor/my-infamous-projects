<?php
$phone = $_POST['post-phone'];
$quiz = $_POST['post-quiz'];
$price = $_POST['post-price'];
$phone = htmlspecialchars($phone);
$quiz = htmlspecialchars($quiz);
$price = htmlspecialchars($price);
$phone = urldecode($phone);
$quiz = urldecode($quiz);
$price = urldecode($price);
$phone = trim($phone);
$quiz = trim($quiz);
$price = trim($price);

if (mail("info@stroyway.com", "Заявка с сайта Дом из Бруса", "Сумма заказа: ".$price."руб/м2 \nТелефон: ".$phone."\nВопросы-Ответы: ".$quiz, "From: example2@mail.ru \r\n"))
{    
	echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>