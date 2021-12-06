require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})
module.exports = {
    host: '127.0.0.1',
    username: 'postgres',
    password: 'root',
    database: 'node_tester',
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }

}