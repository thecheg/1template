<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
	<?php
		if ($pageTitle) {
			$title = $pageTitle.' – '.$defaultTitle;
		} else {
			$title = $defaultTitle;
		}

		if ($pageKeywords) {
			$metaKeywords = $pageKeywords;
		} else {
			$metaKeywords = $defaultKeywords;
		}

		if ($pageDescription) {
			$metaDescription = $pageDescription;
		} else {
			$metaDescription = $defaultDescription;
		}
	?>
	<? if ($metaKeywords): ?>
		<meta name="keywords" content="<?=$metaKeywords?>" />
	<? endif ?>
	<? if ($metaDescription): ?>
		<meta name="description" content="<?=$metaDescription?>" />
	<? endif ?>
	<title><?=$title?></title>
	<link rel="apple-touch-icon" sizes="180x180" href="<?=$rootPath;?>images/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?=$rootPath;?>images/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?=$rootPath;?>images/favicon/favicon-16x16.png">
	<link rel="manifest" href="<?=$rootPath;?>images/favicon/site.webmanifest">
	<link rel="mask-icon" href="<?=$rootPath;?>images/favicon/safari-pinned-tab.svg" color="#ef7fad">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#ffffff">
	<link rel="stylesheet" href="<?=$rootPath;?>css/style.min.css?t=<?=time()?>" />
	<link rel="stylesheet" href="<?=$rootPath;?>css/responsive.min.css?t=<?=time()?>" />
	<!-- front-end by https://chegdev.ru -->
</head>
