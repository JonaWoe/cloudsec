const test_username = 'admin';
const test_password = 'admin';

module.exports = {
    login: function (username, password) {
        if (test_username === username && test_password === password) {
            return true;
        } else {
            return false;
        }
    }
};

