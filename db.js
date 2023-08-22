import pkg from "pg";
const { Pool } = pkg;

// const pool = new Pool({
//   host: "dpg-cjid6fgcfp5c738onus0-a",
//   port: 5432,
//   database: "students_sgrj",
//   user: "students_sgrj_user",
//   password: "GcdrAyuakNM9DzQaWsVD3ixCbKZurPT6",
// });

const dbConnectionString =
  "postgres://students_sgrj_user:GcdrAyuakNM9DzQaWsVD3ixCbKZurPT6@dpg-cjid6fgcfp5c738onus0-a.oregon-postgres.render.com/students_sgrj";

const pool = new Pool({
  connectionString: dbConnectionString,
  ssl: {
    rejectUnauthorized: false, // Temporarily bypass certificate validation (not recommended for production)
  },
});

pool
  .connect()
  .then(() => {
    // pool.query("CREATE TABLE students (id SERIAL PRIMARY KEY,name VARCHAR(255),email VARCHAR(255),age INTEGER,  dob DATE);")
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err);
  });

export default pool;
