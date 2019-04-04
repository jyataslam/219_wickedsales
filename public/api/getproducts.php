<?php

//like putting script tags at top of html doc
require_once('mysqlconnect.php');
require_once('functions.php');

//function in parameter must be in string
set_exception_handler('handleError');

$query = 'SELECT p.id, p.name, p.price,
        i.url AS `images`
        FROM `products` AS p JOIN `images` AS i ON p.`id` = i.`products_id`
        ORDER BY p.`id`';

$result = mysqli_query($conn, $query);

if (!$result){
    throw new Exception('invalid query: '. mysqli_error($conn));
};

$images = [];
$data = [];
while($row = mysqli_fetch_assoc($result)){
    $currentID = $row['id'];
    if ( isset($data[$currentID]) ){
        $image = $row['images'];
        $data[$currentID]['images'][] = $image;
    } else {
        $image = $row['images'];
        unset($row['images']);
        $row['images'] = [];
        $row['images'][] = $image;
        $row['price'] = intval($row['price']);
        $data[$currentID] = $row;
    }
};

$pureData = [];
foreach($data as $value){
    $pureData[] = $value;
};

$output = [
    'success' => true,
    'products' => $pureData
];

$json_output = json_encode($output);

print($json_output);
?>