<? 
if(isset($_POST['phone'])&&$_POST['phone']!=""){ 
    
    $name = ($_POST['name']!= "") ? htmlspecialchars(trim($_POST['name'])) : "Имя не указано";
    $phone = htmlspecialchars(trim($_POST['phone']));
    $to = 'maxtercutor@gmail.com'; 
    $subject = 'Заявка с сайта'; 
    $message = '
             <html>
                <head>
                   <title>'.$subject.'</title>
                </head>
                <body>
                   <p>Имя: '.$name.'</p>
                   <p>Телефон: '.$phone.'</p>    
                   <br><br><br>
                   <center>
                   <img src="http://valery-glebik.site/vega/assets/images/logo-black.png" width="196" height="90" />
                   </center>                    
                 </body>
              </html>'; 
     $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
     $headers .= "From: Отправитель <email_from@yoursite.com>\r\n"; 
     mail($to, $subject, $message, $headers); 
     echo "Письмо отправлено"; 
}
else echo '<p>Заполните, пожалуйста, поля <a href="./index.html">формы</a></p>'; 
?>