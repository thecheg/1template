	<?php include $rootPath.'template/svg-sprite.php';?>
	<script type="text/javascript">
		// config
		var rootPath = '<?php echo $rootPath;?>',
			serviceName = '<?php echo $serviceName;?>',
			siteName = '<?php echo $siteName;?>';
	</script>
	<script type="text/javascript" src="<? echo $rootPath; ?>js/plugins.min.js?t=<?=time()?>"></script>
	<script type="text/javascript" src="<? echo $rootPath; ?>js/scripts.min.js?t=<?=time()?>"></script>