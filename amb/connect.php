<?php
// Replace the values below with your actual database connection details
$host = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database_name";

// Create a connection to the database
$conn = mysqli_connect($host, $username, $password, $database);

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve the form data
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Validate the form data
    if (empty($email) || empty($password)) {
        echo "Please fill in all the fields";
    } else {
        // Insert the form data into the database
        $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

        if (mysqli_query($conn, $sql)) {
            echo "Signup successful";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
}

// Close the database connection
mysqli_close($conn);
?>
