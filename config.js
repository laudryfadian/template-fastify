require("dotenv").config();
const version = require("./package.json").version;

module.exports = {
  app: {
    port: process.env.PORT || 3000,
    logger: {
      level: "warn",
      base: null,
      customLevels: {
        lvl: 45
      }
    },
    trushProxy: "127.0.0.1"
  },
  db: {
    connectionString: process.env.DB_URI,
    options: {
      useUnifiedTopology: true,
    },
  },
  cors: {
    origin: true,
    methods: ["OPTIONS", "GET", "PUT", "PATCH", "POST", "DELETE"],
    maxAge: 90,
  },
  jwt: {
    secret: process.env.JWTSECRET,
    sign: {
      expiresIn: 30,
      algorithm: "HS512",
    },
  },
  swagger: {
    routePrefix: "/docs",
    exposeRoute: true,
    swagger: {
      info: {
        title: "Template Node Js Fastify by.laudryfadian: Back-end API",
        description: "Back-end API",
        version,
      },
      host: `localhost:${process.env.PORT}`,
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
      securityDefinitions: {
        bearerJWT: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
          description: "Ambil bearer dari api data",
        },
      },
      security: [{ bearerJWT: [] }],
    },
  },
}