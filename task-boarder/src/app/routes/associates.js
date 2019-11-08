const tableName = 'Associates';

var createAssocaiteTableParams = {
	TableName: tableName,
	KeySchema: [{ AttributeName: 'login', KeyType: 'HASH' }],
	AttributeDefinitions: [{ AttributeName: 'login', AttributeType: 'S' }],
	ProvisionedThroughput: {
		ReadCapacityUnits: 10,
		WriteCapacityUnits: 10
	}
};

var postPutAssociateParams = (login) => {
	return {
		TableName: tableName,
		Item: {
			login: { S: login }
		}
	};
};

var getAssociateParams = (login) => {
	return {
		Key: {
			login: { S: login }
		},
		TableName: tableName
	};
};
module.exports = function(app, db) {
	// Create table on load
	db.createTable(createAssocaiteTableParams, function(err, data) {
		if (err) {
			console.error('Unable to create table. Error JSON:', err.message);
		} else {
			console.log('Created table. Tagble description JSON:', JSON.stringify(data, null, 2));
		}
	});

	// Create associate
	app.post('/associates/:login', (req, res) => {
		var login = req.params.login;
		db.putItem(postPutAssociateParams(login), (err, data) => {
			if (err) {
				console.error('Unable to create ' + login + '. Error JSON:', JSON.stringify(err, null, 2));
				res.send(err);
			} else {
				console.log('Added item:', JSON.stringify(data, null, 2));
				res.send(data);
			}
		});
	});

	// Request all associates
	app.get('/associates', (req, res) => {
		db.scan({ TableName: tableName }, (err, data) => {
			if (err) {
				console.error('Unable to find associates table Error JSON:', JSON.stringify(err, null, 2));
				send(err);
			} else {
				console.log(JSON.stringify(data, null, 2));
				res.send(data);
			}
		});
	});

	// Request associate with login :login
	app.get('/associates/:login', (req, res) => {
		var login = req.params.login;
		db.getItem(getAssociateParams(login), (err, data) => {
			if (err) {
				console.error('Unable to find ' + login + '. Error JSON:', JSON.stringify(err, null, 2));
				res.send(err);
			} else {
				console.log('GetItem succeeded:', JSON.stringify(data, null, 2));
				res.send(data);
			}
		});
	});

	// Update associate :login
	app.put('/assocaites/:login', (req, res) => {
		var login = req.params.login;
		db.updateItem(postPutAssociateParams(login), (err, data) => {
			if (err) {
				console.log(JSON.stringify(err, null, 2));
				res.send(err);
			} else {
				console.log(JSON.stringify(data, null, 2));
				res.send(data);
			}
		});
	});

	// Delete associate :login
	app.delete('/associates/:login', (req, res) => {
		var login = req.params.login;
		db.deleteItem(getAssociateParams(login), (err, data) => {
			if (err) {
				console.log(JSON.stringify(err, null, 2));
				res.send(err);
			} else {
				console.log(data);
				res.send(data);
			}
		});
	});
};
