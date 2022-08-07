const fs = require('fs');
const path = require('path');

// take query and turn it into a JSON object then push to notes.json
function createNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({notes: notesArr},
        null, 2)
    );
    return note;
}

function validateNote(note) {
    if (!note.task || typeof note.task !== 'string') {
        return false;
    }
    if (!note.description || typeof note.description !== 'string') {
        return false;
    }
    if (!note.id || typeof note.id !== 'string') {
        return false;
    }
    return true;
}

module.exports = {createNote, validateNote}