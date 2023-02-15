import express from 'express';
const router = express.Router();

import { newComment, getComments, deleteComment } from '../Controller/Comment.Controller'

router.post('/comment/new', newComment);
router.get('/comments/:id', getComments);
router.delete('/comment/delete/:id', deleteComment);

export default router;