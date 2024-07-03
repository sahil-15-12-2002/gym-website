<?php
if(isset($_POST["submit"]))
{
    $conn = mysqli_connect("localhost", "root", "rohit7902", "gym");
    if(!$conn)
    {
        die("Connection failed ".mysqli_connect_error());
    }
    else{
        $email = $_POST["email"];
        $password = $_POST["password"];
        $sql = "INSERT INTO login_info VALUES('', '$email', '$password')";
        mysqli_query($conn, $sql);
        echo "<script>alert('Data inserted!');</script>";
    }
}
echo "HEllo";
?>