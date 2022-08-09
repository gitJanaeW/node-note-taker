const fs = require('fs');
const path = require('path');

// take query and turn it into a JSON object then push to notes.json
function createNote(body, notesArr) {
    notesArr.push(body);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({notes: notesArr},
        null, 2)
    );
    return note;
}

function readNotes(){
    fs.readFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({notes: notesArr})
    );
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = {createNote, validateNote}