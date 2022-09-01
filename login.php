<?php
require 'lib/global.php';

if(isset($_POST['user_email']) && isset($_POST['password'])) {
	if($USER->login($_POST['user_email'],$_POST['password'])) {
		header('location:index.php');
	}
}

$theform=new htmlForm('login.php');
$theform->addInput('Username',array('type' => 'email', 'name' => 'user_email', 'required' => '', 'autocomplete' => 'off'));
$theform->addInput('Password',array('type' => 'password', 'name' => 'password', 'required' => ''));
$theform->addInput(FALSE,array('type' => 'submit', 'value' => 'Login', 'class' => 'button'));

// Render Page
//=================================================================================================
?>

<!doctype html>
<html class="no-js" lang="en" dir="ltr">

<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PlateJuggler login</title>
	<link rel="stylesheet" href="css/foundation.css">
	<link rel="stylesheet" href="css/app.css">
	<link rel="stylesheet" href="css/icons/foundation-icons.css" />
</head>

<body>
<?php require '_menu.php'; ?>

<div class="row">
<br>
<div class="large-12 columns">
<p>Log in using your username and password</p>
<?php echo $theform->render(); ?>
</div>
</div>

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>
<script src="js/vendor/foundation.js"></script>
<script src="js/app.js"></script>
</body>

</html>
