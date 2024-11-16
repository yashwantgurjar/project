


const studentModel = require("../models/studentModel");
const StuModel =  require("../models/studentModel");

const stuInformation=(req,res)=>{
  res.send("<h1>This is student information ")
}


const studataSave =(req,res)=>{
  const {rollno,name,city} =req.body;

  const student =new StuModel({
    rollno:rollno,
    name:name,
    city:city
  })

  student.save();
  res.send("Data save succesfullt");
}
const studentDisplay=async(req,res)=>{
  const studata=await StuModel.find();
  res.send(studata);
}
const studentsearch=async(req,res)=>{
  const {rollno}=req.body;
  const data =await StuModel.find({"rollno":rollno})
  console.log(data);
  res.send(data);


}
const studentsearchbyquery=async(req,res)=>{
const {name,city}=req.query;
const data=await studentModel.find({$and:[{"name":name},{"city":city}]})


res.send(data);
}
 const studentcreate=async(req,res)=>{
 const{rollno,name,city}=req.body;
 const mydata= studentModel.create({
  rollno:rollno,
  name:name,
  city:city
 })




  res.send("data save by create")
 }
  


module.exports={
    stuInformation,
    studataSave,
    studentDisplay,
    studentsearch,
    studentsearchbyquery,
    studentcreate
}