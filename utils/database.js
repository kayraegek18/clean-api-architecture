const mysql = require("mysql2");

async function connect() {
    return new Promise((resolve, reject) => {
        try {
            const conn = mysql.createConnection({
                host: "87.248.157.245",
                user: "tmbrgqho_testuser",
                password: "Mq##gCOrH-Bk",
                database: "tmbrgqho_test2"
            });    
            resolve(conn);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    connect
}