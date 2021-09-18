<?php

$domain = $_POST['domain'];
$name = (($_POST['name'] === '') ? ('не указано') : ($_POST['name']));
$phone = $_POST['phone'];
$quiz = $_POST['quiz'];

$domain = htmlspecialchars($domain);
$phone = htmlspecialchars($phone);
$name = htmlspecialchars($name);
$quiz = htmlspecialchars($quiz);

$domain = urldecode($domain);
$phone = urldecode($phone);
$name = urldecode($name);
$quiz = urldecode($quiz);

$domain = trim($domain);
$phone = trim($phone);
$name = trim($name);
$quiz = trim($quiz);


$email = array('', '');
$to = implode(",", $email);
$subject = 'Заявка с сайта Своток';
$from = 'https://svotok.ru';

mail($to, $subject, "Направление: ".$domain."\nИмя: ".$name."\nТелефон".$phone."\nРезультат теста: ".$quiz."\nС сайта: ".$from);

?>