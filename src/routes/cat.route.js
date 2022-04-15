const route = require("express").Router();
const controllerCats = require("../controllers/cat.controller");

route.get("/find-cats", controllerCats.findAllCatsController);
route.get("/cat/:id", controllerCats.findByIdCatController);

module.exports = route;
