<?php
    $host = 'localhost';
    $dbName = 'admin';
    $username = 'root';
    $password = '';
    $conn= mysqli_connect("localhost","root","");
    $dbCon = new PDO("mysql:host=".$host.";dbname=".$dbName, $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    $db = "Create database if not exists admin";
    if(!$conn -> query($db))
    {
        die("Cannot create database: ".$conn->error);
    }
    $conn= mysqli_connect("localhost","root","","admin");
    $table_logup="Create table if not exists logup(id int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,username varchar(255), email varchar(40), address varchar(50), phone varchar(10), birthday date, CMNDbefore varbinary(255), CMNDafter varbinary(255), confirm int(11),moneyremaining bigint)";
    $table_login="Create table if not exists login(id int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,username varchar(255),password varchar(255), email varchar(255), timeOutTryLog int)";
    $table_countLogin = "Create table if not exists login_tryLog(id int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,ipAddress varchar(30),tryLog bigint)";
    $table_historytransfer = "Create table if not exists historytransfer(id int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,username varchar(255), dayTransfer datetime, moneyTransfer bigint)";
    
    $adminSql = "select username from login where username ='admin'";
    $result = mysqli_query($conn,$adminSql);
    if(!($result->fetch_assoc())){
        $admin_login = "insert into login(username,password,email,timeOutTryLog) values('admin','123456','admin@gmail.com',0)";
        mysqli_query($conn,$admin_login);
    }
    if(!$conn -> query($table_login))
    {
        die("Cannot create table: ".$conn->error);
    }
    if(!$conn -> query($table_logup))
    {
        die("Cannot create table: ".$conn->error);
    }
    if(!$conn -> query($table_countLogin))
    {
        die("Cannot create table: ".$conn->error);
    }
    if(!$conn -> query($table_historytransfer))
    {
        die("Cannot create table: ".$conn->error);
    }
    function getProducts($conn){
        $sql = "select * from logup";
        $result = $conn->query($sql);
        $data = array();
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
               $data[] = $row;
            }
            return array('code'=>0,'data'=>$data);
            
        }
        return array('code'=>1,'message'=>"Dữ liệu rỗng");
    }
    
    function confirmUsers($conn, $input){
        $id = $input->id;
        $confirm = $input->confirm;
        $sql = "update logup set confirm = ? where id = ?";
        $stm = $conn->prepare($sql);
        $stm->bind_param('ss',$confirm,$id);
        if(!$stm->execute()){
            return array('code'=>1,'message'=>'Không thể cập nhật dữ liệu');
        }
        return array('code'=>0,'message'=>'Đã cập nhật dữ liệu thành công');
    }
    mysqli_set_charset($conn,"utf8");
    session_start();
?>