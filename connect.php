// Establish a connection to the MySQL database
$conn = mysqli_connect('localhost', 'username', 'password', 'database_name');

// Check the connection
if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

// Write a SQL query to retrieve data from a table
$sql = "SELECT * FROM my_table";

// Execute the query
$result = mysqli_query($conn, $sql);

// Check if any rows were returned
if (mysqli_num_rows($result) > 0) {
    // Loop through each row and output the data
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . "<br>";
    }
} else {
    echo "No results found";
}

// Close the database connection
mysqli_close($conn);
