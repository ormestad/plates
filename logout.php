<?php
require 'lib/global.php';
$USER->logout();
header('Location:index.php');