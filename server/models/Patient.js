const Sequelize = require('sequelize')
const db = require("../config/dbconfig.js")

const Patient = db.define('patient', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    clinic: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
    contact_number: {
        type: Sequelize.STRING
    },
    // password: {
    //     type: Sequelize.STRING
    // }
});

module.exports = Patient