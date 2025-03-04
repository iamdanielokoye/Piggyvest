const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, (req, res) => {
    res.json({ message: "Secure data accessible only to authenticated users" });
});

module.exports = router;