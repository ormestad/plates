<?php
require 'lib/global.php';
$email=FALSE;

if(isset($_POST['update'])) {
	// Edit user (only available for admins)
	if($USER->auth>2) {
		$email=filter_var($_POST['edit_email'],FILTER_VALIDATE_EMAIL);
		$update=$USER->editUser($email,array('user_auth' => $_POST['edit_auth']));
		if($update['error']) {
			// An error occured
			$ALERTS->setAlert($update['error']);
		} else {
			if($update['data']) {
				// User was updated successfully
				$ALERTS->setAlert('User information updated for: '.$email,'success');
			} else {
				// No data was changed
				$ALERTS->setAlert('Data not different, user not updated: '.$email,'warning');
			}
		}
	}
} elseif(isset($_POST['add'])) {
	// Adding new user
	$add=$USER->addUser($_POST['user_email'],$_POST['pwd1'],$_POST['pwd2']);
	if($add['error']) {
		// An error occured
		$ALERTS->setAlert($add['error']);
	} else {
		// User added successfully, log in user and go to users.php page to show login barcode
		$USER->login($_POST['user_email'],$_POST['pwd1']);
		header('Location:users.php');
	}
} elseif(isset($_POST['cancel'])) {
	header('Location:users.php');
}

if(isset($_GET['email'])) {
	$email=filter_var($_GET['email'],FILTER_VALIDATE_EMAIL);
} else {
	$email=filter_var($email,FILTER_VALIDATE_EMAIL);
}

$theform=new htmlForm('user_edit.php');

if($USER->auth>2) {
	// Logged in
	if($email) {
		// Edit user
		if($user_edit=$USER->getUser($email)) {
			$theform->addText('<strong>Update user information</strong>');
			$theform->addInput('Edit user',array('type' => 'email', 'name' => 'edit_email', 'value' => $user_edit['user_email'], 'readonly' => '', 'autocomplete' => 'off'));
			$theform->addSelect('Role','edit_auth',$CONFIG['uservalidation']['roles'],array($user_edit['user_auth']));
		}
		$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'update', 'value' => 'Update', 'class' => 'button'));
		$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'cancel', 'value' => 'Cancel', 'class' => 'secondary button'));
	}
} else {
	// Not authorised to edit
	// Add user
	$theform->addInput('Operator (use your SciLifeLab email address)',array('type' => 'email', 'name' => 'user_email', 'required' => '', 'autocomplete' => 'off'));
	$theform->addInput('Password',array('type' => 'password', 'name' => 'pwd1', 'required' => ''));
	$theform->addInput('Repeat password',array('type' => 'password', 'name' => 'pwd2', 'required' => ''));
	$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'add', 'value' => 'Submit', 'class' => 'button'));
}

$html=$theform->render();

// Render Page
//=================================================================================================
?>

<!doctype html>
<html class="no-js" lang="en" dir="ltr">

<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PlateJuggler</title>
	<link rel="stylesheet" href="css/foundation.css">
	<link rel="stylesheet" href="css/app.css">
	<link rel="stylesheet" href="css/icons/foundation-icons.css" />
</head>

<body>
<?php require '_menu.php'; ?>

<div class="row">
<br>
<div class="large-12 columns">
<?php echo $html; ?>
</div>
</div>

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>
<script src="js/vendor/foundation.js"></script>
<script src="js/app.js"></script>
</body>

</html>
