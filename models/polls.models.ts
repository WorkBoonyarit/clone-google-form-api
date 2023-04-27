const { Sequelize, DataTypes, Model } = require('sequelize');
import { db } from "../bootstrapDatabase";

export const pollsModel = db.define('gf_polls', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.STRING },
    type_ins: { type: Sequelize.STRING },
    type_topup: { type: Sequelize.STRING },
    type_fixed: { type: Sequelize.STRING },
    type_year: { type: Sequelize.STRING },
    type_fix: { type: Sequelize.STRING },
    range_sum_insure: { type: Sequelize.INTEGER },
    range_premiums_insure: { type: Sequelize.INTEGER },
}, {
    tableName: 'gf_polls',
    freezeTableName: true,

});