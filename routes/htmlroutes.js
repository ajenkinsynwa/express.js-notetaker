const path = require ("path");
const router = require ("express").Router();

//HTML calls
//calls home page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
//call for notes.html
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;