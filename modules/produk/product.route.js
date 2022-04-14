const Boom = require("@hapi/boom");
const Produk = require("./produk.model");

async function routes(fastify, otps){
  fastify.get("/produk",
    async (req, reply) => {
      try {
        // const hit = await Produk.findOne({name: req.query.nama}).lean();
        // if (!hit) {
        //   return reply.failed("Terjadi kesalahan", 400);
        // }
        const transId = req.body.TransId

        console.log("-----------");
        console.log(transId);
        console.log("----------------");
        
        reply.success("Berhasil menampilkan data", "hit");
      } catch (err) {
        throw Boom.boomify(err);
      }
    }
  );
};

module.exports = routes;