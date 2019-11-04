<?php
    /*ПОМЕЩАЕМ ДАННЫЕ ИЗ ПОЛЕЙ В ПЕРЕМЕННЫЕ*/
    $question_name = $_POST["question-field-name"];
    $question_email = $_POST["question-field-email"];
    $question_phone = $_POST["question-field-phone"];
    $question_text_comment = $_POST["question-field-msg"];

    /*ЗДЕСЬ ПРОВЕРЯЕМ ЕСЛИ ХОТЯ БЫ ОДНО ИЗ ПОЛЕЙ НЕ ЗАПОЛНЕНО МЫ ВОЗВРАЩАЕМ СООБЩЕНИЕ*/
    if($question_name=="" or $question_email=="" or $question_phone=="" or $question_text_comment==""){
        echo "Заполните все поля";
    }

    else{
        /*ЕСЛИ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ НАЧИНАЕМ СОБИРАТЬ ДАННЫЕ ДЛЯ ОТПРАВКИ*/
        $to = "artemov46@yandex.ru"; /* Адрес, куда отправляем письма*/
        $subject = "Письмо с формы задать вопрос Antfarm"; /*Тема письма*/
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <test@mail.ru>\r\n";/*ОТ КОГО*/

        /*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
        $message .= "Имя пользователя: ".$question_name."\n";
        $message .= "Почта: ".$question_email."\n";
        $message .= "Телефон: ".$question_phone."\n";
        $message .= "Сообщение: ".$question_text_comment."\n";

        /*ДЛЯ ОТЛАДКИ ВЫ МОЖЕТЕ ПРОВЕРИТЬ ПРАВИЛЬНО ЛИ ЗАПИСАЛИCM ДАННЫЕ ИЗ ПОЛЕЙ*/

        $send = mail($to, $subject, $message, $headers);

        /*ЕСЛИ ПИСЬМО ОТПРАВЛЕНО УСПЕШНО ВЫВОДИМ СООБЩЕНИЕ*/
        if ($send == "true")
        {
            echo "Ваше сообщение отправлено. Мы ответим вам в ближайшее время.\r\n";
        }
        /*ЕСЛИ ПИСЬМО НЕ УДАЛОСЬ ОТПРАВИТЬ ВЫВОДИМ СООБЩЕНИЕ ОБ ОШИБКЕ*/
        else
        {
            echo "Не удалось отправить, попробуйте снова!";
        }
    }

?>