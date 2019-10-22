module.exports = (sequelize, Datatypes) => {
    const UserTrails = sequelize.define('userTrails', {
        owner: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        distance: {
            type: Datatypes.NUMERIC(4, 1),
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
        }
    })
}