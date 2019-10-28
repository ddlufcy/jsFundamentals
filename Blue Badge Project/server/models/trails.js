module.exports = (sequelize, DataTypes) => {
    const Trails = sequelize.define('trails', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        distance: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type:DataTypes.STRING,
            allowNull: false
        }
    })
    return Trails;
};