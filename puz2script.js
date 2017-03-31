$(document).ready(function() {
	var msg = $('#prompt');
	var green = false;
	var blue = false;
	var black = false;
	var red = false;
	var purple = false;
	$('#greenbutton').click(function() {
		var box = $('input[name=greeninput]');
		var val = box.val();
		msg.css('color', 'green');
		if (val === '2098') {
			green = true;
			msg.html('Password accepted!');
			box.attr('disabled', 'disabled');
		}
		else {
			msg.html('Incorrect password!');
			box.val("");
		}
	});
	$('#bluebutton').click(function() {
		var box = $('input[name=blueinput]');
		var val = box.val();
		msg.css('color', 'blue');
		if (val === '9287') {
			blue = true;
			msg.html('Password accepted!');
			box.attr('disabled', 'disabled');
		}
		else {
			msg.html('Incorrect password!');
			box.val("");
		}
	});
	$('#blackbutton').click(function() {
		var box = $('input[name=blackinput]');
		var val = box.val();
		msg.css('color', 'black');
		if (val === '0466') {
			black = true;
			msg.html('Password accepted!');
			box.attr('disabled', 'disabled');
		}
		else {
			msg.html('Incorrect password!');
			box.val("");
		}
	});
	$('#redbutton').click(function() {
		var box = $('input[name=redinput]');
		var val = box.val();
		msg.css('color', 'red');
		if (val === '1245') {
			red = true;
			msg.html('Password accepted!');
			box.attr('disabled', 'disabled');
		}
		else {
			msg.html('Incorrect password!');
			box.val("");
		}
	});
	$('#purplebutton').click(function() {
		var box = $('input[name=purpleinput]');
		var val = box.val();
		msg.css('color', 'purple');
		if (val === '3334') {
			purple = true;
			msg.html('Password accepted!');
			box.attr('disabled', 'disabled');
		}
		else {
			msg.html('Incorrect password!');
			box.val("");
		}
	});
	$('.button').click(function() {
		if (green && blue && black && red && purple) {
			document.location.href = "puz3.html";
		}
	});
});