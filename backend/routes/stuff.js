const express = require("express");
const router = express.Router();

const stuffControl = require("../controller/stuff");

// POST route
router.post("/", stuffControl.createThing);

// GET route - NO next()
router.get("/:id", stuffControl.getThings);
router.get("/", stuffControl.getThing);

// PUT route
router.put("/:id", stuffControl.updateThing);

// DELETE route
router.delete("/:id", stuffControl.deleteThings);

module.exports = router;
