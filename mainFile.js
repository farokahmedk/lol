<script type="text/javascript" src="https://cdn.jsdelivr.net/clappr/latest/clappr.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/clappr.level-selector/latest/level-selector.min.js"></script>
<div id="oper"></div>
<div id="vid"></div>
<script>
 player = new Clappr.Player({
 source: "PASTE YOUR M3U8 LINK HERE",
 mimeType: "application/x-mpegURL",
 autoPlay: true, 
 height: "400",
 width: "100%",
 plugins: {"core": [LevelSelector]}, 
 parentId: "#vid"});
</script>
