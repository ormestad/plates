<?php
require 'global.php';

$ALERTS=array();

if(isset($_GET['id'])) {
	if($position=parsePosition($_GET['id'])) {
		$storage=getStorage($position['storage_id']);
		if(!$storage['error']) {
			if(count($storage['racks'])) {
				if($_GET['view']=='labels') {
					$total=count($storage['racks']);
					$columns=3;
					$rows=ceil($total/$columns);
					$table_title='Racks <a href="storage_view.php?id='.$_GET['id'].'"><i class="fi-list"></i></a>';
					foreach($storage['racks'] as $rack) {
						$rack_id=renderRackID($rack);
						$rack_title=$rack['rack_name'].' ('.$rack_id.')';
						$rackdata[]=$rack_title.'<br><img alt="'.$rack_title.'" src="barcode.php?text='.$rack_id.'&print=true&size=100">';
					}
					for($row=0;$row<$rows;$row++) {
						$data[]=array_slice($rackdata,$row*$columns,$columns);
					}
				} else {
					$table_title='Racks <a href="storage_view.php?id='.$_GET['id'].'&view=labels"><i class="fi-thumbnails"></i></a>';
					foreach($storage['racks'] as $rack) {
						$rack_id=renderRackID($rack);
						$data[]=array(
							'identifier'	=> "<a href=\"rack_view.php?id=$rack_id\"><code>".$rack_id.'</code>', 
							'name'			=> $rack['rack_name'], 
							'description'	=> $rack['rack_description'], 
							'status'		=> formatStorageStatus($rack['rack_status']), 
							'columns'		=> $rack['cols'], 
							'rows'			=> $rack['rows'], 
							'slots'			=> $rack['slots'], 
							'edit'			=> "<a href=\"rack_edit.php?id=$rack_id\"><i class=\"fi-widget\"></i></a>"
						);
					}
				}
			} else {
				$data=array();
			}

			$racks=new htmlTable($table_title);
			$racks->addData($data);
			$rackhtml=$racks->render();
			
			$storage_id=renderStorageID($storage['data']);
			$log=new htmlTable('Log',array('class' => 'log'));
			$log->addData(parseLog($storage['data']['log'],'storage'));
			$loghtml=$log->render();
		} else {
			// Storage ID does not exist
		}
	} else {
		// Invalid ID format
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
	<div class="large-4 columns">
		<img alt="<?php echo $storage_id; ?>" src="barcode.php?text=<?php echo $storage_id; ?>&print=true&size=100">
	</div>
	<div class="large-4 columns">
		<table class="unstriped">
			<tr>
				<td><strong>ID</strong></td>
				<td><code><?php echo $storage_id; ?></code></td>
			</tr>
			<tr>
				<td><strong>Name</strong></td>
				<td><?php echo $storage['data']['storage_name']; ?></td>
			</tr>
			<tr>
				<td><strong>Status</strong></td>
				<td><?php echo formatStorageStatus($storage['data']['storage_status']); ?></td>
			</tr>
		</table>
	</div>
	<div class="large-4 columns">
		<table class="unstriped">
			<tr>
				<td><strong>Type</strong></td>
				<td><?php echo $storage['data']['storage_type']; ?></td>
			</tr>
			<tr>
				<td><strong>Temperature</strong></td>
				<td><?php echo $storage['data']['storage_temp']; ?></td>
			</tr>
			<tr>
				<td><strong>Location</strong></td>
				<td><?php echo $storage['data']['storage_location']; ?></td>
			</tr>
		</table>
	</div>
</div>

<div class="row">
	<div class="large-12 columns">
		<div class="card">
			<div class="card-divider">
				<strong>Description</strong>
			</div>
			<div class="card-section">
				<?php echo $storage['data']['storage_description']; ?>
			</div>
		</div>
		
		<?php echo $rackhtml; ?>
		
		<div class="card">
			<div class="card-divider">
				<strong>Tools</strong>
			</div>
			<div class="card-section">
				<div class="button-group">
					<a href="storage_edit.php?id=<?php echo $storage_id; ?>" class="button"><i class="fi-widget"></i> Edit storage</a>
					<a href="rack_edit.php?id=<?php echo $storage_id; ?>" class="button"><i class="fi-plus"></i> Add rack</a>
				</div>
			</div>
		</div>

		<?php echo $loghtml; ?>
	</div>
</div>

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>
<script src="js/vendor/foundation.js"></script>
<script src="js/app.js"></script>
</body>

</html>
