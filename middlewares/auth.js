module.exports = (request, reply, next) => {
    return new Promise((resolve, reject) => {
        console.log("auth");
        next();

        resolve();
    });
}
