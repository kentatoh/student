"use strict";

const url = require('url');

function route(pathname, handle, req, res) {
	if (typeof handle[pathname] === 'function') {
		handle[pathname](req, res);
	} else {
		handle["error"](req, res);
	}
}

exports.route = route;