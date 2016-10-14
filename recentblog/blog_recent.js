
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, resp) {
	getTitles(resp);
} ).listen(8888, "127.0.0.1");

function getTitles(resp) {
	
	fs.readFile('./titles.json', function(err, data) {
		if (err) 
			return hadError(err, resp);
		
		getTemplate(JSON.parse(data.toString()), resp);
	} );
}

function getTemplate(titles, resp) {
	
	fs.readFile('./template.html', function(err, data) {
		if (err) 
			return hadError(err, resp);
		
		formatHtml(titles, data.toString(), resp);
	} );
	
}

function formatHtml(titles, tmpl, resp) {
	
	var html = tmpl.replace('%', titles.join('</li><li>'));
	resp.writeHead(200, {'Content-Type': 'text/html'});
	resp.end(html);
	
}

function hadError(err, resp) {
	
	console.error(err);
	resp.writeHead(402, {'Content-Type': 'text/html'});
	resp.end('Server Error');
}