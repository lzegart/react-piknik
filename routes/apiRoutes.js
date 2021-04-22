const router = require("express").Router();
const { test } = require("../controllers/testControllers");

router.get("/test", test);

module.exports = router;
