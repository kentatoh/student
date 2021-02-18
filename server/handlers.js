"use strict";

const qs = require("querystring");
const fs = require("fs");
const { request } = require("http");

// *************** Pages ***************
function reqStart(req, res) {
  console.log("Start function was called");
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  fs.createReadStream("../html/index.html", "utf-8").pipe(res);
}

function reqStudentPage(req, res) {
  console.log("Student page function was called");
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  fs.createReadStream("../html/student.html", "utf-8").pipe(res);
}

function reqSearchPage(req, res) {
  console.log("Search page function was called");
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  fs.createReadStream("../html/search.html", "utf-8").pipe(res);
}

function reqUploadPage(req, res) {
  console.log("Upload page function was called");
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  fs.createReadStream("../html/upload.html", "utf-8").pipe(res);
}

// *************** CSS ***************
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

// *************** Functionality ***************
function reqStudentDetail(req, res) {
  if (req.method == "POST") {
    var data = "";
    req.on("data", function (chunk) {
      data += chunk;
    });
    console.log(data);
    data = qs.parse(data);
    console.log(data);
  }
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.write("<h1>Saved to student.csv</h1>\n");
  res.end;
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
exports.reqStudentPage = reqStudentPage;
exports.reqSearchPage = reqSearchPage;
exports.reqUploadPage = reqUploadPage;

exports.reqIndexCss = reqIndexCss;
exports.reqStudentCss = reqStudentCss;
exports.reqSearchCss = reqSearchCss;
exports.reqUploadCss = reqUploadCss;

exports.reqStudentDetail = reqStudentDetail;

exports.error = error;
