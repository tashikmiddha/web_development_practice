<?php
// config.php
$host = 'localhost';
$username = 'root';  // your MySQL username
$password = '12345678';      // your MySQL password (empty by default)
$dbname = 'inventory_system';

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
