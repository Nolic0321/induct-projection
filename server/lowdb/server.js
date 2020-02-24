const bodyParser = require("body-parser");
const express = require("express");
const low = require("lowdb");
const cors = require("cors");
const FileAsync = require("lowdb/adapters/FileAsync");
const port = 8000;

//Create Server
const app = express();
app.use(bodyParser.json());
app.use(cors());

//Create database instance and start server
const adapter = new FileAsync("data/db.json");
low(adapter)
	.then((db) => {
		//Routes
		//GET
		//associates/:login
		app.get("/associates/:login", (req, res) => {
			const associate = db
				.get("associates")
				.find({ login: req.params.login })
				.value();

			res.send(associate);
		});

		//associates
		app.get("/associates", (req, res) => {
			const associates = db.get("associates").value();

			res.send(associates);
		});

		return db
			.defaults({
				associates: {}
			})
			.write();
	})
	.then(() => {
		app.listen(port, () => console.log("We are live on " + port));
	});
