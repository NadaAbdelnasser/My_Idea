const sequelize = require("sequelize")
const Sequelize = new sequelize("my idea", "root", "", {
    host: "localhost",
    dialect: "mysql" // type of database
});

module.exports = Sequelize;