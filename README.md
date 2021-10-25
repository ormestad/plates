# NGI Plate database

A tool for keeping track of plates used at NGI. 

## Location barcodes

Storage units (e.g. freezers and fridges), racks and positions within racks all have specific ID's described below:

- Full position barcode: `R[NNNN]X[NN]Y[NN]`
- Rack location only: `R[NNNN]_`
- Storage unit only: `S[NNNN]`

S: Storage unit, R: Rack, X/Y: position

## Authentication

Login using password is not required. Users enter their scilifelab email address which is checked against the list of allowed users in StatusDB.

## Back end

Tested on Apache (MAMP), PHP 7.1.1 and MySQL 5.6.35

Barcode generation: <https://github.com/davidscotttufts/php-barcode>

## Front end

This site use the framework "Foundation" (<http://foundation.zurb.com/>), version 6.3.0.
It also requires a JavaScript enabled browser.

## Configuration

The necessary credentials for connecting to database, LIMS and StatusDB is added to the file `config.php` that's placed in the root directory: 

```php
<?php
$CONFIG=array(
	'mysql' => array(
		'user'   => '',
		'pass'   => '',
		'db'   => '',
		'server' => ''
	),
	'clarity' => array(
		'user'   => '',
		'pass'   => '',
		'uri'  => ''
	),
	'couch' => array(
		'user'   => '',
		'pass'   => '',
		'host'  => '',
		'port'  => '',
		'views'  => array(
			'users'  => '',
			'projects' => ''
		)
	),
	'uservalidation' => array(
		'salt'    => '',
		'useallowedlist' => TRUE,
		'roles'    => array('Disabled','User','Manager','Administrator')
	)
);
```

## Database schema

The database structure can be created using the file `db_init/init.sql`. 
x
## Developing using Docker

If you wish, you can use Docker to run this website on your computer for testing and development.

First, create a file in the root of this repository called `config.php` as described above,
with the following MySQL credentials:

```php
'mysql' => array(
	'user'   => 'platesdb_admin',
	'pass'   => '9jHdM4KM3uqD6EtuU7',
	'db'   => 'platesdb',
	'server' => 'db'
),
```

Then run `docker compose up` to fetch all requirements and create the containers.
You should be able to visit the website in your browser at <http://localhost:8888/>

To stop the servers, just press <ctrl>+<c> (windows / linux) / <cmd>+<c> (mac).
