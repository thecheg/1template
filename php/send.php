<?php
	$filename = 'send_number.sn';
	$number = file_get_contents($filename);
	$number = $number + 1;
	$numberNew = number;
	if(numberNew < 100) {
		$numberNew = '0'.$number;
	} else if(numberNew < 10) {
		$numberNew = '00'.$number;
	} else {
		$numberNew = $number;
	}
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$question = $_POST['question'];
	$referrer = $_POST['referrer'];
	$refUrl = $_POST['refUrl'];
	$siteName = $_POST['siteName'];
	$formTitle = $_POST['formTitle'];
	$submit = $_POST['submit'];
	$maillist = explode('|', $_POST['emailsArr']);
	$headers  = 'Content-type: text/html; charset=utf-8'."\r\n".'From: '.$siteName.' <no-reply@'.$_SERVER['SERVER_NAME'].'>';
	$table_font = 'color:#2C3E50;font-family:\'Roboto\', \'Helvetica\', \'Helvetica Neue\', Arial, sans-serif;font-weight:light;';
	$table_style = 'border-collapse:collapse;width:100%;max-width:400px; background-color:#ffffff;font-size:16px;line-height:20px;';
	$td1_style = 'border:1px solid #BDC3C7;width:40%;padding:10px; background-color:#EBEBEB;';
	$td2_style = 'border:1px solid #BDC3C7;width:60%;padding:10px;';
	$tableTitle = '';
	if($submit == 'callback') {
		$tableTitle = 'Заказ зввонка';
	} else if($submit == 'question') {
		$tableTitle = 'Вопрос менеджеру';
	} else {
		$tableTitle = $formTitle;
	}
	$msg_head = "
		<html><body><div style=\"background-color:#eeeeee;padding:30px 10px;\"><center>
				<table style=\"border-collapse:collapse;width:100%;max-width:400px;$table_font\">
					<tr>
						<td style=\"font-weight:bold;font-size:20px;line-height:24px;\">$tableTitle</td>
					</tr>
					<tr>
						<td style=\"padding:5px 0 10px 0;font-weight:regular;font-size:12px;line-height:14px;\">".date('d.m.y H:i:s')."</td>
					</tr>
				</table>
				<table style=\"$table_font $table_style\">";
	$msg_name = "
					<tr>
						<td style=\"$td1_style\">Имя</td>
						<td style=\"$td2_style\">$name</td>
					</tr>";
	$msg_phone = "
					<tr>
						<td style=\"$td1_style\">Номер телефона</td>
						<td style=\"$td2_style\">$phone</td>
					</tr>";
	$msg_email = "
					<tr>
						<td style=\"$td1_style\">E-mail</td>
						<td style=\"$td2_style\">$email</td>
					</tr>";
	$msg_ques = "
					<tr>
						<td style=\"$td1_style vertical-align: top;\">Вопрос</td>
						<td style=\"$td2_style\">$question</td>
					</tr>";
	$msg_refs = "
					<tr>
						<td style=\"$td1_style vertical-align: top;\">Реферер</td>
						<td style=\"$td2_style\">$referrer</td>
					</tr>
					<tr>
						<td style=\"$td1_style vertical-align: top;\">utm-метки</td>
						<td style=\"$td2_style\">$refUrl</td>
					</tr>";
	$msg_foot = "
				</table>
			</center></div></body></html>";
	if($submit == 'callback') {
		$subject = "$siteName | "."#".$numberNew." от ".date('d.m.y')." Заказ обратного звонка";
		$message = $msg_head.$msg_name.$msg_phone.$msg_refs.$msg_foot;
	}
	if($submit == 'request') {
		$subject = "$siteName | "."#".$numberNew." от ".date('d.m.y')." ".$formTitle;
		$message = $msg_head.$msg_name.$msg_phone.$msg_email.$msg_refs.$msg_foot;
	}
	if($submit == 'question') {
		$subject = "$siteName | "."#".$numberNew." от ".date('d.m.y')." Вопрос менеджеру";
		$message = $msg_head.$msg_name.$msg_phone.$msg_email.$msg_ques.$msg_refs.$msg_foot;
	}
	foreach ($maillist as $mail) {
		mail($mail, $subject, $message, $headers) or print "Не могу отправить письмо !!!";
	}
	unset($name,$email,$phone,$question,$referrer);

	file_put_contents($filename, $number);
?>