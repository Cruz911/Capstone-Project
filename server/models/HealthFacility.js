const Sequelize = require('sequelize')
const db = require("../config/dbconfig.js")

const HealthWorker = db.define('health_facility', {
    name: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
    contact_number: {
        type: Sequelize.STRING
    }
});

module.exports = HealthWorker