const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/models.js')
// const Translation = mongoose.model('Translation')

const app = express()

app.use(express.static('client/build'))
app.set('port', process.env.PORT || 3000)
app.use(parser.json())

// Routes

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))
})