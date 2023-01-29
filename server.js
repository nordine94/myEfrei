const express = require("express")
const uri = "mongodb://0.0.0.0:27017";

const mongoose = require("mongoose")

const routesEleve = require("./routes/routesEleve")
const routesClasse = require("./routes/routesClasse")
const routesMatiere = require("./routes/routesMatiere")
const routesNote = require("./routes/routesNote")

mongoose
	.connect(uri + "/myEfrei", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        app.use(express.json())
        app.use("/api", routesEleve, routesClasse, routesMatiere, routesNote)

		app.listen(3000, () => {
			console.log("Server has started!")
		})
	})