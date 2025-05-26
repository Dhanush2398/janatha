<?php
//get data from form  

$name =$_POST['name'];
$number =$_POST['number'];
$pickup=$_POST['pickup'];
$date=$_POST['date'];
$time=$_POST['time'];
$email=$_POST['email'];
$suggestion=$_POST['suggestion'];
$days=$_POST['days'];
$type= $_POST['type'];





$to =" muralij@janathas.com";
$subject = "Cab Packages Enquiry from $type";
// $txt = $name.$number.$email.$pickup.$date.$time.$days.$suggestion;
$txt = "
  <b>Hi LV Mobility,</b>
  <p>$name has sent a booking request, please check details on</p>
    <table rules='all' style='border-color: #000; text-align:left; border:1px solid #000;' cellpadding='10'>
    <tr><th width='40%'>Name</th><td width='60%'>$name</td></tr>
    <tr><th width='40%'>Mobile Number</th><td width='60%'>$number</td></tr>
    <tr><th width='40%'>Pickup Location</th><td width='60%'>$pickup</td></tr>
    <tr><th width='40%'>Date</th><td width='60%'>$date</td></tr>
    <tr><th width='40%'>Time</th><td width='60%'>$time</td></tr>
    <tr><th width='40%'>Email</th><td width='60%'>$email</td></tr>
    <tr><th width='40%'>Message</th><td width='60%'>$suggestion</td></tr>
    <tr><th width='40%'>No Of Days</th><td width='60%'>$days</td></tr>
    <tr><th width='40%'>Vehicle Type</th><td width='60%'>$type</td></tr>
  </table>
";
$headers = "From:muralij@janathas.com" . "\r\n" .
"CC:muralij@janathas.com";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
mail($to,$subject,$txt,$headers);
header("Location:thankyou.html");
?>
