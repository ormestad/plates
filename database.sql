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
  `storage_id` int(11) DEFAULT NULL,
  `cols` int(11) DEFAULT NULL,
  `rows` int(11) DEFAULT NULL,
  `slots` int(11) DEFAULT NULL,
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
