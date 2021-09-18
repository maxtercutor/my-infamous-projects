<?php 

if(isset($_POST)){ 
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $to = 'maxtercutor@mail.ru'; 
    $subject = 'Заявка с сайта: покупаем-макулатуру.рф'; 
    $message = '
             <html>
                <head>
                   <title>'.$subject.'</title>
                </head>
                <body>
                   <p>Имя: '.$name.'</p>
                   <p>Телефон: '.$phone.'</p>   
                 </body>
              </html>'; 
     $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
     $headers .= "From: Отправитель <покупаем-макулатуру.рф>\r\n"; 
     mail($to, $subject, $message, $headers); 
     echo "Письмо отправлено"; 
}
else echo '<p>Заполните, пожалуйста, поля <a href="./index.html">формы</a></p>'; 
?>