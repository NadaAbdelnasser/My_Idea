const express = require("express")
const app = express();

app.use(express.json())

// app.use(async (req, res) =>
// {

//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");

//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Cache-Control", "no-store,no-cache,must-revalidate");
//     res.header("Vary", "Origin");

//     if (req.method === "OPTIONS")
//     {
//         res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
//         return res.status(200).json({});
//     }
// })

app.use(require("./modules/user/routes/user.route"))
app.use(require("./modules/comment/routes/comment.route"))
app.use(require("./modules/react/routes/react.route"))
app.use(require("./modules/group/routes/group.route"))
app.use(require("./modules/post/routes/post.route"))


const CreateTables = require("./modules/index")
CreateTables();
app.get('/', (req, res) =>
{
    res.send("app is running")
})

app.listen(3000)


// app.use(async (req, res, next) =>
// {
//     res.locals.session = req.session;
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");

//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Cache-Control", "no-store,no-cache,must-revalidate");
//     res.header("Vary", "Origin");

//     if (req.method === "OPTIONS")
//     {
//         res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
//         return res.status(200).json({});
//     }
// }
// )