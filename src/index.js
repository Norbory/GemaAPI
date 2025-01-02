const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"));

app.use(cors(
    {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false
    }
));
app.use(express.json({ limit: '50mb' }));

router(app);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

module.exports = app;