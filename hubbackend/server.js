require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to studenthub application." });
});

require("./app/routes/turorial.routes")(app);


//announcements
app.use("/api/announcements", require("./app/routes/announcement"));
//lessonplan
app.use("/api/lessonplan", require("./app/routes/lessonplan"));
app.use("/api/lessonplan/postLessonplanRow", require("./app/routes/lessonplan"));
//appointment
app.use("/api/appointment", require("./app/routes/appointment"));
app.use("/api/appointment/postAppointment", require("./app/routes/appointment"));
//courseDatabase
app.use("/api/courseDatabase", require("./app/routes/course"));
//student
app.use("/api/student", require("./app/routes/student"));
//grades
app.use("/api/grade", require("./app/routes/grade"));


// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
