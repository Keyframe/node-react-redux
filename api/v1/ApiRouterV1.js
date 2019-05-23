import express from "express";
// import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const bodyParser = require("body-parser");

const apiRouterV1 = express.Router();

apiRouterV1.use(bodyParser.json());
apiRouterV1.use(bodyParser.urlencoded({ extended: true }));

apiRouterV1.use((req, res, next) => {
    res.header("X-Powered-By", "Silk");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

////////////////////////////////////////////////////////////////////////
//                            GET METHODS                             //
////////////////////////////////////////////////////////////////////////

////////////////
//  /version  //
////////////////

apiRouterV1.get("/version", (req, res) => {
    res.status(200).send(process.env.VERSION);
});

apiRouterV1.get("*", (req, res) => {
    // res.send("No.", 404);
    res.status(404).send("No.");
});


export default apiRouterV1;
