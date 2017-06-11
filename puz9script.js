$(document).ready(function() {
	$('#mainbutton').click(function() {
		var pw = $('input[name=maininput]').val();
		if (pw === '8204716287239200471') {
			document.location.href = "fin.html";
		}
		else {
			$('#prompt').html('Incorrect password!');
		}
		$('input[name=maininput]').val("");
	});
});
