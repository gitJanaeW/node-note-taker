const fs = require('fs');
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
    if (!req.params.id) {
        res.status(500).json({error: res.message});
        return;
    }
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].id === req.params.id){
            notes.splice(i, 1);
            console.log(notes);
            fs.writeFileSync(path.join(__dirname, '../../db/notes.json'),
            JSON.stringify(notes), null, 2);
            return;
        }
    }
    console.log(notes[0]);
    res.json({
        message: 'deleted',
        id: req.params.id
    });
});

module.exports = router;