module.exports = function(app, db) {
    app.post('/login', (req, res) => {

      // log authorization in base 64
      console.log(req.headers.authorization)

      res.send('Worked')
    });
};

