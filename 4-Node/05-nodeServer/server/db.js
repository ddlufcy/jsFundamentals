const Sequelize = require('sequelize');

const sequelize = new Sequelize('fullStack', 'postgres', 'sunshine5', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function () {
        console.log('Connected to fullStack postgres database');
    },
    function (err) {
        console.log(err)
    }
);

module.exports = sequelize;