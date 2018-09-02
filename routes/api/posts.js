const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ mesg: "posts work" }));

module.exports = router;
