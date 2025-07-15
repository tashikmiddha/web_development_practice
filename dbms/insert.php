<?php
// insert.php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $category = $_POST['category'];
    $quantity = $_POST['quantity'];
    $price = $_POST['price'];

    $query = "INSERT INTO items (name, category, quantity, price) VALUES ('$name', '$category', $quantity, $price)";
    
    if ($conn->query($query) === TRUE) {
        echo "New item added successfully";
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}
?>

