const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Xử lý các yêu cầu Next.js
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // Khởi động server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("Server started on http://localhost:3000");
  });
});
