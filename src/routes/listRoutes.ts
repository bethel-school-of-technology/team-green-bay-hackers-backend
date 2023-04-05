import { Router } from 'express';
import { createList, deleteList, getAllLists,
    getList, updateList } from '../controllers/listController';

const router = Router();

router.get('/', getAllLists);

router.post('/', createList);

router.get('/:id', getList);

router.put('/:id', updateList);

router.delete('/:id', deleteList);

export default router;