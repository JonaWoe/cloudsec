const loginRoutes = require('./login_routes');
module.exports = function(app, db) {
  loginRoutes(app, db);
};