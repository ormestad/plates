<?php
class Uservalidation {
	public function __construct() {
		$this->loginCheck();
	}

	// Validate user session 
	private function loginCheck() {
		if($user=$this->getUser($_SESSION['session_email'])) {
			if(hash_equals($user['user_hash'],$_SESSION['session_hash'])) {
				// Successful match
				$this->data=$user;
				$this->auth=$user['user_auth'];
				return TRUE;
			} else {
				// Hashes does not match
				$this->data=FALSE;
				$this->auth=0;
				$this->clearSession();
				return FALSE;
			}
		} else {
			// User doesn't exist
			$this->data=FALSE;
			$this->auth=0;
			$this->clearSession();
			return FALSE;
		}
	}
	
	public function login($email,$pwd) {
		global $ALERTS;
		if($email=filter_var($email,FILTER_VALIDATE_EMAIL)) {
			if($user=$this->getUser($email)) {
				$hash=$this->generateHash($email,$pwd);
				if(hash_equals($user['user_hash'],$hash)) {
					$this->registerUserSession($user);
					return TRUE;
				} else {
					// Hashes does not match
					$ALERTS->setAlert('Could not log in, please try again or contact the site administrator','warning');
					return FALSE;
				}
			} else {
				// User does not exist
				$ALERTS->setAlert('Could not log in, please try again or contact the site administrator','warning');
				return FALSE;
			}
		} else {
			// Not a valid email address
			$ALERTS->setAlert('Not a valid email address','error');
			return FALSE;
		}
	}

	// Alternative login using barcode of user hash
	public function login_alt($hash) {
		global $ALERTS;
		if($user=$this->getUser($hash)) {
			return $this->registerUserSession($user);
		} else {
			// User does not exist
			$ALERTS->setAlert('Could not log in, please try again or contact the site administrator','warning');
			return FALSE;
		}
	}

	public function logout() {
		$this->destroySession();
		$this->data=FALSE;
		$this->auth=0;
	}

	private function registerUserSession($user) {
		$_SESSION['session_email']=$user['user_email'];
		$_SESSION['session_hash']=$user['user_hash'];
		$this->data=$user;
		$this->auth=$user['user_auth'];
	}
	
	// Get data for specific user (either by email, uid or hash)
	public function getUser($user) {
		global $DB;
		if($email=filter_var($user,FILTER_VALIDATE_EMAIL)) {
			$checkuser=sql_fetch("SELECT * FROM users WHERE user_email='$email' LIMIT 1");
		} elseif($id=filter_var($user,FILTER_VALIDATE_INT)) {
			$checkuser=sql_fetch("SELECT * FROM users WHERE uid=$id LIMIT 1");
		} else {
			$hash=$DB->real_escape_string($user);
			$checkuser=sql_fetch("SELECT * FROM users WHERE user_hash='$hash' LIMIT 1");
		}
		return $checkuser;
	}
	
	public function addUser($email,$pwd1,$pwd2) {
		global $DB,$CONFIG;
		$pwd1=$DB->real_escape_string($pwd1);
		$pwd2=$DB->real_escape_string($pwd2);
		
		if($CONFIG['uservalidation']['useallowedlist']) {
			$email=$this->isAllowed($email);
		} else {
			$email=filter_var($email,FILTER_VALIDATE_EMAIL);
		}
		
		if($email) {
			if(!$checkuser=$this->getUser($email)) {
				if($pwd1==$pwd2) {
					$hash=$this->generateHash($email,$pwd1);
					if($this->listUsers()) {
						// Default role is "user" (can be updated later)
						$user_auth=1;
					} else {
						// Set user role to "admin" if database is empty
						$user_auth=3;
					}
					
					if($add=sql_query("INSERT INTO users SET user_email='$email', user_hash='$hash', user_auth=$user_auth")) {
						$result=array('error' => FALSE, 'user_email' => $email);
					} else {
						$result=array('error' => 'Could not add information to database', 'user_email' => $email);
					}
				} else {
					$result=array('error' => 'Passwords does not match', 'user_email' => $email);
				}
			} else {
				$result=array('error' => 'User already exist', 'user_email' => $email);
			}
		} else {
			$result=array('error' => 'Invalid email', 'user_email' => $email);
		}
		
		return $result;
	}
	
	public function editUser($email,$fields) {
		global $DB;
		if($user=$this->getUser($email)) {
			foreach($fields as $key => $value) {
				// Check if key exists in table
				$key=$DB->real_escape_string($key);
				if(array_key_exists($key,$user)) {
					$value=trim($DB->real_escape_string($value));
					// Only update if value is different from original
					if($user[$key]!=$value) {
						$data[$key]=$value;
						$updates[]="$key='$value'";
					}
				}
			}
			
			if(count($updates)>0) {
				$update_sql=implode(',',$updates);
			} else {
				// No values has changed
				$update_sql=FALSE;
			}
			
			if($update_sql) {
				if($update=sql_query("UPDATE users SET $update_sql WHERE user_email='".$user['user_email']."' LIMIT 1")) {
					$result=array('error' => FALSE, 'data' => $data);
				} else {
					$result=array('error' => 'Could not update database', 'data' => $data);
				}
			} else {
				$result=array('error' => FALSE, 'data' => FALSE);
			}
		} else {
			$result=array('error' => 'User does not exist', 'data' => FALSE);
		}
		
		return $result;
	}
	
	public function listUsers() {
		$query=sql_query('SELECT * FROM users');
		if($query->num_rows>0) {
			while($user=$query->fetch_assoc()) {
				$users[$user['user_email']]=$user;
			}
			return $users;
		} else {
			return FALSE;
		}
	}

	// This is very basic and not very secure but sufficient for the plates application, modify to use stronger hashing algorithm if needed
	// Will output 32 character MD5 hash
	private function generateHash($email,$pwd) {
		global $CONFIG;
		$hash=md5($email.$CONFIG['uservalidation']['salt'].$pwd);
		return $hash;
	}

	private function clearSession() {
		// Unset all session variables related to user validation
		unset($_SESSION['session_email']);
		unset($_SESSION['session_hash']);
	}
	
	private function destroySession() {
		$this->clearSession();
		
		// If it's desired to kill the session, also delete the session cookie.
		// Note: This will destroy the session, and not just the session data!
		if(ini_get("session.use_cookies")) {
		    $params=session_get_cookie_params();
		    setcookie(session_name(), '', time() - 42000,
		        $params["path"], $params["domain"],
		        $params["secure"], $params["httponly"]
		    );
		}
		
		// Finally, destroy the session.
		session_destroy();
	}

	// --- Optional: check external source for list of allowed users (in this case StatusDB)
		
	// Get list of allowed users
	// This function can be modified to retrieve users from any source, output must be an array with all allowed email adresses as values
	private function getAllowedUsers() {
		global $CONFIG;
		$couch=new Couch($CONFIG['couch']['host'],$CONFIG['couch']['port'],$CONFIG['couch']['user'],$CONFIG['couch']['pass']);
		$json=$couch->getView($CONFIG['couch']['views']['users']);
	
	    foreach($json->rows as $object) {
		    $users[]=$object->key;
	    }
	
	    return $users;
	}
	
	// Check if email exists in list of allowed users
	private function isAllowed($email) {
		$users=$this->getAllowedUsers();
	    if(in_array($email,$users)) {
		    return $email;
	    } else {
		    return FALSE;
	    }
	}
}
?>
