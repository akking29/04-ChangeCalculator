var change = function(){
	//set change variables
	
	var total = parseFloat($('#total').val());
	//get user input "total"
	total = total.toFixed(2);
	console.log(total);
	//test
	var received = parseFloat($('#received').val());
	//get user input "received"
	received = received.toFixed(2);
	console.log(received);
	//test
	var answer = received - total;
	answer = answer.toFixed(2);

	$('#answer').html('$' + answer + ' is your change.'); 

}

