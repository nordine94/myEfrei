const express = require("express")
const router = express.Router()
const Matiere = require("../models/schemaMatiere")

// Creer une matiere
router.post("/matiere", async (req, res) => {
    const matiere = new Matiere({
        Nom: req.body.nom
    })
    await matiere.save()
    res.send(matiere)
    console.log("Matiere ajoutée");
})

// Recuperer une matiere
router.get("/matiere/:id", async (req, res) => {
    try{
        const matiere = await Matiere.findOne({_id: req.params.id})
        res.send(matiere)
    } catch {
        res.status(404)
        res.send({error: "Cette matiere n'existe pas !!"})
    }
})

// Recuperer et modifier une matiere
router.patch("/matiere/:id", async (req, res) => {
    try{
        const matiere = await Matiere.findOneAndUpdate(
            {_id: req.params.id},
            {Nom: req.body.nom},)
        await matiere.save()
        res.send(matiere)
    } catch {
        res.status(404)
        res.send({ error: "Pas d'update"})
    }
})

// Supprimer une matiere
router.delete("/matiere/:id", async (req, res) => {
    try{
        await Matiere.deleteOne({_id: req.params.id})
        res.status(204).send()
        console.log("Matiere supprimer !");
    } catch {
        res.status(404)
        res.send({ error: "Pas supprimé"})
    }
})

module.exports = router;