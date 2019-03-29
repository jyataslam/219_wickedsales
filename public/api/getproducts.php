<?php

require_once('mysqlconnect.php');

$query = 'SELECT p.id, p.name, p.price,
        i.url AS `images`
        FROM `products` AS p JOIN `images` AS i ON p.`id` = i.`products_id`
        ORDER BY p.`id`';

$result = mysqli_query($conn, $query);

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