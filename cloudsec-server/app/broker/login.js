const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');

const users = [
    {
        username: 'admin',
        password:'admin',
        role: '1'
    },
    {
        username: 'jona',
        password:'jHwDPbzWevOA0GCZKSlE',
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
        password:'B^32~qqC}=Sc,3jyJ9Uq%Nq8\tN#Qp+1fW>*{4ie',
        role: '2'
    },
    {
        username: 'derandere',
        password:'admin',
        role: '2'
    },

]

var RSA_PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, 'keyStore/private.key'),'utf8');

module.exports = {
    login: function (username, password) {

        var res = { jwtBearerToken: ''};

        users.forEach(user => {
            if (user.username === username && user.password === password) {
                
               res.jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                    algorithm: 'RS256',
                    expiresIn: 120,
                    subject: user.username,
                    audience: user.role
                });         
            }
        })

        return res; 
    }
};

