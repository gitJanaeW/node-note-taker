const path = require('path');
const router = require('express').Router();
const {v4: uuidv4} = require('uuid');
const {notes} = require('../../db/notes.json');
const { validateNote, createNote } = require('../../lib/notes');

// NOT WORKING
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
    console.log("post body:", body);
    // body.id = uuidv4;
    const note = createNote(body, JSON.parse(notes));
});

module.exports = router;