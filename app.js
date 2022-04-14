//Config
const { app } = require("./config");
const logger = require("pino")(app.logger);
//Init
const fastify = require("fastify")({logger, trustProxy: app.trushProxy});

require("./core/plugins")(fastify);
require("./core/logging")(fastify, logger);
require("./core/database")();
require("./core/responses")(fastify);

fastify.get("/", async () => ({hello: "hello world!"}));

fastify.register(require("./modules/produk/product.route"));
fastify.register(require("fastify-formbody"));

const start = async () => {
  try {
    await fastify.listen(app.port);
    console.log(`Run localhost:${app.port}`)
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();