import express from "express"
import { addLectures, createCourse, deleteCourse, deleteLecture, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import { authorizeAdmin, isAuthenticated, authorizeSubscribers } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// Show all courses without lectures
router.
    route("/courses").
        get(getAllCourses)

// Add new Courses
router.
    route("/createcourse").
        post(isAuthenticated, authorizeAdmin, singleUpload, createCourse)

//Add lectures 
router.
    route("/course/:id").
        get(isAuthenticated, authorizeSubscribers, getCourseLectures).
        post(isAuthenticated, authorizeAdmin, singleUpload, addLectures).
        delete(isAuthenticated, authorizeAdmin, deleteCourse)
//delete Lecture
router.
    route("/lecture").
        delete(isAuthenticated, authorizeAdmin, deleteLecture)

export default router;