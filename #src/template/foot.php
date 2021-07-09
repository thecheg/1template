<?php include $rootPath.'template/svg-sprite.php';?>
	<script>
		// config
		var rootPath = '<?=$rootPath;?>',
			siteName = '<?=$siteName;?>';
	</script>
	<script src="<?=$rootPath;?>js/plugins.min.js?t=@@include('@@webRoot/timestamp.txt')"></script>
	<script src="<?=$rootPath;?>js/scripts.min.js?t=@@include('@@webRoot/timestamp.txt')"></script>
