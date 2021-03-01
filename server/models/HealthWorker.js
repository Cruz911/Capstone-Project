const Sequelize = require('sequelize')
const db = require("../config/dbconfig.js")

const HealthWorker = db.define('health_worker', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    job: {
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

module.exports = HealthWorker