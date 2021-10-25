<?php
require 'lib/global.php';

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
$html=$table->render();

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
<a href="user_edit.php" class="button"><i class="fi-plus"></i> Register new user</a>
</div>
</div>

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>
<script src="js/vendor/foundation.js"></script>
<script src="js/app.js"></script>
</body>

</html>
