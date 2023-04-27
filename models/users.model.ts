const { Sequelize, DataTypes, Model } = require('sequelize');
import { db } from "../bootstrapDatabase";

export const userModel = db.define('gf_users', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    token: { type: Sequelize.STRING },
}, {
    tableName: 'gf_users',
    freezeTableName: true,

});