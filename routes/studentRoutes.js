


const express= require("express");
const route =express.Router();

const StuController = require("../controllers/studentController");


route.get("/stuinfo",StuController.stuInformation);
route.post("/datasave",StuController.studataSave);
route.get("/data",StuController.studentDisplay);

route.post("/search",StuController.studentsearch);
route.post("/searchbyquery",StuController.studentsearchbyquery)
route.post("/create",StuController.studentcreate)

module.exports = route;