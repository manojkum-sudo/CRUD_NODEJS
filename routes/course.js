import express from 'express';
import {createCourse,getCourse,editCourse,deleteCourse,getCourseById} from '../controller/course.js';

const router = express.Router();

router.post('/course',createCourse);
router.get('/getCourse',getCourse);
router.put('/editCourse/:id',editCourse);
router.delete('/deleteCourse',deleteCourse);
router.put('/update/:id',getCourseById);


export default router;


