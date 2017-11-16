<?php

$country = $_GET['country'];

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");

$results = $stmt->fetchALL(PDO::FETCH_ASSOC);

$all_stmt = $conn->query("SELECT * FROM countries");

$all_results = $all_stmt->fetchALL(PDO::FETCH_ASSOC);

if ($country){
    echo '<ul>';
    foreach ($results as $row) {
        echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
    echo '</ul>';
} elseif("all=true"){
    echo '<ul>';
    foreach ($all_results as $all_row) {
        echo '<li>' . $all_row['name'] . ' is ruled by ' . $all_row['head_of_state'] . '</li>';
    }
}
