<?php
// url 请求
$arr_query = convertUrlQuery($_SERVER["QUERY_STRING"]);
function convertUrlQuery($query)
{
    $queryParts = explode('&', $query);

    $params = array();
    foreach ($queryParts as $param)
    {
        $item = explode('=', $param);
        $params[$item[0]] = $item[1];
    }

    return $params;
}
// echo json_encode($arr_query, JSON_UNESCAPED_UNICODE);
$cmd = $arr_query['cmd'];
$type = $arr_query['type'];
$value = intval($arr_query['value']);
// mysql
$dbhost = '127.0.0.1';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = 'MY53695a';        // mysql用户名密码
$dbpower = 'english36s';
$con = new MySQLi($dbhost, $dbuser, $dbpass, $dbpower);
if(!$con)
    die("connect error:".mysqli_connect_error());
// else
//     echo "success connect mysql<br />";
$con->set_charset('utf-8');

// get
if ($cmd == 'eq') {
    $sql = 'select word from '.$type.' where unit = '.((string)$value % 10);
    $value = floor($value / 10);
    while ($value > 0) {
        $sql .= ' union select word from '.$type.' where unit = '.((string)$value % 10);
        $value = floor($value / 10);
    }
} else {
    $sql = 'select word from '.$type.' where unit between '.(string)floor($value / 1000).' and '.(string)floor($value % 1000);
}
$sql .= ';';
$rs = $con->query($sql);
$c = array();
while($r = $rs->fetch_row()) {
    array_push($c, $r[0]);
}
// random
// $res = array();
$res = "{";
$get = array();
$len = 4;
if ($type == 'tr')
    $len = 2;
if ($type == 'to')
    $len = 1;
for ($i = 0; $i < $len; $i++) {
    $tmp = array_rand($c, 1);
    while (in_array($tmp, $get))
        $tmp = array_rand($c, 1);
    array_push($get, $tmp);
    // array_push($res, $c[$tmp]);
    // $res[$i] => $c[$tmp];
    if ($i != 0)
        $res .= ', ';
    $res .= '"a'.(string)$i.'": "'.$c[$tmp].'"';
}
$res .= '}';
echo $res;
$con->close();
?>
