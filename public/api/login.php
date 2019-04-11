<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

//store json data from the axios call and store it into variable that will be later decoded for php to be able to comprehend
$json_input = file_get_contents("php://input");

// 'true' converts all assoc arrays into objects as opposed to standard classes
$input = json_decode($json_input, true);

if (empty($input['email'])){
    throw new Exception('Email is a required value');
}

if (empty($input['password'])){
    throw new Exception('Password is a required value');
}

$email = $input['email'];
$password = $input['password'];

// sanitize by escaping all quote characters in the string
$email = addslashes($email);

$hashedPassword = sha1($password);

unset($input['password']);

$query = "SELECT `id`, `name` FROM `users` WHERE `email` = '$email' 
            AND `password` = '$hashedPassword'";

// $result will be the mysqli object 
$result = mysqli_query($conn, $query);

if (!$result){
    throw new Exception(mysqli_error($conn));
}

if (mysqli_num_rows($result) !== 1){
    throw new Exception('Invalid username or password');
}

$data = mysqli_fetch_assoc($result);

$token = $email . $data['id'] . microtime();
$token = sha1($token);

$connect_query = "INSERT INTO `user_connections` SET
                `token` = '$token',
                `users_id` = {$data['id']},
                `created` = NOW(),
                `ip_address` = '{$_SERVER['REMOTE_ADDR']}'";


$connect_result = mysqli_query($conn, $connect_query);

if (!$connect_result){
    throw new Exception(mysqli_error($conn));
}

if (mysqli_affected_rows($conn) !== 1){
    throw new Exception('Could not log you in: connection not saved');
}

$_SESSION['user_data'] = [
    'id' => $data['id'],
    'username' => $data['name'], 
    'token' => $token
];

$output['success'] = true;
$output['username'] = $data['name'];
$output['token'] = $token;

$json_output = json_encode($output);

print($json_output);

?>