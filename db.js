import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "students",
  password: 'Hitmen@06072000',
  port: 5432,
});

export default pool;
