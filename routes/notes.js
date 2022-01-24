const notes = require('express').Router();
const uuid = require('../helpers/uuid');

notes.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST notes route for new note
notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json('Note addition success!');
    } else {
        res.error('Error in posting note.');
    }
});

module.exports = notes;