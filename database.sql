# Dump of table plates
# ------------------------------------------------------------

DROP TABLE IF EXISTS `plates`;

CREATE TABLE `plates` (
  `plate_id` varchar(50) NOT NULL DEFAULT '',
  `status` varchar(15) DEFAULT NULL,
  `rack_id` int(11) DEFAULT NULL,
  `col` int(11) DEFAULT NULL,
  `row` int(11) DEFAULT NULL,
  `log` text,
  PRIMARY KEY (`plate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table racks
# ------------------------------------------------------------

DROP TABLE IF EXISTS `racks`;

CREATE TABLE `racks` (
  `rack_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `rack_name` varchar(30) DEFAULT NULL,
  `rack_description` text,
  `rack_status` varchar(15) DEFAULT NULL,
  `storage_id` int(11) DEFAULT NULL,
  `cols` int(2) DEFAULT NULL,
  `rows` int(2) DEFAULT NULL,
  `slots` int(11) DEFAULT NULL,
  `log` text,
  PRIMARY KEY (`rack_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table storage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `storage`;

CREATE TABLE `storage` (
  `storage_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `storage_status` varchar(15) DEFAULT NULL,
  `storage_name` varchar(50) DEFAULT NULL,
  `storage_description` text,
  `storage_type` varchar(10) DEFAULT NULL,
  `storage_temp` int(3) DEFAULT NULL,
  `storage_location` varchar(50) DEFAULT NULL,
  `log` text,
  PRIMARY KEY (`storage_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(100) DEFAULT NULL,
  `user_hash` char(32) DEFAULT NULL,
  `user_auth` int(1) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;