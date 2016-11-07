<?php
	function getDomain(){
		return '@@renewDomain';
	}
 	header("Access-Control-Allow-Origin: ".getDomain());
	header("Access-Control-Allow-Credentials: true");
	date_default_timezone_set('UTC');
	function throwError($message, $statusCode = '400'){
		header('HTTP/1.0 '.$statusCode);
		die($message);
	}
	function getGitID(){
		$fileName = '.renewMe';
		if(is_file($fileName) && filesize($fileName) > 0){
			$file = fopen($fileName, "r");
			$data = fread($file, filesize($fileName));
			$dot = explode('.', $data);
			$dolar = explode('$', $dot[1]);
			$expDate = encrypt_decrypt('decrypt', base64_decode($dot[0]));
			$gitID = $dolar[0];
			fclose($file);
			if(empty($gitID)) 
				return throwError('',404);
			else return $gitID;
		} else die(true);
	}
	function encrypt_decrypt($action, $string) {
	    $output = false;
	    $encrypt_method = "AES-256-CBC";
	    $secret_key = 'This is my secret key';
	    $secret_iv = 'This is my secret iv';
	    // hash
	    $key = hash('sha256', $secret_key);
	    
	    // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
	    $iv = substr(hash('sha256', $secret_iv), 0, 16);
	    if( $action == 'encrypt' ) {
	        $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
	        $output = base64_encode($output);
	    } else if( $action == 'decrypt' ){
	        $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
	    }
	    return $output;
	}
	function checkRenew(){
		$curl = curl_init();
		$timeout = 5;
		$url = getDomain().'/api/renew/check?g='.getGitID();
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_HEADER, false);
		curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, $timeout);
  		$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
		curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    		'origin: '.$actual_link
    	));
		curl_exec($curl);
		if (!curl_errno($curl)) {
		  switch ($http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE)) {
		    case 200:  # OK
		    	return die(false);
		    case 404:
		    	return die(true);
		    default:
	 			return throwError('Unexpected HTTP code: '. $http_code, 400);
		  }
		}
		curl_close($curl);
	}
	$fileName = '.renewMe';
	$renewMe = '.renewMe.php';
	$date = getdate();
	$date = $date[0];
	if(is_file($renewMe) && filesize($renewMe) > 0){
		if(is_file($fileName) && filesize($fileName) == 0) checkRenew();
		else if(is_file($fileName) && filesize($fileName) > 0){
			$fileR = fopen($fileName, "r");
			$data = fread($fileR, filesize($fileName));
			$dot = explode('.', $data);
			$dolar = explode('$', $dot[1]);
			$expDate = encrypt_decrypt('decrypt', base64_encode($dot[0]));
			if(empty($expDate) || $expDate <= $date && $date >= $expDate){
				fclose($fileR);
				checkRenew();
			} else die(false);
		} else die(true);
	} else die(true);
	flush();
	ob_end_clean();
	die();
?>