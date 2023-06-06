const express = require("express");
const app = express();
const configViewEngine = require("./src/configs/viewEngine");
const initAdminRoute = require("./route/admin");
require("dotenv").config();

const port = process.env.PORT || 8080; // Cổng mà máy chủ Express lắng nghe
configViewEngine(app);
initAdminRoute(app);

// Sử dụng route admin

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
