import { Router } from 'express';
import { createItem, deleteItem, getAllItems,
    getItem, updateItem } from '../controllers/listController';

const router = Router();

router.get('/', getAllItems);

router.post('/', createItem);

router.get('/:id', getItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

export default router;