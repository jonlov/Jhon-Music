<?php 
	function throwError($message){
		header('HTTP/1.0 400 Bad Request');
		die($message);
	}

  	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		require 'PHPMailerAutoload.php';

		$name = htmlspecialchars($_POST['name']);
		$email = htmlspecialchars($_POST['email']);
		$message = htmlspecialchars($_POST['message']);

		if(preg_match( "/[\r\n]/", $data['name']) || preg_match( "/[\r\n]/", $data['email']) || preg_match( "/[\r\n]/", $data['message'])) throwError('Error.');
		if(count($data['message']) >= 30) throwError('Message should be at least 30 characteres.');
		if($name == '' || $email == '' || $message == '') throwError('All the fields are required.');
		if(!filter_var($email, FILTER_VALIDATE_EMAIL)) throwError('Invalid email');

		$mail = new PHPMailer;

		$mail->SMTPDebug = 0;                               // Enable verbose debug output

		$mail->isSMTP();                                      // Set mailer to use SMTP
		$mail->Host = 'cpanel-006-slc.hostingww.com';  // Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                               // Enable SMTP authentication
		$mail->Username = 'no-reply@jhonmusic.com';                 // SMTP username
		$mail->Password = 'B+x7qB1VTP?V';                           // SMTP password
		$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
		$mail->Port = 587;                                    // TCP port to connect to

		$mail->setFrom('no-reply@jhonmusic.com', $name . ' - JhonMusic.com');
		$mail->addAddress('rockjonathan18@gmail.com', $name);     // Add a recipient
		// $mail->addReplyTo('info@example.com', 'Information');
		
		$mail->isHTML(true);                                  // Set email format to HTML

		$mail->Subject = 'Mensaje de ' . $name;

		$mail->Body    = '<b>Nombre: </b>'. $name .'<br /> <b>Email: </b>'. $email .
						'<br /> <b>Mensaje: </b>'. $message;

		$mail->AltBody = 'Nombre: '. $name .' | Email: '. $email .' | Mensaje: '. $message;

		if(!$mail->send()) {
    		// header('HTTP/1.0 400 Bad Request');
		    // echo 'Message could not be sent.';
		    // echo 'Mailer Error: ' . $mail->ErrorInfo;
    		throwError('Message could not be sent.');
		} else {
		    echo 'Message has been sent';
		}
	        
  	} else {
    	throwError('Bad request.');     
  	}
?>