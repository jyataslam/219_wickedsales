<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

if()

$token = $_SESSION['user_data']['token'];

$delete_query = "DELETE FROM `user_connections` WHERE `token` = '$token'";

$result = mysqli_query($conn, $delete_query);

if(!$result){
    throw new Exception (mysqli_error($conn));
};

unset($_SESSION['user_data']);

$output = [
    'success' => true,
    'message' => 'User successfully logged out'
];

print(json_encode($output));
?>