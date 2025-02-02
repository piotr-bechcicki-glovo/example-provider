const router = require("express").Router();
const controller = require("./product.controller");

router.get("/product/:id", controller.getById);
router.get("/products", controller.getAll);
router.post("/dub", controller.dumb);

module.exports = router;
