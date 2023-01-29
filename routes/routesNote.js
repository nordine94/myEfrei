const express = require("express")
const router = express.Router()
const Note = require("../models/schemaNote")

// Creer une note
router.post("/note", async (req, res) => {
    const note = new Note({
        Note: req.body.note
    })
    await note.save()
    res.send(note)
})

// Recuperer une note
router.get("/note/:id", async (req, res) => {
    try{
        const note = await Note.findOne({_id: req.params.id})
        res.send(note)
    } catch {
        res.status(404)
        res.send({ error: "Cette note n'existe pas !"})
    }
})

// Recuperer et modifier une note
router.patch("/note/:id", async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(
            {_id: req.params.id},
            {Note: req.body.note})
        await note.save()
        res.send(note)
        console.log("Changement prit en compte");
    } catch {
        res.status(404)
        res.send({ error: "Pas d'update"})
    }
})

// Supprimer une note
router.delete("/note/:id", async (req, res) => {
    try {
        await Note.deleteOne({_id: req.params.id})
        res.status(204).send()
        console.log("Note supprimer");
    } catch {
        res.status(404)
        res.send({ error: "Pas supprimé !!"})
    }
})

module.exports = router