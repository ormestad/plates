<?php
require 'lib/global.php';

if(isset($_POST['barcode']) && isset($_POST['filename'])) {
	// Check user
	$user=$USER->getUser($_POST['uid']);
	if($user['user_auth']>1) {
		$barcode=filter_var($_POST['barcode'],FILTER_SANITIZE_STRING);
		$filename=filter_var($_POST['filename'],FILTER_SANITIZE_STRING);
		$parts=explode(',',$barcode);
		if(count($parts)>1) {
			// Second part of data, should be position barcode
			$position=parsePosition($parts[1]);
			if($position['type']='position') {
				// This is a position barcode
				// Validate plate (again) and position!
				$plate=parseQuery($parts[0]);
				if($plate['name']) {
					$rack=getRack($position['rack_id']);
					if(!$rack['error']) {
						// Write plate,position combo the the end of the file
						$fp=fopen("temp/$filename",'a');
						if(fputcsv($fp,$parts)) {
							$html='<code>'.$plate['name'].'</code> @ rack '.$rack['data']['rack_name'].' in storage '.$rack['storage']['storage_name'].' <code>'.$parts[1].'</code><br>';
							$results=array('error' => FALSE, 'plate' => $plate['name'], 'position' => $parts[1], 'html' => $html);
						} else {
							$results=array('error' => 'Could not write to file', 'plate' => FALSE, 'position' => FALSE, 'html' => FALSE);
						}
						fclose($fp);
					} else {
						// Invalid position
						$results=array('error' => $rack['error'], 'plate' => FALSE, 'position' => FALSE, 'html' => FALSE);
					}
				} else {
					// This does not seem to be a valid plate barcode
					$results=array('error' => 'Invalid plate barcode', 'plate' => FALSE, 'position' => FALSE, 'html' => FALSE);
				}
			} else {
				// Second part does not match position barcode format
				$results=array('error' => 'Second scan must be a position barcode', 'plate' => FALSE, 'position' => FALSE, 'html' => FALSE);
			}
		} else {
			// This is the first part of the data
			if(preg_match("/R[0-9]{4}X[0-9]{2}Y[0-9]{2}/",$barcode)) {
				// This is a position barcode
				// Return error message, plate is scanned first
				$results=array('error' => 'Please begin with scanning the plate', 'plate' => FALSE, 'position' => FALSE, 'html' => FALSE);
			} else {
				// This is a plate barcode
				
				// Validate plate
				$plate=parseQuery($barcode);
				if($plate['name']) {
					// Send back plate ID and wait for position barcode
					// Add back to form field and append a comma
					$results=array('error' => FALSE, 'plate' => $plate['name'].',', 'position' => FALSE, 'html' => FALSE);
				} else {
					// This does not seem to be a valid plate barcode
					$results=array('error' => 'Invalid plate barcode', 'plate' => FALSE, 'position' => FALSE, 'html' => FALSE);
				}
			}
		}
	} else {
		$results=array('error' => 'Not authorized', 'plate' => FALSE, 'position' => FALSE, 'html' => FALSE);
	}
} else {
	$results=array('error' => 'Missing data', 'plate' => FALSE, 'position' => FALSE, 'html' => FALSE);
}

echo json_encode($results);
?>
