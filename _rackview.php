<?php
require 'global.php';

if(isset($_POST['position'])) {
	$position=parsePosition($_POST['position']);
	if($position['type']=='position') {
		$rack=getRack($position['rack_id'],FALSE,$position['xpos'],$position['ypos']);
		$table=new htmlTable('Rack '.$rack['data']['rack_name'].' in '.$rack['storage']['storage_name'],array('class' => 'rack'));
		$table->addData(parseRackLayout($rack['layout']));
		echo $table->render();
	} elseif($position['type']=='rack') {
		$rack=getRack($position['rack_id'],FALSE);
		$table=new htmlTable('Rack '.$rack['data']['rack_name'].' in '.$rack['storage']['storage_name'].' '.formatStorageStatus($rack['data']['rack_status']),array('class' => 'rack'));
		$table->addData(parseRackLayout($rack['layout']));
		echo $table->render();
	} elseif($position['type']=='storage') {
		$storage=getStorage($position['storage_id']);
		$table=new htmlTable('Racks in '.$storage['data']['storage_name'].' '.formatStorageStatus($storage['data']['storage_status']),array('class' => 'rack'));
		$table->addData(parseStorageLayout($storage));
		echo $table->render();
	}
} else {
	echo "Parameter missing...";
}

?>
