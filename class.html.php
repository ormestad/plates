<?php
/*
class.html.php	
=======================================================================================
Based on https://davidwalsh.name/create-html-elements-php-htmlelement-class


FORM EXAMPLE
=======================================================================================

$theform=new htmlForm("test.php");
$theform->addInput("Label 1",array('name' => 'number1', 'value' => ''));
$theform->addInput("Label 2",array('name' => 'number2', 'value' => ''));
$theform->addTextarea("Label 3",array('name' => 'number3'),"The text in the textarea");
$theform->addCheckboxes("Label 4","favorite_color",array('r' => 'Red', 'g' => 'Green', 'b' => 'Blue'), array('g'));
$theform->addSelect("Label 5","favorite_color",array('r' => 'Red', 'g' => 'Green', 'b' => 'Blue'), array('g'));
echo $theform->render();

LIST EXAMPLE
=======================================================================================

$standardlist=new htmlList();
$standardlist->listItem("Item 1");
$standardlist->listItem("Item 2");
$standardlist->listItem("Item 3");
$standardlist->listItem("Item 4");
echo $standardlist->render();

$definitionlist=new htmlList('dl');
$definitionlist->listItem(array("Title 1","Definition 1"));
$definitionlist->listItem(array("Title 2","Definition 2"));
$definitionlist->listItem(array("Title 3","Definition 3"));
echo $definitionlist->render();

Zurb Foundation Card
=======================================================================================

$card=new zurbCard();
$card->section('Header','card-divider',array('class' => 'a_class'));
$card->section('Content');
echo $card->render();

=======================================================================================

// Standard usage
$tabledata=array(
	array('color' => 'Red', 'animal' => 'Fox', 'car' => 'Ferrari'), 
	array('color' => 'Green', 'animal' => 'Chameleon', 'car' => 'Skoda'), 
	array('color' => 'Blue', 'animal' => 'Seal', 'car' => 'Volvo') 
);

// An array with numerical indexes will not print table header
$tabledata_nocols=array(
	array('a','b','c'), 
	array('alpher','bethe','gamow'), 
	array('coke','pepsi','jolt') 
);

// Advanced usage: individual cells can be targeted by sending the value as an array containing cell content in 'text' and additional attributes as an array under 'attrib'
$tabledata_advanced=array(
	array('color' => array('text' => 'Red', 'attrib' => array('style' => 'background-color: red;')), 'animal' => 'Fox', 'car' => 'Ferrari'), 
	array('color' => array('text' => 'Green', 'attrib' => array('style' => 'background-color: green;')), 'animal' => 'Chameleon', 'car' => 'Skoda'), 
	array('color' => array('text' => 'Blue', 'attrib' => array('style' => 'background-color: blue;')), 'animal' => 'Seal', 'car' => 'Volvo') 
);

$table=new htmlTable('Favorite colors');
$table->addData($tabledata);
echo $table->render();

=======================================================================================
*/

class htmlElement {
	var $type;
	var $attributes;
	var $self_closers;
	
	function __construct($type,$self_closers = array('input','img','hr','br','meta','link')) {
		$this->type = strtolower($type);
		$this->self_closers = $self_closers;
	}
	
	/* get */
	function get($attribute) {
		return $this->attributes[$attribute];
	}
	
	/* set -- array or key,value */
	function set($attribute,$value = '') {
		if(!is_array($attribute)) {
			$this->attributes[$attribute] = $value;
		} else {
			if(!is_array($this->attributes)) {
				$this->attributes=array();
			}
			$this->attributes=array_merge($this->attributes,$attribute);
		}
	}
	
	// Merge attributes (e.g. add another class name to the already existing ones)
	function merge($attribute) {
		if(!is_array($this->attributes)) {
			$this->attributes=array();
		}

		foreach($attribute as $key => $value) {
			if(array_key_exists($key,$this->attributes)) {
				$classnames=explode(' ',$this->attributes[$key]);
				$classnames[]=$value;
				$this->attributes[$key]=implode(' ',$classnames);
			} else {
				$this->attributes[$key]=$value;
			}
		}
	}
	
	/* remove an attribute */
	function remove($att) {
		if(isset($this->attributes[$att])) {
			unset($this->attributes[$att]);
		}
	}
	
