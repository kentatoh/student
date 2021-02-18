"use strict";

function route(handle, pathname, req, res) {
  console.log(typeof handle[pathname]);
  if (typeof handle[pathname] === "function") {
    handle[pathname](req, res);
  } else {
    handle["error"](req, res);
  }
}

exports.route = route;
