var change = function(){
	//set change variables
	
	var total = $('#total').val();
	//get user input "total"
	console.log(total);
	//test
	var received = $('#received').val();
	//get user input "received"
	console.log(received);
	//test
	//get answer to break into change
	var answer = received - total;

	var dollar = Math.floor((answer * 100)/100);

	var remaining = (answer * 100)% 100;
	var quarter = Math.floor(remaining /25);

	remaining = remaining % 25;
	var dime = Math.floor(remaining /10);

	remaining = remaining % 10;
	var nickel = Math.floor(remaining /5);

	remaining = remaining % 5;
	var penny = Math.round(remaining /1);


	//print message to screen
	$('#d').html('Your change is ' + dollar + ' dollar(s)')
	$('#c').html(' and ' + quarter + dime + nickel + penny) 
} 




