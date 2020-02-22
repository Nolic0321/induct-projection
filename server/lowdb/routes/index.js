const associatesRoutes = require("./associates");

module.exports = function(app, db) {
	associatesRoutes(app, db);
};
