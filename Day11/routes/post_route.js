import express from 'express';
import { createPost, getPosts} from '../controllers/PostController.js';

const router = express.Router();

router
  .route('/')
  .get(getPosts)
  .post(createPost)

// router
//   .route('/:id')
//   .get(findPosts)
//   .put(updatePost)
//   .delete(deletePost)

export default router;
