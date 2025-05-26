<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$number = $_POST['phone'];

$to ="info@lvmobility.in";
$subject = "New contact from $name";
// $txt = "Name = ". $name ."\r\nMobileNumber = " . $number .  "\r\nEmail = " . $email .  "\r\nMessage =" . $message ;

$txt = "
  <b>Hi LV Mobility,</b>
  <p>$name has sent a booking request, please check details on</p>
    <table rules='all' style='border-color: #000; text-align:left; border:1px solid #000;' cellpadding='10'>
    <tr><th width='40%'>Name</th><td width='60%'>$name</td></tr>
    <tr><th width='40%'>Number</th><td width='60%'>$number</td></tr>
    <tr><th width='40%'>Email</th><td width='60%'>$email</td></tr>
    <tr><th width='40%'>Message</th><td width='60%'>$message</td></tr>
  </table>
";
$headers = "From: $name <$email>" . "\r\n" .
"CC:muralij@janathas.com";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>
