<?php
//$sensor=$_GET['snum'];
$sens1 = rand(10,99 );
$sens2 = rand(10,99 );

$jstring = array( "sensor1" => $sens1,"sensor2" => $sens2);
echo json_encode($jstring);
?>

