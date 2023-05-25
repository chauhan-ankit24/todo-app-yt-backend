import { Router } from "express";
import { getTodo, saveTodo, updateTodo, deleteTodo } from '../controllers/controller.js';

const router = Router();

router.get('/', getTodo);
router.post('/save', saveTodo);
router.post('/update', updateTodo);
router.post('/delete', deleteTodo);

export default router;