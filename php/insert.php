<?php

// Get values from form
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['message'];

$to = "franciscovsk@gmail.com";
$subject = "Nuevo Contacto - Punta Green";
$message = " Nombre: " . $name . "\r\n Email: " . $email . "\r\n Teléfono: " . $phone . "\r\n Mensaje: " . $message;


$from = "Andrea de Punta Green";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 

if(@mail($to,$subject,$message,$headers))
{
  print "<script>document.location.href='http://demo.ftutorials.com/html5-contact-form/success.html';</script>";
  // Created by Future Tutorials
}else{
  echo "Error! Please try again.";
}

?>
