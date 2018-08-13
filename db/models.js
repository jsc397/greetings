const mongoose = require ('./connection.js')
const Schema = mongoose.Schema

const GreetingCard = new Schema({
to: String,
from: String,
message: String
})

module.exports = mongoose.model("GreetingCard", GreetingCard)
