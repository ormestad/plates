<?php
require 'lib/global.php';

$theform=new htmlForm('storage_edit.php');
if(isset($_POST['submit'])) {
	// Clean input
	foreach($_POST as $key => $value) {
		$$key=$DB->real_escape_string($value);
	}

	// Check user
	$USER->validateUser($_POST['user_hash']);
	// Only available for managers or above
	if($USER->auth>1) {
		$user=$USER->data;
		if(filter_var($rack_id,FILTER_VALIDATE_INT)) {
			if($rack_data=sql_fetch("SELECT * FROM racks WHERE rack_id=$rack_id")) {
				$id=renderRackID($rack_id);
				$newstorage=getStorage($storage_new);
				$log=addLog('Rack moved to '.$newstorage['data']['storage_name'],'move',renderStorageID($storage_new),$user['user_email'],$rack_data['log']);
				
				$update=sql_query("UPDATE racks SET 
					storage_id='$storage_new', 
					log='$log' 
					WHERE rack_id=$rack_id");
				
				if($update) {
					header('Location: rack_view.php?id='.$id);
				} else {
					$id=renderRackID($rack_id);
					$ALERTS->setAlert("Could not move rack $id");
				}
			} else {
				$ALERTS->setAlert('Invalid rack ID');
			}
		}
	} else {
		$ALERTS->setAlert('Invalid user ID');
		$id=renderRackID($rack_id);
	}
} elseif(isset($_POST['cancel'])) {
	if(isset($_POST['rack_id'])) {
		header('Location: rack_view.php?id='.renderRackID($_POST['rack_id']));
	} else {
		header('Location: storage.php');
	}
}

$storage_id=FALSE;
$showform=FALSE;
$html='';

if(isset($_GET['id']) || isset($id)) {
	$theform=new htmlForm('rack_move.php');
	$position=isset($_GET['id']) ? parsePosition($_GET['id']) : parsePosition($id);
	if($position['type']=='rack') {
		// Rack ID provided, edit this rack
		$rack_id=$position['rack_id'];
		$rack=getRack($rack_id);
		if($rack['error']) {
			$ALERTS->setAlert($rack['error']);
		} else {
			$showform=TRUE;
			$theform->addInput(FALSE,array('type' => 'hidden', 'name' => 'rack_id', 'value' => $rack_id));
			
			// List available storage
			$available_storage_query=sql_query("SELECT * FROM storage WHERE storage_status!='disabled' AND storage_id!='".$rack['storage']['storage_id']."'");
			while($available_storage=$available_storage_query->fetch_assoc()) {
				$select_data[$available_storage['storage_id']]=$available_storage['storage_name'].' '.$available_storage['storage_type'].' ('.$available_storage['storage_temp'].'&deg;C) in '.$available_storage['storage_location'];
			}
		}
	}
	
	if($showform) {
		$theform->addText('<strong>Move rack '.$rack['data']['rack_name'].'</strong>');
		$theform->addInput('Current storage unit',array('type' => 'text', 'name' => 'cols', 'value' => $rack['storage']['storage_name'], 'disabled' => 'disabled'));
		$theform->addSelect('New storage unit','storage_new',$select_data);
	
		$theform->addInput('Operator',array('type' => 'password', 'name' => 'user_hash', 'value' => '', 'autocomplete' => 'off'));
		$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'submit', 'value' => 'Move', 'class' => 'button'));
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
