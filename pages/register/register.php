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
$sex = $_POST['sex'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password_hash'];

// Insert the data into the database
$sql = "INSERT INTO user (sex, username, email, password_hash) VALUES ('$sex', '$username', '$email', '$password')";
if (mysqli_query($conn, $sql)) {
    echo "Registration successful";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// echo $sex;

// Close the connection
mysqli_close($conn);
?>
