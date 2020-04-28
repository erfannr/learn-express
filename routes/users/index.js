const express = require("express")
const router = express.Router()

router.get("/", require("./controller").getAll);
router.post("/", require("./controller").addUser);
router.put("/:id", require("./controller").editUser);
router.delete("/:id", require("./controller").deleteByID);
router.get("/filterByAddress",require("./controller").filterByAddress);
router.get("/:id", require("./controller").findByID);
router.delete("/", require("./controller").deleteAll)

module.exports = router;
