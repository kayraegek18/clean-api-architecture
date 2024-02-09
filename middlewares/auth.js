const { snowflake } = require("..");

module.exports = (request, reply, next) => {
    return new Promise((resolve, reject) => {
        console.log("auth");
        next();

        console.log(snowflake.generate());

        resolve();
    });
}