<?php
function notFound(){
  header("HTTP/1.0 404 Not Found");
  echo "File not found.";
  die();
}

if($_GET['file']){

  if($_GET['file'] == 1) {
    $file = 'Jhon music - Quien Te Enamore (Oficial Audio).mp3';
    $fsize = filesize($file);
    $shortlen = $fsize-1;
  }

  if (file_exists($file)) {
      header("Pragma: public");
      header("Expires: 0"); 
      header("Content-Type: audio/mpeg");
      header('Content-Length: ' . $fsize);
      header('Content-Disposition: inline; filename="' . basename($file) . '"');
      header( 'Content-Range: bytes 0-'.$shortlen.'/'.$fsize); 
      header( 'Accept-Ranges: bytes');
      header('X-Pad: avoid browser bug');
      header('Cache-Control: no-cache');
      header('Etag: ' . $etag);

      // header('Content-Description: File Transfer');
      // header('Content-Type: application/octet-stream');
      // header('Content-Disposition: attachment; filename='.basename($file));
      // header('Content-Transfer-Encoding: binary');
      // header('Expires: 0');
      // header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
      // header('Pragma: public');
      ob_clean();
      flush();
      readfile($file);
      exit;
      return die();
  }

}
return notFound();
?>