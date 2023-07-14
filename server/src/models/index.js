'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js' &&
            file.indexOf('.test.js') === -1
        );
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });



db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.UserModel = require('./user')(sequelize, DataTypes);
db.PollModel = require('./poll')(sequelize, DataTypes);

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate && modelName.endsWith('Model')) {
        db[modelName].associate(db);
    }
});

db.sequelize.sync({ force: false }).then(() => {
    console.log('yes re-sync done!');
});

/*
db.UserModel.hasMany(db.PollModel, {
    as: 'poll'
})

db.PollModel.belongsTo(db.UserModel, {
    foreignKey: 'userId',
    as: 'UserModel'
})//*/



module.exports = db;
