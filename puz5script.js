$(document).ready(function() {
	$('.tile').click(function() {
		$(this).addClass('seltile');
	});
	$('#mainbutton').click(function() {
		var pw = $('input[name=maininput]').val();
		if (pw === '1009224872') {
			document.location.href = "puzsix.html";
		}
		else {
			$('#prompt').html('Incorrect password!');
		}
		$('input[name=maininput]').val("");
	});
});