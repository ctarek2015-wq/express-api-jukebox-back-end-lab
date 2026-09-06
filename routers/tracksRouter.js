const express = require("express");
const router = express.Router();
const tracksCtrl = require("../controllers/tracksCtrl");

router.post("/tracks", tracksCtrl.create);
router.get("/tracks", tracksCtrl.index);
router.get("/tracks/:id", tracksCtrl.show);
router.put("/tracks/:id", tracksCtrl.update);
router.delete("/tracks/:id", tracksCtrl.delete);

module.exports = router;
