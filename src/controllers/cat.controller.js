const catsService = require("../services/cat.service");

const findAllCatsController = (req, res) => {
  const cats = catsService.findAllCatsService();
  res.send(cats);
};

const findByIdCatController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenCat = catsService.findByIdCatService(idParam);
  res.send(chosenCat);
};

module.exports = {
  findAllCatsController,
  findByIdCatController,
};
