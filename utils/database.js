const mysql = require("mysql2");

async function connect() {
    return new Promise((resolve, reject) => {
        try {
            const conn = mysql.createConnection({
                host: "",
                user: "r",
                password: "",
                database: ""
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
