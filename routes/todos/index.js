const express = require("express")
const router = express.Router()

router.get("/", require("./controller").getAllTodos);
router.post("/", require("./controller").addTodo);
router.put("/:id",require("./controller").editTodo);
router.get("/findByUser/:userId",require("./controller").findByUserID)
router.get("/:id",require("./controller").findByTodoID)
router.delete("/:id",require("./controller").deleteByTodoID);

module.exports = router;