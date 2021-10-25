<?php
require 'lib/global.php';

if(isset($_GET['id'])) {
	if($position=parsePosition($_GET['id'])) {
		$rack=getRack($position['rack_id']);
		if(!$rack['error']) {
			$rack_id=renderRackID($rack['data']);

			$table_content=new htmlTable('Content in rack '.$rack['data']['rack_name'],array('class' => 'rack'));
			$table_content->addData(parseRackLayout($rack['layout']));

			$table_layout=new htmlTable('Layout of rack'.$rack['data']['rack_name'],array('class' => 'rack'));
			$table_layout->addData(parseRackLayout($rack['layout'],FALSE));

			$log=new htmlTable('Log',array('class' => 'log'));
			$log->addData(parseLog($rack['data']['log']));
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
		<img alt="<?php echo $rack_id; ?>" src="barcode.php?text=<?php echo $rack_id; ?>&print=true&size=100">
	</div>
	<div class="large-4 columns">
		<table class="unstriped">
			<tr>
				<td><strong>ID</strong></td>
				<td><code><?php echo $rack_id; ?></code></td>
			</tr>
			<tr>
				<td><strong>Name</strong></td>
				<td><?php echo $rack['data']['rack_name']; ?></td>
			</tr>
			<tr>
				<td><strong>Storage unit</strong></td>
				<td><?php echo $rack['storage']['storage_name']; ?> <a href="storage_view.php?id=<?php echo renderStorageID($rack['storage']) ?>"><code><?php echo renderStorageID($rack['storage']) ?></code></a></td>
			</tr>
			<tr>
				<td><strong>Status</strong></td>
				<td><?php echo formatStorageStatus($rack['data']['rack_status']); ?></td>
			</tr>
		</table>
	</div>
	<div class="large-4 columns">
		<table class="unstriped">
			<tr>
				<td><strong>Columns</strong></td>
				<td><?php echo $rack['data']['cols']; ?></td>
			</tr>
			<tr>
				<td><strong>Rows</strong></td>
				<td><?php echo $rack['data']['rows']; ?></td>
			</tr>
			<tr>
				<td><strong>Slots</strong></td>
				<td><?php echo $rack['data']['slots']; ?></td>
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
				<?php echo $rack['data']['rack_description']; ?>
			</div>

			<ul class="tabs" data-tabs id="example-tabs">
				<li class="tabs-title is-active"><a href="#panel1" aria-selected="true">Rack content</a></li>
				<li class="tabs-title"><a href="#panel2">Rack layout</a></li>
			</ul>
			
			<div class="tabs-content" data-tabs-content="example-tabs">
				<div class="tabs-panel is-active" id="panel1">
					<?php echo $table_content->render(); ?>
				</div>
				
				<div class="tabs-panel" id="panel2">
					<?php echo $table_layout->render(); ?>
				</div>
			</div>		
		</div>
		
		<div class="card">
			<div class="card-divider">
				<strong>Tools</strong>
			</div>
			<div class="card-section">
				<div class="button-group">
					<a href="rack_edit.php?id=<?php echo $rack_id; ?>" class="button"><i class="fi-widget"></i> Edit rack</a>
					<a href="rack_move.php?id=<?php echo $rack_id; ?>" class="button"><i class="fi-plus"></i> Move rack</a>
				</div>
			</div>
		</div>

		<?php echo $loghtml; ?>
	</div>
</div>

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>
<script src="js/vendor/foundation.js"></script>
<script src="js/vendor/foundation.core.js"></script>
<script src="js/vendor/foundation.tabs.js"></script>
<script src="js/vendor/foundation.util.keyboard.js"></script>
<script src="js/vendor/foundation.util.timerAndImageLoader.js"></script>
<script src="js/app.js"></script>
</body>

</html>
