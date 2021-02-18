"use strict";

var http = require('http');
var url = require('url');


function startServer(port, route, handle) {
	http.createServer(function(req, res) {
		var parsedUrl = url.parse(req.url);
		var path = parsedUrl.pathname;

		console.log("Request for " + path + "...");
	}).listen(port);

	console.log("Server running on port " + port + " with PID " + process.pid);
}

exports.startServer = startServer;