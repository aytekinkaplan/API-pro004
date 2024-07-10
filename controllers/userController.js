const users = require("../models/userModel");

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.getOneUser = (req, res) => {
  const user = users.find((element) => element._id === req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
};

exports.updateUser = (req, res) => {
  const userIndex = users.findIndex((element) => element._id === req.params.id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.status(200).json({
      status: "success",
      data: {
        user: users[userIndex],
      },
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

exports.deleteUser = (req, res) => {
  const userIndex = users.findIndex((element) => element._id === req.params.id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
