<?php
// intressant... https://github.com/LazarSoft/jsqrcode
// http://davidscotttufts.com/2009/03/31/how-to-create-barcodes-in-php/
// https://davidwalsh.name/html5-camera-video-iphone


/* ------------------------------------------------------

Location barcodes
=================

Full position barcode
R[NNNN]X[NN]Y[NN]

Rack location only
R[NNNN]_

Storage unit only
S[NNNN]

S: Storage unit
R: Rack
X/Y: position

------------------------------------------------------ */

require 'global.php';

$ALERTS=array();
$project=FALSE;
$search=FALSE;
$projecthtml="";
$platehtml="";
$rackhtml="";

if(isset($_POST['user_email']) && $user=checkUser($_POST['user_email'])) {
	if($plate=validatePlate($_POST['plate'])) {
		if(isset($_POST['submit'])) {
			$plate_data=sql_fetch("SELECT * FROM plates WHERE plate_id='".$plate['name']."' LIMIT 1");
			if($plate_data) {
				// Plate is already in DB
				// Check status
				if($plate_data['status']=="checked_in") {
					// Plate is checked in
					// Scan plate to verify check out
					if(isset($_POST['plate_verify'])) {
						if($plate['name']==$_POST['plate_verify']) {
							if(plateCheckOut($plate_data,$user['user_email'])) {
								$ALERTS[]=setAlerts("Plate checked out","success");
								$plate=FALSE;
							} else {
								$ALERTS[]=setAlerts("Could not check out plate!");
							}
						} else {
							$ALERTS[]=setAlerts("Plate name does not match!");
						}
					}
				} elseif($plate_data['status']=="checked_out") {
					// Plate is checked out
					// Show previous position!
					if(isset($_POST['position'])) {
						if(plateCheckIn($plate_data,$_POST['position'],$user['user_email'])) {
							$ALERTS[]=setAlerts("Plate was checked in successfully","success");
							$plate=FALSE;
						} else {
							$ALERTS[]=setAlerts("Could not check in plate!");
						}
					}
				}
				
				// more statuses? destroyed/returned?
				
			} else {
				// Plate is not in database

				// Check if query matches PNNNN format or J.Doe_17_01 project name format - in this case we want to search for plates
				if(preg_match("/^P[0-9]{3,}$/",$plate['name'])) {
					// Query match LIMS project ID - fetch project info
					if($project=getProject($plate['name'])) {
						$search=TRUE;
					}
					$plate=FALSE;
				} elseif(preg_match("/^[A-Z]+\.[A-Za-z]{2,}_?([0-9]{2})?_?([0-9]{2})?/",$plate['name'])) {
					$search=findProjectByName($plate['name']);
					$plate=FALSE;
				}
				
				// Check in
				if(isset($_POST['position'])) {
					if(plateAdd($plate['name'],$_POST['position'],$user['user_email'])) {
						$ALERTS[]=setAlerts("Plate was added successfully","success");
						$plate=FALSE;
					} else {
						$ALERTS[]=setAlerts("Could not add plate!");
					}
				}
			}
		} elseif(isset($_POST['return'])) {
			$plate_data=sql_fetch("SELECT * FROM plates WHERE plate_id='".$plate['name']."' LIMIT 1");
			if($plate_data) {
				if(isset($_POST['plate_verify'])) {
					if($plate['name']==$_POST['plate_verify']) {
						if(plateCheckOut($plate_data,$user['user_email'],'return')) {
							$ALERTS[]=setAlerts("Plate checked out for returning to user, this means a plate with the same name can not be checked in again","warning");
							$plate=FALSE;
						} else {
							$ALERTS[]=setAlerts("Could not check out plate!");
						}
					} else {
						$ALERTS[]=setAlerts("Plate name does not match!");
					}
				}
			}
		} elseif(isset($_POST['destroy'])) {
			$plate_data=sql_fetch("SELECT * FROM plates WHERE plate_id='".$plate['name']."' LIMIT 1");
			if($plate_data) {
				if(isset($_POST['plate_verify'])) {
					if($plate['name']==$_POST['plate_verify']) {
						if(plateCheckOut($plate_data,$user['user_email'],'destroy')) {
							$ALERTS[]=setAlerts("Plate checked out for destruction, this means a plate with the same name can not be checked in again","warning");
							$plate=FALSE;
						} else {
							$ALERTS[]=setAlerts("Could not check out plate!");
						}
					} else {
						$ALERTS[]=setAlerts("Plate name does not match!");
					}
				}
			}
		} elseif(isset($_POST['cancel'])) {
			$plate=FALSE;
		}
	} else {
		$plate=FALSE;
	}
} else {
	$plate=FALSE;
}

