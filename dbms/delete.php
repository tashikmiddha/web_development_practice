<?php
// delete.php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];

    $query = "DELETE FROM items WHERE id=$id";

    if ($conn->query($query) === TRUE) {
        echo "Item deleted successfully";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

