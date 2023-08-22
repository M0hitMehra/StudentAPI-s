import express from "express";
import studentRoutes from "./src/student/routes.js";

const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send(" <h1>Welcome!</h1> <br/> <p> Api is under development");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => {
  console.log("listening on port", port);
});
