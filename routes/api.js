const express = require('express');
const notesRouter = require('./notes');

const app = express();

//Import router for notes
app.use('.notes', notesRouter);

module.exports = router;