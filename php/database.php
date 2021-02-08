
<?php 
// REQUETE UPDATE :  UPDATE projects SET pj_status=0 WHERE pj_nom="ClaraDoxal Extension";
// REQUETE IMPORT :  INSERT INTO projects(pj_nom, pj_resume, pj_image, pj_href, pj_tags, pj_status) VALUES('value_nom','value resume', 'value_img', 'value_href', 'value_tags', 'value_status');

function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "admin";
 $dbpass = "123Soleil*";
 $db = "site";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 return $conn;
 }

function CloseCon($conn)
 {
 $conn -> close();
 }

?>
