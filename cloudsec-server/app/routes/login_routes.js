var login = require('./../broker/login');


module.exports = function(app, db) {
    app.post('/login', (req, res) => {

      basicAuthorization = req.headers.authorization.split(' ')[1];
      var credentials = Buffer.from(basicAuthorization, 'base64').toString();
      var username = credentials.split(':')[0];
      var password = credentials.split(':')[1];

      var authorization = login.login(username, password);
      
      res.send(authorization);

    });
};

