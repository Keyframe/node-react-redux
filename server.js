/* eslint-disable no-console */
import apiRouterV1 from "./api/v1/ApiRouterV1";

const path = require("path");
const express = require("express");

// TODO(dominik):
// "Server" (API) runs on localhost:8080,
// while "Front-end" runs on localhost:3000
// with a proxy set to 8080
//

const server = express();
server.use(express.static(path.join(__dirname, "build")));

// NOTE(dominik): EJS is fine, for now //
server.set("view engine", "ejs");

server.get("/",
    (req, res) => {
        res.render(path.join(__dirname, "build", "index.html"),
            {
                title: "PM",
            });
    }
);

server.use("/api/v1", apiRouterV1);

server.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

if (server.get("env") === "development") {
    server.listen(process.env.PORT || 8080, console.log("PM started - development"));
} else {
    server.listen(process.env.PORT || 80, console.log("PM started - production"));
}

