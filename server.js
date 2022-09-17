const express = require("express");
const apiRoutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");




const app = express();
const PORT = process.env.PORT || 4023;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/assets", express.static(__dirname + "/assets"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.delete("/notes/:id",);




//Start listen
app.listen(PORT, function () {
    console.log("listening on PORT: " + PORT);
});