<?php
$sensor1=$_GET['s1'];
$sensor2=$_GET['s2'];
$me=$_GET['me'];

if($me==$sensor1){
   $sens1=1;
} else { 
   $sens1=-1;
}


if($me==$sensor2){
   $sens2=1;
} else { 
   $sens2=-1;
}


$jstring = array( "sensor1" => $sens1,"sensor2" => $sens2);
echo json_encode($jstring);
?>

