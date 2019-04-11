<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

// if the user data that's being stored into SESSION is not empty, grab the token from that user's data
if (!empty($_SESSION['user_data'])){
    $token = $_SESSION['user_data']['token'];
} else {
    // gives you raw strings from the body of the request packet from the client
    $json_input = file_get_contents("php://input");
    $input = json_decode($json_input, true);
    if (empty($input['token'])){
        throw new Exception('Token is required');
    }
    $token = addslashes($input['token']);
}

$login_check = "SELECT * FROM `user_connections` WHERE `token` = '$token'";

$login_result = mysqli_query($conn, $login_check);

if (!$login_result){
    throw new Exception (mysqli_error($conn));
}

if (mysqli_num_rows($login_result) !== 1){
    throw new Exception('Not logged in');
}

$data = mysqli_fetch_assoc($login_result);
$output['success'] =  true;

if (!empty($_SESSION['user_data'])){
    $_SESSION['user_data'] = [
        'id' => $data['users_id'],
        'token' => $token
    ];
}

$json_output = json_encode($output);

print($json_output);

?>
