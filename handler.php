<?
/*
 * handler.php
 * Matthew Chartier
 *
 * This script accepts requests and dispatches them to various handler
 * functions which output JSON strings in response.
 *
 */

// establish connection with database and define constants
require_once('includes/common.php');

// return JSON object containing list of concentration names and IDs
function getConcentrations() {
    $sql = "SELECT * FROM `concentrations`";
    $result = mysql_query($sql);

    $rows = array();
    while($r = mysql_fetch_assoc($result)) {
	$rows[] = $r;
    }
    print json_encode($rows);
}

switch($opcode) {
case GETCONCENTRATIONS:
    getConcentrations();  
    break;
default:
}

?>