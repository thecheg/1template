<?php
	require 'config.php';
	require 'class.phpmailer.php';
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$question = $_POST['question'];
	$maillist = explode('|', $emailsArr);
	$formType = $_POST['formType'];
	$formTitle = $_POST['formTitle'];
	$senddate = date('d.m.y H:i:s');
	$table_font = 'color:#2C3E50;font-family:\'Roboto\', \'Helvetica\', \'Helvetica Neue\', Arial, sans-serif;font-weight:light;';
	$table_style = 'border-collapse:collapse;width:100%;max-width:400px; background-color:#ffffff;font-size:14px;line-height:20px;';
	$td1_style = 'border:1px solid #BDC3C7;width:40%;padding:10px; background-color:#EBEBEB;';
	$td2_style = 'border:1px solid #BDC3C7;width:60%;padding:10px;';
	$tableTitle = '';
	if ($formType == 'callback') {
		$tableTitle = 'Заказ звонка';
	} else if ($formType == 'question') {
		$tableTitle = 'Вопрос';
	} else {
		$tableTitle = 'Заявка с сайта';
	}
	$msg_head = "
		<html><body><div style=\"background-color:#eeeeee;padding:30px 10px;\"><center>
			<table style=\"border-collapse:collapse;width:100%;max-width:400px;$table_font\">
				<tr>
					<td style=\"font-weight:bold;font-size:20px;line-height:24px;\">$tableTitle</td>
				</tr>
					<tr>
					<td style=\"padding:5px 0 10px 0;font-weight:regular;font-size:12px;line-height:14px;\">".$senddate."</td>
				</tr>
			</table>
			<table style=\"$table_font $table_style\">";
	$msg_foot = "
			</table>
		</center></div></body></html>";
	$msg_name = "
		<tr>
			<td style=\"$td1_style\">Имя</td>
			<td style=\"$td2_style\">$name</td>
		</tr>";
	$msg_email = "
		<tr>
			<td style=\"$td1_style\">E-mail</td>
			<td style=\"$td2_style\">$email</td>
		</tr>";
	$msg_phone = "
		<tr>
			<td style=\"$td1_style\">Телефон</td>
			<td style=\"$td2_style\">$phone</td>
		</tr>";
	$msg_question = "
		<tr>
			<td style=\"$td1_style\">Вопрос</td>
			<td style=\"$td2_style\">$question</td>
		</tr>";
	$mail = new PHPMailer();
	$mail->From = 'no-reply@'.$_SERVER['SERVER_NAME']; // от кого
	$mail->FromName = $sitename; // от кого
	foreach ($maillist as $mail_send) {
		$mail->AddAddress($mail_send); // кому - адрес, Имя
	}
	$mail->IsHTML(true); // выставляем формат письма HTML
	if($formType == 'callback') {
		$subj = $siteName.' / Заказ обратного звонка / '.$senddate; // тема письма
		$mailbody = $msg_head.$msg_name.$msg_phone.$msg_foot; // тело письма
	}
	if($formType == 'question') {
		$subj = $siteName.' / Вопрос с сайта / '.$senddate; // тема письма
		$mailbody = $msg_head.$msg_name.$msg_phone.$msg_email.$msg_question.$msg_foot; // тело письма
	}
	if($formType == 'request') {
		$subj = $siteName.' / '.$formTitle.' / '.$senddate; // тема письма
		$mailbody = $msg_head.$msg_name.$msg_email.$msg_phone.$msg_foot; // тело письма
	}
	if (isset($_FILES['file'])) {
		$tmp_attachment = array_combine($_FILES['file']['tmp_name'],$_FILES['file']['name']);
		foreach ($tmp_attachment as $k=>$v) {
			$mail->AddAttachment($k, $v);
		}
	}
	$mail->Subject = $subj;
	$mail->Body = $mailbody;
	if ($mail->Send()) { echo json_encode(true); } else { echo json_encode(false); }
?>