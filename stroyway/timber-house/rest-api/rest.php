<?php
define('CRM_HOST', 'atlant201924.bitrix24.ru');
define('CRM_PORT', '443');
define('CRM_PATH', '/crm/configs/import/lead.php');

define('CRM_LOGIN', 'ludochek19822108@gmail.com');
define('CRM_PASSWORD', 'vjyujk1982');

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$leadData = $_POST['DATA'];

	$postData = array(
		'TITLE' => $leadData['TITLE'],
    	'PHONE_WORK' => $leadData['PHONE_WORK'],
		'COMMENTS' => $leadData['ANSWER'],
		'OPPORTUNITY' => $leadData['OPPORTUNITY'],
	);

	if (defined('CRM_AUTH'))
	{
		$postData['AUTH'] = CRM_AUTH;
	}
	else
	{
		$postData['LOGIN'] = CRM_LOGIN;
		$postData['PASSWORD'] = CRM_PASSWORD;
	}

	$fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
	if ($fp)
	{
		$strPostData = '';
		foreach ($postData as $key => $value)
			$strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);

		$str = "POST ".CRM_PATH." HTTP/1.0\r\n";
		$str .= "Host: ".CRM_HOST."\r\n";
		$str .= "Content-Type: application/x-www-form-urlencoded\r\n";
		$str .= "Content-Length: ".strlen($strPostData)."\r\n";
		$str .= "Connection: close\r\n\r\n";

		$str .= $strPostData;

		fwrite($fp, $str);

		$result = '';
		while (!feof($fp))
		{
			$result .= fgets($fp, 128);
		}
		fclose($fp);

		$response = explode("\r\n\r\n", $result);

		$output = '<pre>'.print_r($response[1], 1).'</pre>';
	}
	else
	{
		echo 'Connection Failed! '.$errstr.' ('.$errno.')';
	}
}
else
{
	$output = '';
}
?>
