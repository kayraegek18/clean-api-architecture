# Clean Api Architecture
## Route Definition
#### ``routes/<folder>/index.route.js`` (you must write "route" to end)
```js
module.exports  = {
	path: "/login",
	method: "GET",
	middlewares: [
		"auth"
	],
	async  execute(request, reply) {
		console.log("execute");
		reply.status(200).send({
			message: "sa"
		});
	}
}
```
## Middleware Definition
#### ``middlewares/<name>.js``
```js
module.exports  = (request, reply, next) => {
	return  new  Promise((resolve, reject) => {
		console.log("auth");
		next();
		
		resolve();
	});
}
```
