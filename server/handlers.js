"use strict";

const qs = require("querystring");
const fs = require("fs");
const readline = require("readline");
const formidable = require("formidable");

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
  var data = ""; // Variable to store the data from the form
  if (req.method == "POST") {
    req.on("data", function (chunk) {
      data += chunk; // Concatenate the chunks into the data variable
    });
    req.on("end", function () {
      var parsedData = qs.parse(data); // Parse the data
      console.log(parsedData);
      var toAppend = // Store the data into csv format
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
      fs.appendFile("../data/student.csv", toAppend, function (err) { // Append the file and store the csv data line
        if (err) throw err;
        console.log("Data updated into student.csv");
      });
    });
  }
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  fs.createReadStream("../html/studentDetail.html", "utf-8").pipe(res);
}

function reqSearch(req, res) {
  console.log("Search function was called");
  var data = ""; // Variable to store the data from the form
  var toSearch = ""; // The degree to be searched
  var results = []; // Variable to store the results of the search

  if (req.method == "POST") {
    req.on("data", function (chunk) {
      data += chunk; // Concatenate the chunks into the dataa variable
    });

    req.on("end", function () {
      var count = 0; // Variable to note the number of search result
      var parsedQuery = qs.parse(data); // Parse the data
      toSearch = parsedQuery["degree"]; // User's input of the degree
      console.log("To search for: " + toSearch);
      var readStream = fs.createReadStream("../data/student.csv"); // Create a readstream to the student csv file
      readStream.on("data", function (chunk) {
        var line = chunk.toString(); // Reach each line of the csv file, and stringify it
        line = line.split("\n"); // Split each line at \n (new line)
        for (var i = 0; i < line.length - 1; i++) {
          var header = line[i].split(",");  // Futher split each line by the , and store it into a header array
          if (header[5].toLowerCase() == toSearch.toLowerCase()) { // Array position 5 should be the degree
            results.push(header); // If matches the search result, push the entire header into the result.
            count++;
          }
        }
        
        // Format to display the results
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.write("<h1>Results for " + toSearch + ":</h1>");
        if (count != 0) {
          res.write(
            "<table><tr>" +
              "<th>ID</th>" +
              "<th>First Name</th>" +
              "<th>Last Name</th>" +
              "<th>Age</th>" +
              "<th>Gender</th>" +
              "<th>Degree</th>" +
              "</tr>"
          );

          for (var i = 0; i < results.length; i++) {
            res.write("<td>" + results[i][0] + "</td>");
            res.write("<td>" + results[i][1] + "</td>");
            res.write("<td>" + results[i][2] + "</td>");
            res.write("<td>" + results[i][3] + "</td>");
            res.write("<td>" + results[i][4] + "</td>");
            res.write("<td>" + results[i][5] + "</td></tr>\n");
          }
          res.write("<tr><td>Total: </td><td>" + count + "</td></tr>");
          res.write("</table>");
          console.log("Search results displayed onto browser");
        } else {
          res.write("<h1>No results found</h1>");
        }
        res.write('<a href="/searchpage">Back</a>');
        res.end();
      });
    });
  }
}

function reqUpload(req, res) {
  console.log("Upload function was called");
  var form = new formidable.IncomingForm();
  form.uploadDir = "../tmp";
  form.parse(req, function (err, field, file) {
    console.log("Parsing done");

    fs.rename(file.upload.path, "../images/test.png", function (err) {
      if (err) {
        fs.unlink("../images/test.png");
        fs.rename(file.upload.path, "../images/test.png");
      }
    });
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write("Received image: <br />");
    res.write("<img src='/show' />");
    res.write('<br /><a href="/uploadpage">Back</a>');
    res.end();
  });
}

function reqShow(req, res) {
  console.log("Show function was called");
  res.writeHead(200, {
    "Content-Type": "image/png",
  });
  fs.createReadStream("../images/test.png").pipe(res);
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
exports.reqSearch = reqSearch;
exports.reqUpload = reqUpload;
exports.reqShow = reqShow;

exports.error = error;
