"use strict";

const srv = require("./server");
const router = require("./router");
const handlers = require("./handlers");

var handle = {
  "/": handlers.reqStart,
  "/index": handlers.reqStart,
  "/student": handlers.reqStudent,
  "/search": handlers.reqSearch,
  "/upload": handlers.reqUpload,
  "/indexCss": handlers.reqIndexCss,
  "/studentCss": handlers.reqStudentCss,
  "/searchCss": handlers.reqSearchCss,
  "/uploadCss": handlers.reqUploadCss,
  error: handlers.error,
};

srv.startServer(router.route, handle);
