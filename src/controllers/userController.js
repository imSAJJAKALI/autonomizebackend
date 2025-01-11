import { saveUser, searchUsers, softDeleteUser, updateUser, listUsers } from "../services/userService.js";

const createUser = async (req, res) => {
  
  try {
    const user = await saveUser(req.body.username);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const search = async (req, res) => {
  try {
    const users = await searchUsers(req.query);
    console.log(users)
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await softDeleteUser(req.params.username);
    res.json({ message: 'User soft-deleted', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editUser = async (req, res) => {
  try {
    const user = await updateUser(req.params.username, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await listUsers(req.query.sortField || 'created_at');
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {
  createUser,
  search,
  deleteUser,
  editUser,
  getAllUsers,
};
