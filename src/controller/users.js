const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();

    res.status(200).json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// Create new user function
const createNewUser = async (req, res) => {
  const { body } = req;
  try {
    await UsersModel.createNewUser(body);

    res.status(201).json({
      message: "CREATE new user success!",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
      serverMessage: error,
    });
  }
};

// Update user function
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(body, id);
    res.status(201).json({
      message: "User updated",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

// Delete user function
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.deleteUser(id);
    res.status(200).json({
      message: `User with id: ${id} deleted successfully!`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
