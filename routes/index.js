const { glob } = require("glob");

module.exports = async (fastify) => {
    return new Promise(async (resolve, reject) => {
        const files = await glob("./routes/**/*.route.js");
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            if (file == "routes\\index.js")
                continue;
            const { path, method, middlewares, execute } = require("." + file.substring(6, file.length));
            fastify.route({
                method: method,
                url: path,
                preHandler: async (request, reply, next) => {
                    for (let i = 0; i < middlewares.length; i++) {
                        const middleware = middlewares[i];
                        await require("../middlewares/" + middleware + ".js")(request, reply, next);
                    }
                },
                handler: execute
            });
        }
        console.log("Registered " + files.length + " route!");
        resolve();
    });
};