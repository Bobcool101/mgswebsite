<html lang="en">
<head>
    <meta name="robots" content="noindex, nofollow" />
    <meta name="referrer" content="no-referrer" />
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }
    </style>
    <script src="//ssl.p.jwpcdn.com/player/v/8.26.0/jwplayer.js"></script>
    <script>
        jwplayer.key = 'XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo';
    </script>
</head>
<body>
    <script type="text/javascript">
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\[").replace(/[\]]/, "\]");
            var regex = new RegExp("[\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        var get = getParameterByName('get');
        var key = getParameterByName('key');
        var key2 = getParameterByName('key2');
        var getIMG = getParameterByName('img');
    </script>
    <div id="player"></div>
    <script type="text/javascript">
        var playerInstance = jwplayer("player");

        playerInstance.setup({
	"playlist": [
		{
			"sources": [
				null,
				{
					"default": false,
					"type": "hls",
					"file": "https://dfwlive-v1-c7p3-sponsored.s.llnwi.net/Content/HLS.cps/Live/channel(AandEHD-1382.dfw.1080)/index.m3u8",
					"drm": {
						"clearkey": {
							"keyId": "000788d4f064933b7c1304069155468a",
							"key": "80516601a229189b1e3100dcece9ad9d"
						}
					},
					"label": "1"
				},
				{
					"default": true,
					"type": "hls",
					"file": "https://dfwlive-v1-c7p3-sponsored.s.llnwi.net/Content/HLS.cps/Live/channel(AandEHD-1382.dfw.1080)/index.m3u8",
					"drm": {
						"widevine": {},
						"playready": {}
					},
					"label": "2"
				}
			]
		}
	],
            width: "100%",
            height: "100%",
            aspectratio: "16:9",
            autostart: false,
            cast: {},
            sharing: {}
        });
    </script>
<script>
  window.user.key = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoyNDkyNDcsInBhc3MiOjEzMjYsInZpZGVvIjoyNDk1Niwic2Vzc2lvbiI6MTh9.lPf96fa3CYxvK4vqoeotF911JK3O1AERx-la0HbCv8k';
</script>
<script disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool'></script>
</body>
</html>