	/* clear */
	function clear() {
		$this->attributes = array();
	}
	
	/* inject */
	function inject($object) {
		if(@get_class($object) == __class__) {
			// Will otherwise throw a notice: undefined index
			if(!is_array($this->attributes)) {
				$this->attributes=array();
			}

			if(!array_key_exists("text",$this->attributes)) {
				$this->attributes['text']='';
			}

			$this->attributes['text'].=$object->build();
		}
	}
	
	/* build */
	function build() {
		//start
		$build = "\n<".$this->type;
		
		//add attributes
		if(count($this->attributes)) {
			foreach($this->attributes as $key=>$value) {
				if($key != 'text') {
					if(trim($value)=="") {
						$build.= ' '.$key;
					} else {
						$build.= ' '.$key.'="'.$value.'"';
					}
				}
			}
		}
		
		//closing
		if(!in_array($this->type,$this->self_closers)) {
			if(array_key_exists("text",$this->attributes)) {
				$content=$this->attributes['text'];
			} else {
				$content="";
			}
			$build.= '>'.$content.'</'.$this->type.">\n";
		} else {
			$build.= ">\n";
		}
		
		//return it
		return $build;
	}
	
	/* spit it out */
	function output() {
		return $this->build();
	}
}

// =======================================================================================

class htmlTable {
	var $children;
	
	function __construct($title,$attrib=array()) {
		$this->parentelement=new htmlElement('table');
		$this->parentelement->set($attrib);
		$caption=new htmlElement('caption');
		$caption->set('text',$title);
		$this->children[]=$caption;
	}
	
	private function setHeader($data) {
		$tablehead=new htmlElement('thead');
		$cols=array_keys($data[0]); // Get table headers
		if(is_array($cols)) {
			$row=new htmlElement('tr');
			foreach($cols as $key => $value) {
				$cell=new htmlElement('th');
				$cell->set('text',ucfirst(str_replace("_", " ", $value)));
				$row->inject($cell);
			}
			$tablehead->inject($row);
		}
		
		return $tablehead;
	}
	
	private function setBody($data) {
		$tablebody=new htmlElement('tbody');
		foreach($data as $row => $rowdata) {
			$row=new htmlElement('tr');
			foreach($rowdata as $key => $value) {
				$cell=new htmlElement('td');
				if(is_array($value)) {
					$cell->set('text',$value['text']);
					$cell->set($value['attrib']);
				} else {
					$cell->set('text',$value);
				}
				$row->inject($cell);
			}
			$tablebody->inject($row);
		}

		return $tablebody;
	}
	
	//http://stackoverflow.com/questions/173400/how-to-check-if-php-array-is-associative-or-sequential
	private function hasStringKeys(array $array) {
		return count(array_filter(array_keys($array), 'is_string')) > 0;
	}
	
	public function addData($data) {
		if(count($data)) {
			if($this->hasStringKeys($data[0])) {
				// Only add table header with column names if array keys are strings
				$this->children[]=$this->setHeader($data);
			}
			$this->children[]=$this->setBody($data);
		} else {
			$this->children[]=$this->setBody(array(array('No data to show')));
		}
	}
	
	public function render() {
		if(is_array($this->children)) {
			foreach($this->children as $child) {
				$this->parentelement->inject($child);
			}
		}

		return $this->parentelement->output();
	}
}


// =======================================================================================

class zurbCard {
	var $children;
	
	function __construct($attrib=array()) {
		$this->parentelement=new htmlElement('div');
		$this->parentelement->set($attrib);
		$this->parentelement->merge(array('class' => 'card'));
	}
	
	public function divider($content,$attrib=array()) {
		$output=new htmlElement('div');
		$output->set($attrib);
		$output->merge(array('class' => 'card-divider'));
		$output->set('text',$content);
		
		$this->children[]=$output;
	}
	
	public function section($content,$attrib=array()) {
		$output=new htmlElement('div');
		$output->set($attrib);
		$output->merge(array('class' => 'card-section'));
		$output->set('text',$content);
		
		$this->children[]=$output;
	}
	
