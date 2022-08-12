const path = require('path');
const router = require('express').Router();
const notes = require('../../db/notes.json');
const {validateNote, createNote} = require('../../lib/notes');

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
    const note = createNote(body, notes);
});

router.delete('/notes/:id', (req, res) => {
    params = [req.params.id];
    if (!req.body.id || !req.params.id) {
        res.status(500).json({error: res.message});
        return;
    }
    else {
        res.json({
            message: 'deleted',
            id: req.params.id
        });
    }
});

module.exports = router;