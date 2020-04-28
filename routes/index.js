const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    const isUser = true;
    if (isUser) {
        res.send("hello to my API");
    } else {
        res.redirect(302, "/erfan");
    }
});

// router.get("/erfan", (req, res) => {
//     const name = "erfan";
//     const array = [1, 2, 3, 4, 5];

//     for (let index = 0; index < array.length; index++) {
//         console.log(array[index], "for-loop");
//     }

//     const result = array.map((element) => {
//         return element * 2;
//     });

//     res.send(result);
// });

module.exports = router;