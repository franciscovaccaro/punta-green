<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['Nombre','Email'])->areRequired()->maxLength(50);
$validator->fields(['Telefono'])->areRequired()->maxLength(20);
$validator->field('Email')->isEmail();
$validator->field('Llegada');
$validator->field('Salida');
$validator->field('Huespedes');
$validator->field('Mensaje')->maxLength(600);




$pp->sendEmailTo('info@puntagreen.net'); // ← Your email here

echo $pp->process($_POST);