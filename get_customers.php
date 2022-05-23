<?php
    require_once('./connect.php');
    if($_SERVER['REQUEST_METHOD']!='GET'){
        http_response_code(405);
        die(json_encode(array('code'=>'405','message'=>'API này chỉ hỗ trợ phương thức GET')));
    }
    if(getProducts($conn)['code']!=0){
        die(json_encode(array('code'=>1,'message'=>getProducts($conn)['message'])));
    }
    die(json_encode(array('code'=>0,'data'=>getProducts($conn)['data'])));

?>
