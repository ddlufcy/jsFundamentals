module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define('user', {
        firstName: {
            type: Datatypes.STRING,
            allowNull: false
        },
        lastName: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false
        }
    })
    return User;
}