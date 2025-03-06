<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Dummy credentials for demonstration
    if ($username == "admin" && $password == "password") {
        $_SESSION['loggedin'] = true;
        header("Location: view_patient.php");
    } else {
        echo "Invalid credentials!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <title>Admin Login</title>

<style>
.f {background-color: lavender;
    display: inline-block;
    text-align: left;
    justify-content: space-around;
    margin: 20px ;
}
</style>

</head>
<body bgcolor="skyblue">

<header>
        <h1>AIMS HOSPITAL</h1>
        <nav>
            <ul><li><a href="index.html">Home</a></li>
                <li><a href="register.php">Register New Patient</a></li>
                <li><a href="schedule_appointment.php">Schedule Appointment</a></li>
                <li><a href="pathology_lab.php">Pathology Lab</a></li>
                <li><a href="admin_login.php">Admin Login</a></li>
                <li><a href="patient_login.php">Patient Login</a></li>
                <li><a href="contact_us.php">Contact Us</a></li>
            </ul>
        </nav>
    </header>

	<center>
<div class="f">    
	<center><h2>Admin Login<br></h2></center>
    <form method="POST">

        Username: <input type="text" name="username" required><br>
     <br>   Password: <input type="password" name="password" required><br>
     <br>   <center><input type="submit" value="Login"></center>
</div>    </form>
</body>
</html>