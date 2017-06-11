$(document).ready(function() {
	$('#mainbutton').click(function() {
		var pw = $('input[name=maininput]').val();
		if (pw === '12345679') {
			document.location.href = "sevenpuzzle.html";
		}
		else {
			$('#prompt').html('Incorrect password!');
		}
		$('input[name=maininput]').val("");
	});
});