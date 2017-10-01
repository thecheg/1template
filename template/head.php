<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
	<? if($metaKeywords): ?>
		<meta name="keywords" content="<?=$metaKeywords?>" />
	<? endif ?>
	<? if($metaDescription): ?>
		<meta name="description" content="<?=$metaDescription?>" />
	<? endif ?>
	<? 
		$title = $defaultTitle;
		if ($pageTitle) {
			$title = $pageTitle;
		}
	?>
	<title><?=$title?></title>
	<link rel="shortcut icon" href="<? echo $rootPath; ?>images/favicon.ico" type="image/x-icon">
	<link rel="icon" href="<? echo $rootPath; ?>images/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="<? echo $rootPath; ?>css/style.min.css" />
	<link rel="stylesheet" href="<? echo $rootPath; ?>css/responsive.min.css" />
	<link rel="stylesheet" href="<? echo $rootPath; ?>css/fancybox.min.css" />
</head>