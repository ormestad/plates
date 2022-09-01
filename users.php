<?php
require 'lib/global.php';

if($USER->auth>0) {
	// Logged in
	// Show login barcode
	$card=new zurbCard();
	$card->divider($USER->data['user_email']);
	$card->section('Role: '.$CONFIG['uservalidation']['roles'][$USER->data['user_auth']]);
	$card->section('This is your login barcode: <br><br><img src="barcode.php?text='.$USER->data['user_hash'].'&size=40" style="width: 300px;">');
	$html=$card->render();

	// Batch import of plates
	// Show only for managers and admins
	if($USER->auth>1) {
		$tools=new zurbCard();
		$tools->divider('Tools');
		$tools->section('<a href="batch_import.php?uid='.$USER->data['uid'].'" class="button"><i class="fi-arrow-up"></i> Batch import plates by scanning barcodes</a>');
		$tools->section('<a href="batch_import_file.php?uid='.$USER->data['uid'].'" class="button"><i class="fi-arrow-up"></i> Batch import plates by uploading CSV-file</a>');
		$html.=$tools->render();
	}

	// List of users
	// Only visible to admins
	if($USER->auth>2) {
		$user_list=$USER->listUsers();
		if(count($user_list)>0) {
			foreach($user_list as $user) {
				$data[]=array(
					'email'	=> '<a href="user_edit.php?email='.$user['user_email'].'">'.$user['user_email'].'</a>', 
					'role'	=> $CONFIG['uservalidation']['roles'][$user['user_auth']]
				);
			}
		} else {
			$data=array();
		}
		
		$table=new htmlTable('List of all registered users');
		$table->addData($data);
		$html.=$table->render();
	}
} else {
	// Not logged in, show register button
	$html="<p>Please register to get access</p><a href='user_edit.php' class='button'><i class='fi-plus'></i> Register new user</a>";
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
