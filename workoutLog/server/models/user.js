module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define('user', {
        username: {
            type: Datatypes.STRING,
            allowNull: false
        },
        passwordhash: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    })
    return User;
};