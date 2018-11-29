const fs = require('fs');
const jwt = require('jsonwebtoken');

const users = [
    {
        username: 'admin',
        password:'admin',
        role: '1'
    },
    {
        username: 'jona',
        password:'admin',
        role: '1'
    },
    {
        username: 'daniel',
        password:'admin',
        role: '1'
    },
    {
        username: 'chris',
        password:'admin',
        role: '2'
    },
    {
        username: 'fabian',
        password:'admin',
        role: '2'
    },
    {
        username: 'derandere',
        password:'admin',
        role: '2'
    },

]

var RSA_PRIVATE_KEY = fs.readFileSync('./keyStore/private.key','utf8');

module.exports = {
    login: function (username, password) {

        var res = {
            username: '',
            role: ''
        };

        users.forEach(user => {
            if (user.username === username && user.password === password) {
                res.username = user.username;
                res.role = user.role;

                
                const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                    algorithm: 'RS256',
                    expiresIn: 120,
                    subject: user.username
                });
            }
        })

        return jwtBearerToken;   
    }
};

