"use strict";

const fs = require("fs");
const formidable = require("formidable");

function reqStart(req, res) {
	console.log("Start function was called");
	res.writeHead(200, {
			"Content-Type" : "text/html"
	})
  	fs.createReadStream("./index.html", "utf-8").pipe(response);
}

function error(req, res) {
	console.log("Error function was called");
	res.writeHead(200, {
		"Content-Type" : "text/html"
	})
	res.write("<h1> 404 not found! </h1>\n");
	res.end();
}

exports.reqStart = reqStart;