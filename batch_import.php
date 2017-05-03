<?php
require 'global.php';
$imported=FALSE;
$errors=array();

if(isset($_POST['submit'])) {
	// Check user
	$USER->validateUser($_POST['user_hash']);
	if($USER->auth>1) {
		// Batch import can only be done by managers and admins
		// Import from file
		$filename=filter_var($_POST['filename'],FILTER_SANITIZE_STRING);
		if(($handle=fopen('temp/'.$filename,"r"))!==FALSE) {
			// Read data from file
			$rack_id=FALSE;
			while(($data=fgetcsv($handle,1000,","))!==FALSE) {
				$position=parsePosition($data[1]);
				if(!$rack_id) {
					$rack_id=$position['rack_id'];
				}
				
				if($rack_id==$position['rack_id']) {
					$plate=parseQuery($data[0]);
					if($plate['name']) {
						$addplate=plateAdd($plate['name'],$data[1],$USER->data['user_email'],$filename);
						if($addplate['error']) {
							$errors[]=array('message' => 'Could not add plate '.$data[0].' to position '.$data[1].': '.$addplate['error'], 'data' => $data);
						}
					} else {
						$errors[]=array('message' => 'Invalid plate name: '.$data[0].', plate not added to position '.$data[1], 'data' => $data);
					}
				} else {
					$errors[]=array('message' => 'Could not add plate '.$data[0].' to position '.$data[1].'. Plates can only be batch imported in 1 rack at a time.', 'data' => $data);
				}
			}
			fclose($handle);
			// Delete temp file
			unlink('temp/'.$filename);
			$imported=TRUE;
		} else {
			// Could not open file
			$ALERTS->setAlert('Could not open file','error');
		}
	} else {
		// Not authorized
		$ALERTS->setAlert('Not authorized','warning');
	}
}

if($imported) {
	// Plate data has been imported
	$rack=getRack($rack_id);
	$table=new htmlTable('Rack '.$rack['data']['rack_name'].' in '.$rack['storage']['storage_name'],array('class' => 'rack'));
	$table->addData(parseRackLayout($rack['layout']));

	$card=new zurbCard();
	$card->divider('Plates imported from file: '.$filename);
	$card->section('Please verify rack layout below and make sure to check any reported errors');

	$html=$card->render();
	$html.=$table->render();
	
	// Report errors after submit
	if(count($errors)) {
		$ALERTS->setAlert('Import generated errors','warning');
		$html.='<div class="alert callout">Please check the following errors!</div>';
		foreach($errors as $error) {
			$html.=$error['message'].'<br>';
		}
	}
	
	$html.='<br><a href="batch_import.php?uid='.$USER->data['uid'].'" class="button"><i class="fi-arrow-up"></i> Import again</a>';
} else {
	// New import
	if(isset($_GET['uid'])) {
		if($user=$USER->getUser($_GET['uid'])) {
			// Batch import is only allowed for managers and admins
			if($user['user_auth']>1) {
				$filename=uniqid().'.csv';
				$card=new zurbCard();
				$card->divider('Batch import of plates, writing to file: '.$filename);
				$card->section('Plate/positions will be confirmed and subsequently added to a temporary file that can be imported at the end of the operation. This can only be done one rack at a time. <strong>Use with caution!</strong>');
				$html=$card->render();
				
				$theform=new htmlForm('batch_import.php');
				
				$theform->addInput(FALSE,array('type' => 'hidden', 'name' => 'uid', 'value' => $_GET['uid']));
				$theform->addInput(FALSE,array('type' => 'hidden', 'name' => 'filename', 'value' => $filename));
				$theform->addInput('Scan plate/position',array('type' => 'text', 'name' => 'batch_data', 'value' => '', 'id' => 'batch_data', 'autocomplete' => 'off'));
				$theform->addInput("Operator (scan your personal barcode to import)",array("type" => "password", "name" => "user_hash", "value" => "", "required" => "", "id" => "user_hash", "autocomplete" => "off"));
				$theform->addInput(FALSE,array('type' => 'submit', 'name' => 'submit', 'value' => 'Import', 'class' => 'button'));
				$html.=$theform->render();
				$html.='<div id="batch_message" class="primary callout">Please start by scanning a plate</div>';
				$html.='<div id="batch_list"></div>';
			} else {
				$html='<p>Not authorized</p>';
			}
		} else {
			$html='<p>User does not exist</p>';
		}
	} else {
		$html='<p>No user selected</p>';
	}
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
