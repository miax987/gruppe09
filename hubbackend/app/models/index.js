const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.lessonplan= require("./lessonplan.js")(sequelize, Sequelize);
db.announcements= require("./announcements.js")(sequelize, Sequelize);
db.appointment= require("./appointment.js")(sequelize, Sequelize);
db.assignment= require("./assignment.js")(sequelize, Sequelize);
db.course= require("./course.js")(sequelize, Sequelize);
db.grade= require("./grade.js")(sequelize, Sequelize);
db.lesson= require("./lesson.js")(sequelize, Sequelize);
db.location= require("./location.js")(sequelize, Sequelize);
db.studentCourses= require("./studentCourses.js")(sequelize, Sequelize);
db.student= require("./student.js")(sequelize, Sequelize);
db.studyclass= require("./studyclass.js")(sequelize, Sequelize);
db.studyprogramme= require("./studyprogramme.js")(sequelize, Sequelize);

module.exports = db;
