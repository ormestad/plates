<?php
if($USER->auth>0) {
	// Logged in
	$user_status_button="<li><button type=\"button\" class=\"tiny button\" onclick=\"location.href='logout.php'\">Logout ".$USER->data['user_email']."</button></li>";
} else {
	// Not logged in
	$user_status_button="<li><button type=\"button\" class=\"tiny button\" onclick=\"location.href='login.php'\">Login</button></li>";
}
?>

<div class="top-bar">
	<div class="top-bar-left">
		<ul class="dropdown menu" data-dropdown-menu>
			<li class="menu-text">PlateJuggler</li>
			<li><a href="index.php">Plates</a></li>
			<li><a href="storage.php">Storage</a></li>
			<li><a href="users.php">Users</a></li>
		</ul>
	</div>

	<div class="top-bar-right">
		<ul class="menu" data-dropdown-menu>
			<?php echo $user_status_button; ?>
		</ul>
	</div>

	<div class="top-bar-right">
		<ul class="menu" id="server_status">
			<li><span class="label" id="lims-status">LIMS</span>&nbsp;</li>
			<li><span class="label" id="couch-status">StatusDB</span>&nbsp;</li>
		</ul>
	</div>
</div>

<?php echo $ALERTS->render(); ?>
