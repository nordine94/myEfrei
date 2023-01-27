const express = require("express")
const uri = "mongodb://0.0.0.0:27017";

const mongoose = require("mongoose")
const routes = require("./routes")
const routesClasse = require("./routesClasse")

mongoose
	.connect(uri + "/myEfrei", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        app.use(express.json())
        app.use("/api", routes, routesClasse)

		app.listen(3000, () => {
			console.log("Server has started!")
		})
	})