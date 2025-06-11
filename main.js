const express = require("express");
require("dotenv").config();
const database = require("./config/database");
const jobRouter = require("./jobs/jobs.router")
const usersRouter = require("./users/users.router")


const app = express();
const port = process.env.PORT || 3000;


// Connect to the database
database.connectDB();

//Parse json data
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Jobs Apis");
});

app.use("/api/v1/users", usersRouter)
app.use("/api/v1/jobs", jobRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 