<?php
class alertHandler {
	function __construct() {
		if(isset($_SESSION['alerts'])) {
			$this->save=TRUE;
			$this->alerts=$_SESSION['alerts'];
		} else {
			$this->save=FALSE;
			$this->alerts=array();
		}
	}
	
	public function setAlert($text,$type='notice') {
		// Altert types are notice, warning, error and success
		// These corresponds to the following classes in the Zurb Foundation framework
		// notice = primary
		// warning = warning
		// error = alert
		// success = success
		$types=array('notice' => 'primary','warning' => 'warning','error' => 'alert','success' => 'success');
		if(trim($text)!='') {
			$type=array_key_exists($type,$types) ? $type : 'notice';
			$result=array(
				'type' => $types[$type], 
				'text' => $text
			);
			
			if($this->save) {
				array_push($_SESSION['alerts'],$result);
			}
			
			array_push($this->alerts,$result);
		}
	}

	public function render() {
		if(count($this->alerts)) {
			foreach($this->alerts as $alert) {
				$html.='<div class="callout '.$alert['type'].'">'.$alert['text']."</div>\n";
			}
			return $html;
		}
	}
	
	public function clear() {
		$this->alerts=array();
		if($this->save) {
			$_SESSION['alerts']=array();
		}
	}
	
	public function saveSession() {
		$this->save=TRUE;
		$_SESSION['alerts']=$this->alerts;
	}
	
	public function killSession() {
		$this->save=FALSE;
		unset($_SESSION['alerts']);
	}
}
?>