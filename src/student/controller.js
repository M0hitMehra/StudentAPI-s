import pool from "../../db.js";
import queries from "./queries.js";
export const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

export const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, result) => {
    if (error) throw error;
    // console.log(result.rows[0].name);
    res.status(200).json(result.rows[0]);
  });
};

export const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  if (!name || !email || !age || !dob) {
    res.status(400).json({
      success: false,
      message: "Enter all details for student",
    });
    return;
  }
  pool.query(queries.checkEmailExists, [email], (error, result) => {
    if (result.rows.length) {
      res.status(400).json({
        success: false,
        message: "Student already exists",
      });
      return;
    }
    pool.query(queries.addStudent, [name, email, age, dob], (error, result) => {
      if (error) throw error;
      res.status(201).json({
        success: true,
        message: "Student Created Successfully",
        student: result.rows,
      });
    });
  });
};

export const deleteStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  // Check if the student exists by querying the database
  pool.query(queries.getStudentById, [id], (error, result) => {
    if (!result.rows.length) {
      // Student does not exist, send a 404 response
      res.status(404).json({
        success: false,
        message: "Student does not exist",
      });
    } else {
      // Student exists, proceed to delete
      pool.query(queries.deleteStudentById, [id], (error, result) => {
        if (error) throw error;
        // Student deleted successfully, send a 200 response
        res.status(200).json({
          success: true,
          message: "Student deleted successfully",
        });
      });
    }
  });
};

export const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  //   const { name, email, age, dob } = req.body;

  pool.query(queries.getStudentById, [id], (error, result) => {
    if (!result.rows.length) {
      // Student does not exist, send a 404 response
      res.status(404).json({
        success: false,
        message: "Student does not exist",
      });
      return;
    }
    let student = result.rows[0];
    let name = req.body.name || student.name;
    let email = req.body.email || student.email;
    let age = req.body.age || student.age;
    let dob = req.body.dob || student.dob;

    pool.query(
      queries.updateStudent,
      [name, age, dob, id],
      (error, result) => {
        if (error) throw error;
        // Student deleted successfully, send a 200 response
        res.status(200).json({
          success: true,
          message: "Student updated successfully",
        });
      }
    );
  });
};
