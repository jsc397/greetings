const GreetingCard = require('./db/models')

module.exports ={
index: (req,res) => {

    //we want to populate the homepage with our backend data.
    //test to make sure this route works:
   GreetingCard.find()
   .then(greetingcards => {
       console.log(greetingcards)
   })
},
new: (req, res) => {
    console.log("new")

},

create: (req, res) => {
    GreetingCard.create({
        to: req.body.to,
        from: req.body.from,
        message: req.body.message
}).then(console.log(create))

},

update: (req, res) => {
    
// let { _id} = req.body
// GreetingCard.findOne({_id: req.params.id}).then(
//     greetingcards.message.push(_id)
// )

GreetingCard.findOne({greetingcards_id})

console.log(update)
},

delete: (req, res) => {
    // testing route
    console.log("update")

}
}