const mongoose = require("mongoose")

const MatiereSchema = mongoose.Schema({
    Nom: String
})

const schema =  mongoose.model("matieres", MatiereSchema)
module.exports = schema