<?php
require 'global.php';

if(isset($_POST['submit'])) {
	if(isset($_POST['pwd'])) {
		// Login from existing user
		$USER->login($_POST['user_email'],$_POST['pwd']);
		
		// Check if an admin is updating another user
		if(isset($_POST['edit_auth'])) {
			// Check that user has admin privileges
			if($USER->auth>2) {
				$update=$USER->editUser($_POST['edit_email'],array('user_auth' => $_POST['edit_auth']));
				if($update['error']) {
					// An error occured
					$ALERTS->setAlert($update['error']);
				} else {
					if($update['data']) {
						// User was updated successfully
						$ALERTS->setAlert('User information updated for: '.$_POST['edit_email'],'success');
					} else {
						// No data was changed
						$ALERTS->setAlert('Data not different, user not updated: '.$_POST['edit_email'],'success');
					}
				}
			}
		}
	} else {
		// Adding new user
		$add=$USER->addUser($_POST['user_email'],$_POST['pwd1'],$_POST['pwd2']);
		if($add['error']) {
			// An error occured
			$ALERTS->setAlert($add['error']);
		} else {
			// User added successfully, log in user
			$USER->login($_POST['user_email'],$_POST['pwd1']);
			$ALERTS->setAlert('User added','success');
		}
	}
}

if($USER->auth>0) {
	// Logged in
	$card=new zurbCard();
	$card->divider($USER->data['user_email']);
	$card->section('Role: '.$CONFIG['uservalidation']['roles'][$USER->data['user_auth']]);
	$card->section('This is your login barcode: <br><br><img src="barcode.php?text='.$USER->data['user_hash'].'&size=40" style="width: 300px;">');
	$html=$card->render();

	$tools=new zurbCard();
	$tools->divider('Tools');
	$tools->section('<a href="batch_import.php?uid='.$USER->data['uid'].'" class="button"><i class="fi-arrow-up"></i> Batch import plates by scanning barcodes</a>');
	$html.=$tools->render();

	$users=$USER->listUsers();
	
	if(count($users)>0) {
		foreach($users as $user) {
			$data[]=array(
				'email'		=> '<a href="user_edit.php?email='.$USER->data['user_email'].'&edit='.$user['user_email'].'">'.$user['user_email'].'</a>', 
				'role'		=> $CONFIG['uservalidation']['roles'][$user['user_auth']]
			);
		}
	} else {
		$data=array();
	}
	
	$table=new htmlTable('List of all registered users, click to edit');
	$table->addData($data);
	$html.=$table->render();

} else {
	// Not logged in
	$theform=new htmlForm('user_edit.php');
	
	if(isset($_GET['email'])) {
		// Edit user
		if($email=filter_var($_GET['email'],FILTER_VALIDATE_EMAIL)) {
			if($user_edit=$USER->getUser($_GET['edit'])) {
				$theform->addText('<strong>Update user information</strong>');
				$theform->addInput('Edit user',array('type' => 'email', 'name' => 'edit_email', 'value' => $user_edit['user_email'], 'readonly' => '', 'autocomplete' => 'off'));
				$theform->addSelect('Role','edit_auth',$CONFIG['uservalidation']['roles'],array($user_edit['user_auth']));
				$theform->addText('<strong>Please enter password again to update</strong>');
				$button_text='Update';
			} else {
				$button_text='Login';
			}
			
			if($user=$USER->getUser($email)) {
				// Regular login
				$theform->addInput('Operator (use your SciLifeLab email address)',array('type' => 'email', 'name' => 'user_email', 'value' => $email, 'required' => '', 'autocomplete' => 'off'));
				$theform->addInput('Password',array('type' => 'password', 'name' => 'pwd', 'required' => ''));
			} else {
				// User does not exist
			}
			
			$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'submit', 'value' => $button_text, 'class' => 'button'));
		}
		
	} else {
		// Add user
		$theform->addInput('Operator (use your SciLifeLab email address)',array('type' => 'email', 'name' => 'user_email', 'required' => '', 'autocomplete' => 'off'));
		$theform->addInput('Password',array('type' => 'password', 'name' => 'pwd1', 'required' => ''));
		$theform->addInput('Repeat password',array('type' => 'password', 'name' => 'pwd2', 'required' => ''));
		$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'submit', 'value' => 'Next', 'class' => 'button'));
	}
	$html=$theform->render();
}

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
