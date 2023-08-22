import express from "express";
import { addStudent, deleteStudentById, getStudentById, getStudents, updateStudent } from "./controller.js";

const router = express.Router();

router.route("/").get(getStudents );
router.route("/:id").get(getStudentById );
router.route("/").post(addStudent );
router.route("/:id").delete(deleteStudentById );
router.route("/:id").put(updateStudent );

export default router;
