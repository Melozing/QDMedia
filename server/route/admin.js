const express = require("express");
let router = express.Router();
const path = require("path");

const initAdminRoute = (app) => {
  // Định nghĩa route cho trang admin
  router.get("/", (req, res) => {
    res.render("admin");
  });

  router.get("/login", (req, res) => {
    res.render("login");
  });

  return app.use("/", router);
};

module.exports = initAdminRoute;
