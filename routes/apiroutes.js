const router = require ("express").Router();
const store = require ("../db/store");

//Setting routes for APIs
//This gets notes saved and joins it in db.json
router.get("/notes", (req, res) => {
    store 
    .getNotes()
    .then ((notes)=> {
        return res.json(notes)
    })
    .catch((err)=> res.status(500).json(err))
});

// Post function to add new notes to db.json
router.post("/notes", (req, res) => {
    store
    .addNote(req.body)
    .then((note)=> res.json(note))
    .catch((err)=> res.status(500).json(err))
});



//used for deleting notes
router.delete("/notes/:id", (req, res) => {
    store
    .removeNote(req.params.id)
    .then(()=> res.json({ ok:true }))
    .catch((err)=> res.status(500).json(err))
})

module.exports=router 