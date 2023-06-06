const express = require("express");
const router = express.Router();

router.get("/api/example", (req, res) => {
  // Xử lý logic tại đây
  res.json({ message: "This is an example API endpoint" });
});

module.exports = router;