// Build page
//=================================================================================================

$theform=new htmlForm('index.php');

// Find checked out plates
$checkedout=sql_query("SELECT * FROM plates WHERE status='checked_out'");
if($checkedout->num_rows>0) {
	while($checkedout_plate=$checkedout->fetch_assoc()) {
		$lastlog=getLastLog($checkedout_plate['log']);
		$checkedouttime=date('Y-m-d H:i:s', $lastlog['timestamp']);
		$diff=round((time()-$lastlog['timestamp'])/3600);
		if($diff>12) {
			$checkedouton=date('Y-m-d H:i:s', $lastlog['timestamp']).' <span class="alert label">(ca '.$diff.'h ago)</span>';
		} else {
			$checkedouton=date('Y-m-d H:i:s', $lastlog['timestamp']).' <span class="label">(ca '.$diff.'h ago)</span>';
		}
		
		$checked_out_data[]=array(
			'plate'				=> '<code class="plate">'.$checkedout_plate['plate_id'].'</code>', 
			'checked_out_by'	=> $lastlog['user'], 
			'checked_out_on'	=> $checkedouton, 
			'from'				=> '<code>'.$lastlog['position'].'</code>'
		);
	}
	
	$checkedout_table=new htmlTable('Checked out plates');
	$checkedout_table->addData($checked_out_data);
	$checkedout_html=$checkedout_table->render();
} else {
	$checkedout_html='';
}

