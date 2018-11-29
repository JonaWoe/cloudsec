const test_username = 'admin';
const test_password = 'admin';

const users = [
    {
        username: 'admin',
        password:'ucUQFOcwi4',
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
            }
        })

        return res;   
    }
};

