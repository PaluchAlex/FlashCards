<?php
// Connect to the database
$servername = "localhost";
$username = "";
$password = "";
$dbname = "flashcards";
// $conn = mysqli_connect($servername, $username, $password, $database);
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for errors
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the form data
$front = $_POST['front'];
$back = $_POST['back'];

// Insert the data into the database
$sql = "INSERT INTO card (front, back) VALUES ('$front', '$back')";
if (mysqli_query($conn, $sql)) {
    echo "Card added!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the connection
mysqli_close($conn);
?>
