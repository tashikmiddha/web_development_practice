<?php
// view.php
include 'config.php';

$query = "SELECT * FROM items";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row['id'] . " - Name: " . $row['name'] . " - Category: " . $row['category'] . " - Quantity: " . $row['quantity'] . " - Price: $" . $row['price'] . "<br>";
    }
} else {
    echo "No items found";
}
?>
