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

function reqIndexCss(req, res) {
  console.log("Index CSS function was called");
  res.writeHead(200, {
    "Content-Type": "text/css",
  });
  fs.createReadStream("../css/index.css").pipe(res);
}

function reqStudentCss(req, res) {
  console.log("Student CSS function was called");
  res.writeHead(200, {
    "Content-Type": "text/css",
  });
  fs.createReadStream("../css/student.css").pipe(res);
}

function reqSearchCss(req, res) {
  console.log("Search CSS function was called");
  res.writeHead(200, {
    "Content-Type": "text/css",
  });
  fs.createReadStream("../css/search.css").pipe(res);
}

function reqUploadCss(req, res) {
  console.log("Upload CSS function was called");
  res.writeHead(200, {
    "Content-Type": "text/css",
  });
  fs.createReadStream("../css/upload.css").pipe(res);
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

exports.reqIndexCss = reqIndexCss;
exports.reqStudentCss = reqStudentCss;
exports.reqSearchCss = reqSearchCss;
exports.reqUploadCss = reqUploadCss;

exports.error = error;
