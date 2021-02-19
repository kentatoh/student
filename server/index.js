"use strict";

const srv = require("./server");
const router = require("./router");
const handlers = require("./handlers");

var handle = {
  "/": handlers.reqStart,
  "/index": handlers.reqStart,
  "/studentpage": handlers.reqStudentPage,
  "/searchpage": handlers.reqSearchPage,
  "/uploadpage": handlers.reqUploadPage,
  "/indexCss": handlers.reqIndexCss,
  "/studentCss": handlers.reqStudentCss,
  "/searchCss": handlers.reqSearchCss,
  "/uploadCss": handlers.reqUploadCss,
  "/studentDetail": handlers.reqStudentDetail,
  "/search": handlers.reqSearch,
  error: handlers.error,
};

srv.startServer(router.route, handle);
