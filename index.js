const fastify = require("fastify")({ logger: true });

fastify.register(require("@fastify/cors"), {
    origin: "*"
});
fastify.register(require("@fastify/rate-limit"), {
    max: 100,
    timeWindow: "1 minute" 
});

(async () => {
    await require("./routes/index")(fastify);

    await fastify.listen({
        host: "0.0.0.0",
        port: 3000
    });
})();

module.exports = {
    fastify
}
