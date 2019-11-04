<?php
    /*ПОМЕЩАЕМ ДАННЫЕ ИЗ ПОЛЕЙ В ПЕРЕМЕННЫЕ*/
    $order_farm = $_POST["order-farm"];
    $order_name = $_POST["order-field-name"];
    $order_email = $_POST["order-field-email"];
    $order_phone = $_POST["order-field-phone"];
    $order_msg = $_POST["order-field-msg"];

    /*ЗДЕСЬ ПРОВЕРЯЕМ ЕСЛИ ХОТЯ БЫ ОДНО ИЗ ПОЛЕЙ НЕ ЗАПОЛНЕНО МЫ ВОЗВРАЩАЕМ СООБЩЕНИЕ*/
    // if($order_name=="" or $order_email=="" or $order_phone=="" or $order_text_comment==""){
    //     echo "Заполните все поля";
    // }

    // else{
        /*ЕСЛИ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ НАЧИНАЕМ СОБИРАТЬ ДАННЫЕ ДЛЯ ОТПРАВКИ*/
        $to = "artemov46@yandex.ru"; /* Адрес, куда отправляем письма*/
        $subject = "Письмо с формы заказа Antfarm"; /*Тема письма*/
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <test@mail.ru>\r\n";/*ОТ КОГО*/

        /*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
        $message .= "Ферма: ".$order_farm."\n";
        $message .= "Имя пользователя: ".$order_name."\n";
        $message .= "Почта: ".$order_email."\n";
        $message .= "Телефон: ".$order_phone."\n";
        $message .= "Сообщение: ".$order_msg."\n";

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
    // }

?>
