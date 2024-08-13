const express = require("express");
const CategoriesService = require("./../services/categories.service");

const router = express.Router();
const service = new CategoriesService();

router.get("/", async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

// /categories/:catId
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const category = await service.findOne(id);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  const category = await service.create(body);

  res.status(201).json({
    message: "category created",
    data: category,
  });
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const category = await service.update(id, body);

    res.json({
      message: "category updated",
      data: category,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const action = await service.delete(id);
  res.json(action);
});

module.exports = router;
