const express = require("express");
const UsersService = require("./../services/users.service");

const router = express.Router();
const service = new UsersService();

// /users
router.get("/", async (req, res) => {
  const users = await service.find();
  res.json(users);
});

// /users/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const users = await service.findOne(id);

  if (users) {
    res.json(users);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  const user = await service.create(body);

  res.status(201).json({
    message: "user created",
    data: user,
  });
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = await service.update(id, body);

    res.json({
      message: "user updated",
      data: user,
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
