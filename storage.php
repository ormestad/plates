<?php
require 'lib/global.php';

if($USER->auth>0) {
	$storage_query=sql_query("SELECT * FROM storage");
	if($storage_query->num_rows>0) {
		while($storage=$storage_query->fetch_assoc()) {
			$results=getStorage($storage['storage_id']);
			$storage_id=renderStorageID($storage);
			$data[]=array(
				'identifier'	=> "<a href=\"storage_view.php?id=$storage_id\"><code>".$storage_id.'</code></a>', 
				'status'		=> formatStorageStatus($results['data']['storage_status']), 
				'name'			=> $results['data']['storage_name'], 
				'description'	=> $results['data']['storage_description'], 
				'type'			=> $results['data']['storage_type'], 
				'temp'			=> $results['data']['storage_temp'], 
				'location'		=> $results['data']['storage_location'], 
				'edit'			=> "<a href=\"storage_edit.php?id=$storage_id\"><i class=\"fi-widget\"></i></a>", 
			);
		}
	} else {
		$data=array();
	}

	$table=new htmlTable('List of all storage units');
	$table->addData($data);
	$html=$table->render();
} else {
	header('Location:index.php');
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
<a href="storage_edit.php" class="button"><i class="fi-plus"></i> Add new storage</a>
</div>
</div>

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>
<script src="js/vendor/foundation.js"></script>
<script src="js/app.js"></script>
</body>

</html>
