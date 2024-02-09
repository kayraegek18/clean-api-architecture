module.exports = {
    path: "/login",
    method: "GET",
    middlewares: [
        "auth"
    ],
    async execute(request, reply) {
        console.log("execute");
        reply.status(200).send({
            message: "sa"
        })
    }
}