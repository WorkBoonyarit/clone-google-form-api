const { Sequelize, DataTypes, Model } = require('sequelize');
import { db } from "../bootstrapDatabase";

export const pollsModel = db.define('gf_polls', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.STRING },
    type_ins: { type: Sequelize.INTEGER },
    type_topup: { type: Sequelize.INTEGER },
    type_fixed: { type: Sequelize.INTEGER },
    type_year: { type: Sequelize.INTEGER },
    type_fix: { type: Sequelize.INTEGER },
    range_sum_insure: { type: Sequelize.INTEGER },
    range_premiums_insure: { type: Sequelize.INTEGER },
}, {
    tableName: 'gf_polls',
    freezeTableName: true,

});