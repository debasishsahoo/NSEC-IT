import express from 'express';
const router = express.Router();

router.post('/comment/new', () => { });
router.get('/comments/:id', () => { });
router.delete('/comment/delete/:id', () => { });

export default router;