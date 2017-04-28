<?php
require 'global.php';

$ALERTS=array();

if(isset($_POST['submit'])) {
	// Clean input
	foreach($_POST as $key => $value) {
		$$key=$DB->real_escape_string($value);
	}

	// Check user
	$USER->validateUser($_POST['user_hash']);
	if($USER->auth>0) {
		$user=$USER->data;
		if(isset($storage_id)) {
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
					
					$id=renderStorageID($storage_id);
					if($update) {
						header('Location: storage_view.php?id='.$id);
					} else {
						$ALERTS[]=setAlerts("Could not update information for $id");
					}
				} else {
					header('Location: storage_view.php?id='.renderStorageID($storage_id));
				}
			} else {
				$ALERTS[]=setAlerts('Invalid storage ID');
			}
		} else {
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
				$storage_id=$DB->insert_id;
				header('Location: storage_view.php?id='.renderStorageID($storage_id));
			} else {
				$ALERTS[]=setAlerts("Could not add information to database");
			}
		}
	} else {
		$ALERTS[]=setAlerts('Invalid user ID');
		$id=isset($storage_id) ? renderStorageID($storage_id) : FALSE;
	}
} elseif(isset($_POST['cancel'])) {
	if(isset($_POST['storage_id'])) {
		header('Location: storage_view.php?id='.renderStorageID($_POST['storage_id']));
	} else {
		header('Location: storage.php');
	}
}

$theform=new htmlForm('storage_edit.php');
$showform=FALSE;

if(isset($_GET['id']) || isset($id)) {
	// Edit storage unit
	$position=isset($_GET['id']) ? parsePosition($_GET['id']) : parsePosition($id);
	if($position['type']=='storage') {
		$storage_id=$position['storage_id'];
		$storage=getStorage($storage_id);
		if($storage['error']) {
			$ALERTS[]=setAlerts($storage['error']);
		} else {
			$showform=TRUE;
			$submit='Save';
			$theform->addInput(FALSE,array('type' => 'hidden', 'name' => 'storage_id', 'value' => $storage_id));
		}
	} else {
		$ALERTS[]=setAlerts('Invalid storage ID');
	}
} else {
	// Add new storage unit
	$showform=TRUE;
	$submit='Add';
}

if($showform) {
	$theform->addInput('Name',array('type' => 'text', 'name' => 'storage_name', 'value' => $storage['data']['storage_name']));
	$theform->addTextarea('Description',array('name' => 'storage_description'),$storage['data']['storage_description']);
	
	if(count($storage['racks'])>0) {
		// Storage can not be disabled if it contains racks
		$theform->addSelect('Status','storage_status',array('enabled' => 'Enabled', 'service' => 'Service'), array($storage['data']['storage_status']));
	} else {
		$theform->addSelect('Status','storage_status',array('enabled' => 'Enabled', 'service' => 'Service', 'disabled' => 'Disabled'), array($storage['data']['storage_status']));
	}
	
	$theform->addSelect('Type','storage_type',array('fridge' => 'Fridge', 'freezer' => 'Freezer'), array($storage['data']['storage_type']));
	$theform->addInput('Temperature',array('type' => 'number', 'name' => 'storage_temp', 'value' => $storage['data']['storage_temp']));
	$theform->addInput('Location',array('type' => 'text', 'name' => 'storage_location', 'value' => $storage['data']['storage_location']));
	$theform->addInput('Operator',array('type' => 'password', 'name' => 'user_hash', 'value' => '', 'autocomplete' => 'off'));
	$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'submit', 'value' => $submit, 'class' => 'button'));
}

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
<?php require '_menu.php'; ?>

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
