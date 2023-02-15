import express from 'express';
const router = express.Router();

router.post('/create', () => { });
router.put('/update/:id', () => { });
router.delete('/delete/:id', () => { });
router.get('/post/:id', () => { });
router.get('/posts', () => { });
router.post('/file/upload', () => { });
router.get('/file/:filename', () => { });

export default router;