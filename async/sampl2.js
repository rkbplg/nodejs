
setTimeout(function() {

	console.log('First');

	setTimeout(function() {

		console.log('Second');
		
		setTimeout(function() {
		
			console.log('Third');
			
		}, 10000);
	}, 5000);

}, 1000);