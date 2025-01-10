import express from 'express';
import {
  createUser,
  search,
  deleteUser,
  editUser,
  getAllUsers,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.get('/search', search);
router.delete('/:username', deleteUser);
router.put('/:username', editUser);
router.get('/', getAllUsers);

export default router;
