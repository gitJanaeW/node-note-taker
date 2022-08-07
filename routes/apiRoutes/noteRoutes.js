const router = require('express').Router();
const {notes} = require('../../db/notes.json');
const { validateNote, createNote } = require('../../lib/notes');

// take information from front to create a new note and push to JSON
router.post('/notes', (req, res) => {
    console.log(req.body);
    req.body.id = notes.length.toString();
    if (!validateNote(req.body)) {
        res.status(400).send('Note not properly formatted.');
    } else {
        const note = createNote(req.body, notes);
        res.json(req.body);
    }
});

module.exports = router;