<?php
    /*ПОМЕЩАЕМ ДАННЫЕ ИЗ ПОЛЕЙ В ПЕРЕМЕННЫЕ*/
    $callback_name = $_POST["callback-name"];
    $callback_phone = $_POST["callback-phone"];


    /*ЗДЕСЬ ПРОВЕРЯЕМ ЕСЛИ ХОТЯ БЫ ОДНО ИЗ ПОЛЕЙ НЕ ЗАПОЛНЕНО МЫ ВОЗВРАЩАЕМ СООБЩЕНИЕ*/
    if($callback_name=="" or $callback_phone==""){
        echo "Заполните все поля";
    }

    else{
        /*ЕСЛИ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ НАЧИНАЕМ СОБИРАТЬ ДАННЫЕ ДЛЯ ОТПРАВКИ*/
        $to = "artemov46@yandex.ru"; /* Адрес, куда отправляем письма*/
        $subject = "Запрос звонка с сайта Antfarm"; /*Тема письма*/
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <test@mail.ru>\r\n";/*ОТ КОГО*/

        /*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
        $message .= "Имя пользователя: ".$callback_name."\n";

        $message .= "Телефон: ".$callback_phone."\n";


        /*ДЛЯ ОТЛАДКИ ВЫ МОЖЕТЕ ПРОВЕРИТЬ ПРАВИЛЬНО ЛИ ЗАПИСАЛИCM ДАННЫЕ ИЗ ПОЛЕЙ*/

        $callback_send = mail($to, $subject, $message, $headers);

        /*ЕСЛИ ПИСЬМО ОТПРАВЛЕНО УСПЕШНО ВЫВОДИМ СООБЩЕНИЕ*/
        if ($callback_send == "true")
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
