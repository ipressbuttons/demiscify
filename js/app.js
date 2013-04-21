// Awesome game written in clean JS
// Revealing Module Pattern for the game
var app = (function($,window) {
	// Private Variables (Preserved by closures, not properties)
	var map,
	lives,
	players;

	function processUrl(data) {
		return;
	}

	var publicInit = function() {
		map = 0;
		lives = 0;
		players = [];
	};
	var publicLoadUrl = function(url) {
		$.ajax({
			url: url,
			dataType: 'html',
			success: function(data) {
				processUrl(data);
			}
		});
	};

	// Assign certain private variables to become public
	return {
		init : publicInit,
		loadUrl : publicLoadUrl
	};
})(jQuery,window);