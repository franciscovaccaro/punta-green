<?php 
if (isset($_POST['submit'])) {
// Initialize error array.
  $errors = array();
  // Check for a proper Name
  if (!empty($_POST['name'])) {
  $firstname = $_POST['name'];
  $pattern = "/^[a-zA-Z ]*$/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$name)){ $name = $_POST['name'];}
  else{ $errors[] = 'Tu nombre solo puede contener letras may�sculas, min�sculas y espacios.';}
  } else {$errors[] = 'Te olvidaste de ingresar tu nombre.';}
  
  // Check for a proper Email
  if (!empty($_POST['email'])) {
  $email = $_POST['email'];
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){ $email = $_POST['email'];}
  else{ $errors[] = 'Ingres� una direcci�n email v�lida.';}
  } else {$errors[] = 'Te olvidaste de tu email.';}
  
  //Check for a valid phone number
  if (!empty($_POST['phone'])) {
  $phone = $_POST['phone'];
  $pattern = "/^[0-9\_]{7,20}/";
  if (preg_match($pattern,$phone)){ $phone = $_POST['phone'];}
  else{ $errors[] = 'Tu tel�fono solo puede contener n�meros.';}
  } else {$errors[] = 'Te olvidaste de ingresar tu tel�fono.';}

  //Check for a valid message
  if (!empty($_POST['message'])) {
    $message = $_POST['message'];
    if (preg_match($message)){ 
      $message = $_POST['message'];
    } else { 
      $errors[] = 'Ingres� tu consulta por favor.';
    }
  }

  //End of validation

  // Send email
  if (isset($_POST['submit'])) {
    if (empty($errors)) { 
    $from = "Punta Green Web"; //Site name
    // Change this to your email address you want to form sent to
    $to = "franciscovsk@gmail.com"; 
    $subject = "Punta Green Web - " . $name . " te envi� un mensaje!";
    
    $message = "Nombre: " . $name . "Email: " . $email . "Tel�fono: " . $phone . "Mensaje: " . $message ."";
    mail($to,$subject,$message,$from);
    }
  }

  //Print Errors
  if (isset($_POST['submit'])) {
    // Print any error messages. 
    if (!empty($errors)) { 
      echo '<hr /><h3>Hubo un error al enviar el formulario:</h3><ul>'; 
      // Print each error. 
      foreach ($errors as $msg) { echo '<li>'. $msg . '</li>';}
        echo '</ul><h3>Tu consulta no fue enviada porque el formulario tiene errores.</h3><hr />';
        } else { 
          echo "<script>$('#thankyouModal').modal('show')</script>";
        }
  }
}
  //End of errors array
?>

<div class="modal fade" id="thankyouModal" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <p>Gracias por tu consulta!</p>                     
            </div>    
        </div>
    </div>
</div>