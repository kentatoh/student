"use strict";

const fs = require("fs");

function reqStart(req, res) {
  console.log("Start function was called");
  fs.readFile("../html/index.html", function (err, data) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(data);
    res.end();
  });
}

function reqStudent(req, res) {
  console.log("Student function was called");
  fs.readFile("../html/student.html", function (err, data) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(data);
    res.end();
  });
}

function reqSearch(req, res) {
  console.log("Search function was called");
  fs.readFile("../html/search.html", function (err, data) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(data);
    res.end();
  });
}

function reqUpload(req, res) {
  console.log("Upload function was called");
  fs.readFile("../html/upload.html", function (err, data) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(data);
    res.end();
  });
}

function error(req, res) {
  console.log("Error function was called");
  res.writeHead(404, {
    "Content-Type": "text/html",
  });
  res.write("<h1>404 not found!</h1>\n");
  res.end();
}

exports.reqStart = reqStart;
exports.reqStudent = reqStudent;
exports.reqSearch = reqSearch;
exports.reqUpload = reqUpload;
exports.error = error;
