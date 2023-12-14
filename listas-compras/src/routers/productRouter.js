const express = require("express");
const router = express.Router();

// importando o controller de produtos
const ProductController = require("../controllers/ProductController")

// rota responsável por listar todos os nossos produtos
router.get("/", ProductController.getAllProducts);

// rota responsável por cadastrar os produtos
router.post("/add", ProductController.createProductPost);

// rota responsável por buscar um produto em específico
router.get("/:id", ProductController.getProduct);

// rota responsável por atualizar o produto
router.post("/update", ProductController.updateProduct);

// rota responsável por remover um produto
router.get("/remove/:id", ProductController.removeProduct);

// exportando o módulo router
module.exports = router;
