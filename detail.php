<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="./style.css">
    <title>Admin</title>
</head>
<?php
    include './connect.php';
    if(!isset($_SESSION['admin']))
    {
        header('Location: login.php');
        die();
    }


?>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <h1 class="navbar-symbol"> <i class="fa fa-building mr-2"></i>PPS bank</h1>
            </a>
            <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="./userInfo.php">Chào,
                        admin
                    </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="logout.php">Đăng xuất</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <div></div>
</body>
</html>
