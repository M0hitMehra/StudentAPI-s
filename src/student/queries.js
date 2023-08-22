const getStudents = "Select * from students";
const getStudentById = "SELECT * FROM students WHERE id  = $1;";
const addStudent = `INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4) RETURNING id, name, email, age, dob;`;
const checkEmailExists = "SELECT * FROM students WHERE email = $1;";
const deleteStudentById = "DELETE FROM students WHERE id  = $1;";
const updateStudent =
  "UPDATE students SET name = $1, age = $2 , dob = $3 WHERE id = $4;";
export default {
  getStudents,
  getStudentById,
  addStudent,
  checkEmailExists,
  deleteStudentById,
  updateStudent,
};