if($plate) {
	// Plate selected and validated
	// Show project and sample info 
	if($plate['type']=="sample") {
		// This is a project sample plate - fetch project information
		$sampleplate=parseProjectPlateName($plate['name']);
		if($project=getProject($sampleplate['limsid'])) {
			$projecthtml=showProjectData($project);
		} else {
			// Looks like project plate but project does not exist in LIMS
			$projectcard=new zurbCard();
			$projectcard->divider('<strong>No associated project</strong>');
			$projectcard->section('This looks like a sample plate for a project. However, the corresponding project can not be found in LIMS so please check that the plate name is correct.');
			$projecthtml=$projectcard->render();
		}
	} else {
		// Not a project sample plate, don't show any project information
		$projecthtml='';
	}
	
	// Show plate info
	$platecard=new zurbCard();
	$platecard->divider("<strong>Selected plate</strong> <code>".$plate['name']."</code>");
	$platedata=new htmlList('ul',array('class' => 'no-bullet'));
	$platedata->listItem('Plate status: '.formatPlateStatus($plate_data['status']));
	if($plate['limsid']) {
		// Show plate information from LIMS
		$clarity=new Clarity("https://genologics.scilifelab.se/api/v2/",$CONFIG['clarity']['user'],$CONFIG['clarity']['pass']);
		$container=$clarity->getEntity("containers/".$plate['limsid']);
		$platedata->listItem('LIMS ID: <code>'.$container['limsid'].'</code>');
		$platedata->listItem('Number of samples: <code>'.$container['occupied-wells'].'</code>');
	} else {
		// Plate does not exist in LIMS
		$platedata->listItem('LIMS ID: <span class="alert label">Plate does not exist in LIMS</span>');
	}
	$platecard->section($platedata->render());
	switch($plate_data['status']) {
		case 'destroyed':
			$platecard->section('<strong>This plate has been destroyed and can not be checked in again.</strong>');
		break;

		case 'returned':
			$platecard->section('<strong>This plate has been returned to the user and can not be checked in again.</strong><br>If the plate has been modified and returned it has to be imported as a new plate in LIMS.');
		break;
	}
	
	
	// Show log
	$platelog=new htmlTable('Plate log',array('class' => 'log'));
	$platelog->addData(parseLog($plate_data['log']));
	$platecard->section($platelog->render());

	$platehtml=$platecard->render();
	
	// Hidden form fields with plate and user info
	$theform->addInput(FALSE,array("type" => "hidden", "name" => "user_email", "value" => $user['user_email']));
	$theform->addInput(FALSE,array("type" => "hidden", "name" => "plate", "value" => $plate['name']));
	
	if($plate_data) {
		// Plate exist in database already
		if($plate_data['status']=="checked_in") {
			// Plate is checked in, show location info
			$rack=getRack($plate_data['rack_id'],$plate['name']);
			$racklayout=new htmlTable('Rack: '.$rack['data']['rack_name'],array('class' => 'rack'));
			$racklayout->addData(parseRackLayout($rack['layout']));
			$rackcard=new zurbCard();
			$rackcard->divider('<strong>Location</strong> '.$rack['storage']['storage_name'].' ('.$rack['storage']['storage_temp'].'&deg;C '.$rack['storage']['storage_type'].' in room '.$rack['storage']['storage_location'].')');
			$rackcard->section($racklayout->render());
			$rackcard->section("<p>Plate <code>".$plate_data['plate_id']."</code> located in rack <code>".$rack['data']['rack_name']."</code> @ Col:<code>".$plate_data['col']."</code> Row:<code>".$plate_data['row']."</code></p>");
			$rackhtml=$rackcard->render();

			// Check out plate
			$theform->addInput("Verify plate ID before proceeding",array("type" => "text", "name" => "plate_verify", "value" => ""));
			$theform->addInput(FALSE,array("type" => "submit", "name" => "submit", "value" => "Check out plate", "class" => "button"));
			$theform->addInput(FALSE,array("type" => "submit", "name" => "return", "value" => "Return plate", "class" => "warning button"));
			$theform->addInput(FALSE,array("type" => "submit", "name" => "destroy", "value" => "Destroy plate", "class" => "alert button"));
			$theform->addInput(FALSE,array("type" => "submit", "name" => "cancel", "value" => "Cancel", "class" => "secondary button"));
		} else {
			// Plate is checked out, returned or destroyed
			if($plate_data['status']=="checked_out") {
				// Plate can only be checked in again if it's been checked out, not if it's been returned or destroyed
				$theform->addInput("Position",array("type" => "text", "name" => "position", "value" => "", "id" => "position", "autocomplete" => "off"));
				$theform->addInput(FALSE,array("type" => "submit", "name" => "submit", "value" => "Check in plate", "class" => "button"));
			}
			$theform->addInput(FALSE,array("type" => "submit", "name" => "cancel", "value" => "Cancel", "class" => "secondary button"));
		}
	} else {
		// Check in of new plate
		$ALERTS[]=setAlerts("Plate does not exist in plate database");
		// position field controlled by jQuery Regex that trigger AJAX request of conditional position information to #rackview div below
		$theform->addInput("Position",array("type" => "text", "name" => "position", "value" => "", "id" => "position", "autocomplete" => "off"));
		$theform->addInput(FALSE,array("type" => "submit", "name" => "submit", "value" => "Check in plate", "class" => "button"));
		$theform->addInput(FALSE,array("type" => "submit", "name" => "cancel", "value" => "Cancel", "class" => "secondary button"));
	}
} else {
	// Default view:
	// No plate selected OR search results showing specific project or list of projects
	
	// Operator (user_email) field controlled by jQuery Regex that automatically change focus to next input if valid scilifelab domain email is entered (js/app.js)
	
	// Check if this is a search
	if($search) {
		if($project) {
			// Search using project LIMS ID
			// Show project info
			$projecthtml=showProjectData($project);
		} else {
			// Search using project name
			// List matching projects
			$projectcard=new zurbCard();
			$projectcard->divider(count($search['data']).' projects matching search query: '.$search['query']);
			$projectcard->section($search['html']);
			$projecthtml=$projectcard->render();
		}
		$theform->addInput("Operator",array("type" => "text", "name" => "user_email", "value" => $user['user_email'], "required" => "", "id" => "user_email", "autocomplete" => "off"));
	} else {
		$theform->addText('Manage plates by scanning plate barcode or search using plate/project ID or name.');
		$theform->addInput("Operator (use your scilifelab email address)",array("type" => "text", "name" => "user_email", "value" => "", "required" => "", "id" => "user_email", "autocomplete" => "off"));
	}
	
	$theform->addInput("Plate",array("type" => "text", "name" => "plate", "value" => $plate, "required" => "", "id" => "plate"));
	$theform->addInput(FALSE,array("type" => "submit", "name" => "submit", "value" => "Next", "class" => "button"));
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
<?php echo $projecthtml; ?>
<?php echo $platehtml; ?>
<?php echo $rackhtml; ?>
<?php echo $theform->render(); ?>

<!-- Placeholder for plate position info during check in, populated by _rackview.php from AJAX request -->
<div id="rackview"></div>

<?php echo $checkedout_html; ?>
</div>
</div>

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>
<script src="js/vendor/foundation.js"></script>
<script src="js/app.js"></script>
</body>

</html>
