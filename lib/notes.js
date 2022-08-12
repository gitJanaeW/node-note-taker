const fs = require('fs');
const path = require('path');


// take query and turn it into a JSON object then push to notes.json
function createNote(body, notesArr) {
    console.log("notesArr", notesArr);
    console.log("body", body);
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