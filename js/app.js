$(document).foundation();

// Any code tag with the class name "plate" can be clicked to add plate data to plate input field
$.fn.plateClick = function() {
    return this.each(function() {
		$(this).on("click", function() {
			var VAL = $(this).text();
			$("#plate").val(VAL).trigger("keyup");
		});
    });
};

$(document).ready(function() {
	// Update server status flags (using Foundation class names success|alert)
	$.ajax({
		url: '_status.php', 
		dataType: 'json', 
		success: function(json) {
			$.each(json,function(key,status) {
				$("#" + key).fadeOut('fast', function() {
					$(this).addClass(status).fadeIn('slow');
				});
			});
		}
	});
	
	// Automatically focus on first empty input field in all forms
	$('form').find('*').filter(":input[value='']:visible:first").focus();
	
	$("#user_hash").on("paste, keyup", function() {
		var LEN = this.value.length;
		if(LEN == 32) {
			$("#plate").focus();
		}
	});

	// Any code tag with the class name "position" can be clicked to add position data to position input field
	$("code.position").on("click", function() {
		var VAL = $(this).text();
		$("#position").val(VAL).trigger("keyup");
	});

	$("code.plate").plateClick();

	// Automatically trigger visualization of storage units and racks depending on what's entered in position input field
	$("#position").on("paste, keyup", function() {
		var VAL = this.value;
		var position_storage = new RegExp('^S[0-9]{4}$');
		var position_rack = new RegExp('^R[0-9]{4}X00Y00$');
		var position_full = new RegExp('^R[0-9]{4}X[0-9][1-9]Y[0-9][1-9]$');
		
		if(position_storage.test(VAL) || position_rack.test(VAL) || position_full.test(VAL)) {
			var request=$.ajax({
				url: "_rackview.php", 
				method: "POST", 
				data: { position : VAL }, 
				dataType: "html"
			});
		
			request.done(function(msg) {
				$("#query_data").html(msg);
				$("table.rack td").not(".full").click(function() {
					$("table.rack td").removeClass("selected");
					$(this).addClass("selected");
					var VAL=$(this).attr("data-position");
					$("#position").val(VAL).trigger("keyup");
				});
			});
		} else {
			$("#query_data").html("");
		}
	});

	$("#plate").on("paste, keyup", function() {
		var VAL = this.value;
		
		if(VAL.length>3) {
			var request=$.ajax({
				url: "_platesearch.php", 
				method: "POST", 
				data: { query : VAL }, 
				dataType: "html"
			});
		
			request.done(function(msg) {
				$("#query_data").html(msg);
				$("code.plate").plateClick();
			});
		} else {
			$("#query_data").html("");
		}
	});

	// http://stackoverflow.com/questions/4220126/run-javascript-function-when-user-finishes-typing-instead-of-on-key-up	
	var typingTimer;				//timer identifier
	var doneTypingInterval = 200;	//time in ms
	
	//on keyup, start the countdown
	$('#batch_data').on('keyup', function (e) {
		clearTimeout(typingTimer);
		typingTimer = setTimeout(doneTyping, doneTypingInterval);
	});
	
	//on keydown, clear the countdown 
	$('#batch_data').on('keydown', function () {
		clearTimeout(typingTimer);
	});
	
	//user is "finished typing," do something
	function doneTyping() {
		var request=$.ajax({
			url: "_batchimport.php", 
			method: "POST", 
			data: { barcode : $("#batch_data").val(), filename : $("input[name=filename]").val(), uid : $("input[name=uid]").val() }, 
			dataType: "json"
		});
	
		request.done(function(json) {
			// PHP script will validate data and write to temp file
			if(json.error) {
				$("#batch_data").val('');
				$("#batch_message").html(json.error);
			} else {
				if(json.position) {
					// We have been returned a plate,postion value pair
					$("#batch_data").val('');
					$("#batch_list").append(json.html);
					$("#batch_message").html('Plate and position recorded');
				} else {
					// First part, plate barcode
					$("#batch_data").val(json.plate);
					$("#batch_message").html('Plate scanned');
				}
			}
		});
	}
});
