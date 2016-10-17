

var http = require('http');

var server = http.createServer(function (req, res) {
	

	/*var url = 'www.google.com.au';
	var body = '<p>Redirecting to <a href = "' + url + '">' + url + '</a></p>';
	
	res.setHeader('Location', url);
	res.setHeader('Content-Length', body.length);
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 302;*/
	res.end('Hello world');
});

server.listen(8888);



