$(document).ready(function() {
	var msg = $('#prompt');
	var green = false;
	var blue = false;
	var black = false;
	var red = false;
	var purple = false;
	$('#ff0000button').click(function() {
		var box = $('input[name=ff0000input]');
		var val = box.val();
		msg.css('color', '#F00000');
		if (val === '789341') {
			green = true;
			msg.html('Password accepted!');
			box.attr('disabled', 'disabled');
		}
		else {
			msg.html('Incorrect password!');
			box.val("");
		}
	});
	$('#ff3030button').click(function() {
		var box = $('input[name=ff3030input]');
		var val = box.val();
		msg.css('color', '#FF3030');
		if (val === '226901') {
			blue = true;
			msg.html('Password accepted!');
			box.attr('disabled', 'disabled');
		}
		else {
			msg.html('Incorrect password!');
			box.val("");
		}
	});
	$('#ff6060button').click(function() {
		var box = $('input[name=ff6060input]');
		var val = box.val();
		msg.css('color', '#FF6060');
		if (val === '199562') {
			black = true;
			msg.html('Password accepted!');
			box.attr('disabled', 'disabled');
		}
		else {
			msg.html('Incorrect password!');
			box.val("");
		}
	});
	$('#ff9090button').click(function() {
		var box = $('input[name=ff9090input]');
		var val = box.val();
		msg.css('color', '#FF9090');
		if (val === '563560') {
			red = true;
			msg.html('Password accepted!');
			box.attr('disabled', 'disabled');
		}
		else {
			msg.html('Incorrect password!');
			box.val("");
		}
	});
	$('#ffc0c0button').click(function() {
		var box = $('input[name=ffc0c0input]');
		var val = box.val();
		msg.css('color', '#FFC0C0');
		if (val === '489754') {
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
			document.location.href = "puz5.html";
		}
	});
});