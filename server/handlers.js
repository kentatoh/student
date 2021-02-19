"use strict";

const qs = require("querystring");
const fs = require("fs");
const { request } = require("http");
const { parse } = require("path");

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
  console.log("Student Detail function was called");
  var data = "";
  if (req.method == "POST") {
    req.on("data", function (chunk) {
      data += chunk;
    });
    req.on("end", function () {
      var parsedData = qs.parse(data);
      console.log(parsedData);
      var toAppend =
        parsedData["studentId"] +
        "," +
        parsedData["firstName"] +
        "," +
        parsedData["lastName"] +
        "," +
        parsedData["age"] +
        "," +
        parsedData["gender"] +
        "," +
        parsedData["degree"] +
        "\n";
      fs.appendFile("../student.csv", toAppend, function (err) {
        if (err) throw err;
        console.log("Data updated into student.csv");
      });
    });
  }
  fs.createReadStream("../html/studentDetail.html", "utf-8").pipe(res);
}

function reqSearch(req, res) {}

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
exports.reqSearch = reqSearch;

exports.error = error;
