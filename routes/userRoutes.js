import express from 'express';
import { postUsuario, getUsuarios, getUsuarioPorId } from '../controllers/userController.js';

const router = express.Router();

router.post('/users', postUsuario);
router.get('/users', getUsuarios);
router.get('/users/:id', getUsuarioPorId);

export default router;
