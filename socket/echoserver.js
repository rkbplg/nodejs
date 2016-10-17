
var net = require('net');

var server = net.createServer(function(socket) {
	
	socket.once('data', function(data) {
		socket.write('Returned: ' + data);
	});
});
server.listen(8888);