$(document).ready(function() {
	$('#mainbutton').click(function() {
		var pw = $('input[name=maininput]').val();
		if (pw === '111888444') {
			document.location.href = "8puz.html";
		}
		else {
			$('#prompt').html('Incorrect password!');
		}
		$('input[name=maininput]').val("");
	});
});

