const express = require("express");
const app = express();
const {PORT} = require ("./config")

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/", require("./routes"));
app.use("/users", require("./routes/users/"))
app.use("/todos", require("./routes/todos"));

// app.get("/", (req, res) => {
//     const isUser = true;
//     if (isUser) {
//         res.send("hello to my API");
//     } else {
//         res.redirect(302, "/erfan");
//     }
// });

// app.get("/erfan", (req, res) => {
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

app.listen(PORT, () => {
    console.log(`PORT is listen on PORT: ${PORT}`);
});
