import express from 'express';
import { createStudent, deleteStudent, findStudent, getStudent, updateStudent } from "../controllers/StudentController";

const router = express.Router();

router
  .route('/')
  .get(getStudent)
  .post(createStudent)

 router
  .route('/:id')
  .get(findStudent)
  .put(updateStudent)
  .delete(deleteStudent)

export default router;