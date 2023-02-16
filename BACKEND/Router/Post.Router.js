import express from "express";
const router = express.Router();

import {
	createPost,
	updatePost,
	deletePost,
	getPost,
	getAllPosts,
} from "../Controller/Post.Controller.js";
import { authenticateToken } from "../Controller/JWT.Controller.js";

router.post("/create", authenticateToken, createPost);
router.put("/update/:id", authenticateToken, updatePost);
router.delete("/delete/:id", authenticateToken, deletePost);
router.get("/post/:id", getPost);
router.get("/posts", getAllPosts);
router.post("/file/upload", () => {});
router.get("/file/:filename", () => {});

export default router;
