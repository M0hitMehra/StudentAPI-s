import express from "express";
import studentRoutes from "./src/student/routes.js";

const app = express();
const port = 3000;

app.use(express.json())


app.get('/', (req, res) => {
    const html = `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .link {
            display: block;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
            text-decoration: none;
            color: #333;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome!</h1>
          <p>API is under development.</p>
          <p>Click on the links below to access different routes:</p>
          <a class="link" href="/api">API Home</a>
          <a class="link" href="/api/1">Get Student by ID</a>
          <a class="link" href="/api">Add Student</a>
          <a class="link" href="/api/1">Delete Student</a>
          <a class="link" href="/api/1">Update Student</a>
        </div>
      </body>
      </html>
    `;
    res.status(200).send(html);
  });

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => {
  console.log("listening on port", port);
});
