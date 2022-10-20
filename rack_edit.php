<?php
require 'lib/global.php';

if(isset($_POST['submit'])) {
	// Clean input
	foreach($_POST as $key => $value) {
		$$key=$DB->real_escape_string($value);
	}

	// Only available for managers or above
	if($USER->auth>1) {
		if(filter_var($storage_id,FILTER_VALIDATE_INT)) {
			// Storage ID given - add new rack
			$log=addLog('Adding new rack','add',renderStorageID($storage_id),$$USER->data['user_email']);
			$add=sql_query("INSERT INTO racks SET 
				rack_name='$rack_name', 
				rack_status='$rack_status', 
				rack_description='$rack_description', 
				storage_id='$storage_id', 
				cols='$cols', 
				rows='$rows', 
				slots='$slots', 
				log='$log'");
			
			if($add) {
				header('Location: rack_view.php?id='.renderRackID($DB->insert_id));
			} else {
				$ALERTS->setAlert("Could not add information to database");
				$id=renderStorageID($storage_id);
			}
		} elseif(filter_var($rack_id,FILTER_VALIDATE_INT)) {
			// Rack ID given - edit item
			if($rack_data=sql_fetch("SELECT * FROM racks WHERE rack_id=$rack_id")) {
				// Check which values are different from the saved version
				foreach($rack_data as $key => $value) {
					if($key!='log' && $$key!=$value && array_key_exists($key,$_POST)) {
						$updates[]=$key."=".$$key;
					}
				}
				
				// Only update if the new data is different
				if(count($updates)) {
					// Add summary of updates in log message
					$log=addLog('Update rack information: '.implode(', ',$updates),'update',renderStorageID($rack_data['storage_id']),$USER->data['user_email'],$rack_data['log']);
					
					$update=sql_query("UPDATE racks SET 
						rack_name='$rack_name', 
						rack_status='$rack_status', 
						rack_description='$rack_description', 
						log='$log' 
						WHERE rack_id=$rack_id");
					
					if($update) {
						header('Location: rack_view.php?id='.renderRackID($rack_id));
					} else {
						$ALERTS->setAlert("Could not update information for ".renderRackID($rack_id));
						$id=renderRackID($rack_id);
					}
				} else {
					header('Location: rack_view.php?id='.renderRackID($rack_id));
				}
			} else {
				$ALERTS->setAlert('Invalid rack ID');
			}
		}
	} else {
		$ALERTS->setAlert('Not authorised');
		$id=isset($rack_id) ? renderRackID($rack_id) : renderStorageID($storage_id);
	}
} elseif(isset($_POST['cancel'])) {
	if(isset($_POST['rack_id'])) {
		header('Location: rack_view.php?id='.renderRackID($_POST['rack_id']));
	} elseif($_POST['storage_id']) {
		header('Location: storage_view.php?id='.renderStorageID($_POST['storage_id']));
	} else {
		header('Location: storage.php');
	}
}

$theform=new htmlForm('storage_edit.php');
$storage_id=FALSE;
$showform=FALSE;
$html='';

if(isset($_GET['id']) || isset($id)) {
	$theform=new htmlForm('rack_edit.php');
	$position=isset($_GET['id']) ? parsePosition($_GET['id']) : parsePosition($id);
	if($position['type']=='storage') {
		// Only storage ID provided, add new rack into this storage unit
		$storage_id=$position['storage_id'];
		$storage=getStorage($storage_id);
		if($storage['error']) {
			$ALERTS->setAlert($storage['error']);
		} else {
			$theform->addInput(FALSE,array('type' => 'hidden', 'name' => 'storage_id', 'value' => $storage_id));
			if($storage['data']['storage_status']=='disabled') {
				$ALERTS->setAlert('Racks can not be added to disabled storage units');
			} else {
				$showform=TRUE;
				$theform->addText('Add rack to storage unit '.$storage['data']['storage_name']);
			}
		}
		$submit='Add';
	} elseif($position['type']=='rack') {
		// Rack ID provided, edit this rack
		$rack_id=$position['rack_id'];
		$rack=getRack($rack_id);
		if($rack['error']) {
			$ALERTS->setAlert($rack['error']);
		} else {
			$showform=TRUE;
			$theform->addInput(FALSE,array('type' => 'hidden', 'name' => 'rack_id', 'value' => $rack_id));
		}
		$submit='Save';
	}
	
	if($showform) {
		$theform->addInput('Name',array('type' => 'text', 'name' => 'rack_name', 'value' => $rack['data']['rack_name']));
		$theform->addTextarea('Description',array('name' => 'rack_description'),$rack['data']['rack_description']);
	
		if($rack['meta']['total_plates']>0 && $rack['data']['rack_status']=='enabled') {
			// Rack can not be disabled if it still has plates in it
			$theform->addSelect('Status (NOTE: this rack is not empty so it can not be disabled)','rack_status',array('enabled' => 'Enabled'), array($rack['data']['rack_status']));
		} else {
			$theform->addSelect('Status','rack_status',array('enabled' => 'Enabled', 'disabled' => 'Disabled'), array($rack['data']['rack_status']));
		}
		
		if(!$rack_id) {
			// Only show inputs for rack dimensions when a new one is created
			$theform->addText('<br><strong>OBS!</strong> Rack dimensions can not be changed later.');
			$theform->addInput('Columns',array('type' => 'number', 'name' => 'cols', 'value' => 0));
			$theform->addInput('Rows',array('type' => 'number', 'name' => 'rows', 'value' => 0));
			$theform->addInput('Slots (number of plates in each rack position)',array('type' => 'number', 'name' => 'slots', 'value' => 0));
		}
	
		$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'submit', 'value' => $submit, 'class' => 'button'));
	}
	$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'cancel', 'value' => 'Cancel', 'class' => 'secondary button'));
	$html=$theform->render();
} else {
	$ALERTS->setAlert('No ID provided');
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
