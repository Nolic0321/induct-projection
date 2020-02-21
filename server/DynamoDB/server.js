var AWS = require("aws-sdk");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8500;

AWS.config.update({
	accessKeyId: "fakeKey",
	secretAccessKey: "fakeSecretKey",
	region: "us-west-2",
	endpoint: "http://localhost:8000;"
});
var dynamodb = new AWS.DynamoDB({ endpoint: new AWS.Endpoint("http://localhost:8000") });

app.use(bodyParser.urlencoded({ extended: true }));
require("./routes/index")(app, dynamodb);
app.listen(port, () => {
	console.log("We are live on " + port);
});