	public function image($src,$attrib=array()) {
		$output=new htmlElement('img');
		$output->set('src',$src);
		$output->set($attrib);

		$this->children[]=$output;
	}
	
	public function render() {
		if(is_array($this->children)) {
			foreach($this->children as $child) {
				$this->parentelement->inject($child);
			}
		}

		return $this->parentelement->output();
	}
}

// =======================================================================================

class htmlList {
	var $children;
	
	function __construct($type="ul",$attrib=FALSE) {
		switch($type) {
			default:
				$this->type="ul";
			break;

			case "ul":
			case "ol":
			case "dl":
				$this->type=$type;
			break;
		}
		
		$this->listelement=new htmlElement($this->type);
		$this->listelement->set($attrib);
	}

	public function listItem($text,$attrib=FALSE) {
		if($this->type=="dl") {
			if(is_array($text)) {
				$output=new htmlElement('dt');
				$output->set('text',$text[0]);
				$this->children[]=$output;

				$output=new htmlElement('dl');
				$output->set('text',$text[1]);
				$this->children[]=$output;
			}
		} else {
			$output=new htmlElement('li');
			$output->set($attrib);
			$output->set('text',$text);
			$this->children[]=$output;
		}
	}
	
	public function render() {
		if(is_array($this->children)) {
			foreach($this->children as $child) {
				$this->listelement->inject($child);
			}
		}

		return $this->listelement->output();
	}
}

// =======================================================================================

class htmlForm {
	var $children;
	
	function __construct($action="",$method="post",$attrib=FALSE) {
		$this->formelement=new htmlElement('form');
		$this->formelement->set("action",$action);
		$this->formelement->set("method",$method);
		
		if(is_array($attrib)) {
			$this->formelement->set($attrib);
		}
	}

	private function labelWrap($label,$element) {
		if($label) {
			$output=new htmlElement('label');
			$output->set('text',$label);
			$output->inject($element);
			return $output;
		} else {
			return $element;
		}
	}
	
	public function addText($text,$attrib=array()) {
		$output=new htmlElement('p');
		$output->set($attrib);
		$output->set('text',$text);
		
		$this->children[]=$output;
	}

	public function addInput($label,$attrib) {
		$output=new htmlElement('input');
		$output->set($attrib);
		
		$this->children[]=$this->labelWrap($label,$output);
	}

	public function addTextarea($label,$attrib,$text) {
		$output=new htmlElement('textarea');
		$output->set($attrib);
		$output->set('text',$text);
		
		$this->children[]=$this->labelWrap($label,$output);
	}
	
	public function addCheckboxes($label,$name,$data,$selected=FALSE) {
		$output=new htmlElement('fieldset');
		$legend=new htmlElement('legend');
		$legend->set('text',$label);
		$output->inject($legend);
		foreach($data as $key => $value) {
			$checkboxID=$name.'_'.$key;
			$attrib=array("type" => "checkbox", "name" => $name, "value" => $key, "id" => $checkboxID);
			if(is_array($selected)) {
				if(in_array($key,$selected)) {
					$attrib=array_merge($attrib,array("checked" => ""));
				}
			}
			$input=new htmlElement('input');
			$input->set($attrib);
			$output->inject($input);
			$thelabel=new htmlElement('label');
			$thelabel->set('for',$checkboxID);
			$thelabel->set('text',$value);
			$output->inject($thelabel);
		}
		
		$this->children[]=$output;
	}
	
	public function addSelect($label,$name,$data,$selected=FALSE) {
		$output=new htmlElement('select');
		$output->set('name',$name);
		foreach($data as $key => $value) {
			$checkboxID=$name.'_'.$key;
			$attrib=array("value" => $key);
			if(is_array($selected)) {
				if(in_array($key,$selected)) {
					$attrib=array_merge($attrib,array("selected" => ""));
				}
			}
			$option=new htmlElement('option');
			$option->set($attrib);
			$option->set('text',$value);
			$output->inject($option);
		}
		
		$this->children[]=$this->labelWrap($label,$output);
	}
	
	public function render() {
		// Add all form elements
		if(is_array($this->children)) {
			foreach($this->children as $child) {
				$this->formelement->inject($child);
			}
		}

		return $this->formelement->output();
	}
}
?>