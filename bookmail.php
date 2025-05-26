<?php
//get data from form  

$name =$_POST['name'];
$dutytype =$_POST['dutytype'];
$number =$_POST['number'];
$pickup=$_POST['pickup'];
$date=$_POST['date'];
$time=$_POST['time'];
$email=$_POST['email'];
$suggestion=$_POST['suggestion'];
$vehicle=$_POST['vehicle'];
$drop = $_POST['drop'];
 if (empty($drop)) {
        $dropl="";
    } else {
       $dropl=$_POST['drop'];
    }




$to =" muralij@janathas.com";
$subject = "Cab Booking";
// $txt = $name.$number.$email.$vehicle.$pickup.$dropl.$dutytype.$date.$time.$suggestion;
$txt = "
  <b>Hi LV Mobility,</b>
  <p>$name has sent a booking request, please check details on</p>
  <table rules='all' style='border-color: #000; text-align:left; border:1px solid #000;' cellpadding='10'>
    <tr><th width='40%'>Name</th><td width='60%'>$name</td></tr>
    <tr><th width='40%'>Duty Type</th><td width='60%'>$dutytype</td></tr>
    <tr><th width='40%'>Mobile Number</th><td width='60%'>$number</td></tr>
    <tr><th width='40%'>Pickup Location</th><td width='60%'>$pickup</td></tr>
    <tr><th width='40%'>Date</th><td width='60%'>$date</td></tr>
    <tr><th width='40%'>Time</th><td width='60%'>$time</td></tr>
    <tr><th width='40%'>Email</th><td width='60%'>$email</td></tr>
    <tr><th width='40%'>Suggestion</th><td width='60%'>$suggestion</td></tr>
    <tr><th width='40%'>Vehicle Type</th><td width='60%'>$vehicle</td></tr>
    <tr><th width='40%'>Drop Location</th><td width='60%'>$drop</td></tr>
  </table>
";
$headers = "From:muralij@janathas.com" . "\r\n" .
"CC:muralij@janathas.com";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
// print($txt)
mail($to,$subject,$txt,$headers);

header("Location:thankyou.html");
?>
