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
	<link rel="apple-touch-icon" sizes="57x57" href="<? echo $rootPath; ?>images/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="<? echo $rootPath; ?>images/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<? echo $rootPath; ?>images/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="<? echo $rootPath; ?>images/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<? echo $rootPath; ?>images/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="<? echo $rootPath; ?>images/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="<? echo $rootPath; ?>images/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="<? echo $rootPath; ?>images/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="<? echo $rootPath; ?>images/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="<? echo $rootPath; ?>images/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<? echo $rootPath; ?>images/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="<? echo $rootPath; ?>images/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<? echo $rootPath; ?>images/favicon/favicon-16x16.png">
	<link rel="manifest" href="<? echo $rootPath; ?>images/favicon/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<link rel="stylesheet" href="<?=$rootPath;?>css/style.min.css?t=<?=time()?>" />
	<link rel="stylesheet" href="<?=$rootPath;?>css/responsive.min.css?t=<?=time()?>" />
</head>
