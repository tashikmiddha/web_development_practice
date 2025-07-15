<?php
// update.php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $category = $_POST['category'];
    $quantity = $_POST['quantity'];
    $price = $_POST['price'];

    $query = "UPDATE items SET name='$name', category='$category', quantity=$quantity, price=$price WHERE id=$id";

    if ($conn->query($query) === TRUE) {
        echo "Item updated successfully";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
