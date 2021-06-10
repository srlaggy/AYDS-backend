const express = require("express");
const cors = require('cors');
const app = express();
app.disable("x-powered-by");
require("dotenv").config();

const corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/login",require("./routes/loginRoutes"));
app.use("/client",require("./routes/clientRoutes"));
app.use("/developer",require("./routes/developerRoutes"));
app.use("/knowledge",require("./routes/knowledgeRoutes"));
app.use("/manager",require("./routes/managerRoutes"));
app.use("/module",require("./routes/moduleRoutes"));
app.use("/project",require("./routes/projectRoutes"));
app.use("/requirement",require("./routes/requirementRoutes"));

app.get("/", (req, resp) => {
    resp.send("Hola página principal");
});

app.listen(4000,console.log("el servidor está corriendo en el puerto 4000"));