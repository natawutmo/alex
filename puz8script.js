$(document).ready(function() {
	$('#mainbutton').click(function() {
		var pw = $('input[name=maininput]').val();
		if (pw === '222999555') {
			document.location.href = "puzpuz9.html";
		}
		else {
			$('#prompt').html('Incorrect password!');
		}
		$('input[name=maininput]').val("");
	});
});
