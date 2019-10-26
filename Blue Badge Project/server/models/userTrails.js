module.exports = (sequelize, Datatypes) => {
    const UserTrails = sequelize.define('userTrails', {    
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        distance: {
            type: Datatypes.NUMERIC,
            allowNull: false
        },
        location: {
            type: Datatypes.STRING,
            allowNull: false
        },
        difficulty: {
                type: Datatypes.STRING,
                allowNull: false
        },
        rating: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        owner: {
            type: Datatypes.INTEGER,
            allowNull: false
        },

    })
    return UserTrails;
}