"use strict";

const port = 40541;
const srv = require("./server");
const router = require("./router");
const handlers = require("./handlers");

var handle = {
	"/"		: handlers.reqStart,
	"error"	: handlers.error
}

srv.startServer(port, router.route, handle);