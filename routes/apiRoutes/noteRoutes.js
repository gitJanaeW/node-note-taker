const fs = require('fs');
const path = require('path');
const router = require('express').Router();
let notes = require('../../db/notes.json');
const {validateNote, createNote} = require('../../lib/notes');

// api to get db/notes.json and send info to front end
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../../db/notes.json"));
});

// take information from frontend to create a new note and push to notes.json
router.post('/notes', ({body}, res) => {
    if (!validateNote) {
        res.status(400).send('Note not properly formatted');
        return;
    }
    
    const note = createNote(body, notes);
    fs.writeFileSync(path.join(__dirname, '../../db/notes.json'),
        JSON.stringify(note), null, 2);
});

router.delete('/notes/:id', (req, res) => {
    console.log("req.params.id", req.params.id);
    console.log("notes", notes);
    if (!req.params.id) {
        res.status(500).json({error: res.message});
        return;
    }
    const newNotes = notes.filter(note => {
        return note.id !== req.params.id;
    });
    notes = newNotes;
    console.log("newNotes", newNotes);
    fs.writeFileSync(path.join(__dirname, '../../db/notes.json'),
        JSON.stringify(newNotes), null, 2);
    console.log("post sync notes", notes);
    res.json({
        message: 'deleted',
        id: req.params.id
    });
});

module.exports = router;