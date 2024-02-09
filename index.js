const fastify = require("fastify")({ logger: true });
const { SnowflakeId } = require("@akashrajpurohit/snowflake-id");
const snowflake = SnowflakeId({
    workerId: 1,
    epoch: 1609459200000
})

fastify.register(require("@fastify/cors"), {
    origin: "*"
});
fastify.register(require("@fastify/rate-limit"), {
    max: 100,
    timeWindow: "1 minute" 
});
fastify.register(require("@fastify/middie"), {
    hook: "preHandler"
});

(async () => {
    await require("./routes/index")(fastify);

    await fastify.listen({
        host: "0.0.0.0",
        port: 3000
    });
})();

module.exports = {
    fastify,
    snowflake
}