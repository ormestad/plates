<?php
require 'global.php';

$ALERTS=array();
$theform=new htmlForm('storage_edit.php');

if(isset($_POST['submit'])) {
	// Clean input
	foreach($_POST as $key => $value) {
		$$key=$DB->real_escape_string($value);
	}

	// Check user
	if($user=checkUser($user_email)) {
		if($storage_id=='new') {
			// Add new item
			$log=addLog('Adding new storage','add',0,$user['user_email']);
			$add=sql_query("INSERT INTO storage SET 
				storage_name='$storage_name', 
				storage_status='$storage_status', 
				storage_description='$storage_description', 
				storage_type='$storage_type', 
				storage_temp='$storage_temp', 
				storage_location='$storage_location', 
				log='$log'");
			
			if($add) {
				header('Location: storage.php');
			} else {
				$ALERTS[]=setAlerts("Could not add information to database");
			}
		} else {
			// Edit item
			if($storage_data=sql_fetch("SELECT * FROM storage WHERE storage_id=$storage_id")) {
				// Check which values are different from the saved version
				foreach($storage_data as $key => $value) {
					if($key!='log' && $$key!=$value) {
						$updates[]=$key."=".$$key;
					}
				}
				
				// Only update if the new data is different
				if(count($updates)) {
					// Add summary of updates in log message
					$log=addLog('Update storage information: '.implode(',',$updates),'update',0,$user['user_email'],$storage_data['log']);
					
					$update=sql_query("UPDATE storage SET 
						storage_name='$storage_name', 
						storage_status='$storage_status', 
						storage_description='$storage_description', 
						storage_type='$storage_type', 
						storage_temp='$storage_temp', 
						storage_location='$storage_location', 
						log='$log' 
						WHERE storage_id=$storage_id");
					
					if($update) {
						header('Location: storage.php');
					} else {
						$ALERTS[]=setAlerts("Could not update information for $storage_id");
					}
				} else {
					header('Location: storage.php');
				}
			} else {
				$ALERTS[]=setAlerts('Invalid storage ID');
			}
		}
	} else {
		$ALERTS[]=setAlerts('Invalid user ID');
	}
} elseif(isset($_POST['cancel'])) {
	header('Location: storage.php');
}

if(isset($_GET['id'])) {
	$position=parsePosition($_GET['id']);
	if($position['type']=='storage') {
		$storage_id=$position['storage_id'];
	}
}

if($storage_id) {
	if($storage_data=sql_fetch("SELECT * FROM storage WHERE storage_id=$storage_id")) {
		$submit='Save';
		$storage_id=$position['storage_id'];
	} else {
		$ALERTS[]=setAlerts('Could not fetch storage data');
		$storage_id=0;
	}
} else {
	$submit='Add';
	$storage_id='new';
}

$theform->addInput(FALSE,array('type' => 'hidden', 'name' => 'storage_id', 'value' => $storage_id));
$theform->addInput('Name',array('type' => 'text', 'name' => 'storage_name', 'value' => $storage_data['storage_name']));
$theform->addTextarea('Description',array('name' => 'storage_description'),$storage_data['storage_description']);
$theform->addSelect('Status','storage_status',array('enabled' => 'Enabled', 'service' => 'Service', 'disabled' => 'Disabled'), array($storage_data['storage_status']));
$theform->addSelect('Type','storage_type',array('fridge' => 'Fridge', 'freezer' => 'Freezer'), array($storage_data['storage_type']));
$theform->addInput('Temperature',array('type' => 'number', 'name' => 'storage_temp', 'value' => $storage_data['storage_temp']));
$theform->addInput('Location',array('type' => 'text', 'name' => 'storage_location', 'value' => $storage_data['storage_location']));
$theform->addInput('Operator (use your scilifelab email address)',array('type' => 'email', 'name' => 'user_email', 'value' => $user['user_email']));
$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'submit', 'value' => $submit, 'class' => 'button'));
$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'cancel', 'value' => 'Cancel', 'class' => 'secondary button'));


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

<div class="top-bar">
	<div class="top-bar-left">
		<ul class="dropdown menu" data-dropdown-menu>
			<li class="menu-text">PlateJuggler</li>
			<li><a href="index.php">Manage plates</a></li>
			<li><a href="storage.php">Manage storage</a></li>
		</ul>
	</div>
</div>

<?php echo formatAlerts($ALERTS); ?>

<div class="row">
	<br>
	<div class="large-12 columns">
	<?php echo $theform->render(); ?>
	</div>
</div>

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>
<script src="js/vendor/foundation.js"></script>
<script src="js/app.js"></script>
</body>

</html>
