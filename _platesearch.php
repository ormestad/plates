<?php
require 'lib/global.php';
$content='';

if(isset($_REQUEST['query'])) {
	$data=cachePlates();
	$query=trim($_REQUEST['query']);
	if(is_array($data)) {
		$search_results=array_filter($data,function($item) use ($query) {
			return (stripos($item,$query) !== FALSE);
		});
		
		$card=new zurbCard();
		$card->divider('Registered plates matching: '.$query);
		foreach($search_results as $plate) {
			$content.='<code class="plate">'.$plate.'</code> ';
		}
		$card->section($content);
		echo $card->render();
	}
}
?>
