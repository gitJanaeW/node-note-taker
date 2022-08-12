const fs = require('fs');
const path = require('path');
const {v4: uuidv4} = require('uuid');

// take query and turn it into a JSON object then push to notes.json
function createNote(body, notesArr) {
    body.id = uuidv4();
    notesArr.push(body);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify(notesArr,
        null, 2)
    );
    return body;
}

function readNotes(){
    fs.readFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify(notesArr)
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

// console.log("NOTE:", createNote(
// {title: "Test", text: "testing if this new note will push to notes.json"}, 
// [{title: "Do this", text: "Do this thing"}]
// ));

module.exports = {createNote, validateNote}