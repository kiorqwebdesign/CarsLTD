<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

function json_reponse($data) {
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}

if(!filter_var($_GET['email_address'], FILTER_VALIDATE_EMAIL)) {
    # invalid email
    json_reponse([ "status" => "error", "msg" => "Please enter a valid email." ]);
}

$file_name = "email_list.txt";
if (!file_exists($file_name))
    json_reponse([ "status" => "error", "msg" => "Can't find email list." ]);

$file = file_put_contents("emails.txt", $_GET['email_address']."\n", FILE_APPEND);
if ($file == false) {
    json_reponse([ "status" => "error", "msg" => "Unkown Error Occured" ]);
}

json_reponse([ "status" => "success", "msg" => "Thank You, You be notified when Cars Ltd. website is active.", "file" => $file]);