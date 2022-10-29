import Student from "../models/Students";
import {Response} from "express";

export const getStudentServices = async (_req :any, res:Response) => {
  try {
    const result = await Student.find().populate("created_user_id");
    res.json({ data: result });
  } catch (err) {
    console.log(err)
  }
};

export const createStudentServices = async (req :any, res:Response) => {
  try {
   console.log(req.body)
    const studentData = {
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      year:req.body.year,
      date_of_birth:req.body.data_of_birth,
      // created_user_id : req.body.created_user_id,
    }
    console.log(studentData)
    const category = new Student(studentData);
    const result = await category.save();
    res.status(201).json({ message: "Created Successfully", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const findStudentServices = async (req :any, res:Response) => {
  try {
    const findData = await Student.findById(req.params.id).populate("created_user_id")
    res.send({ data: findData })
  } catch (err) {
    console.log(err)
  }
};

export const updateStudentServices = async (req :any, res:Response) => {
  try {
    const student:any = await Student.findById(req.params.id)
    student.name = req.body.name;
    student.address = req.body.address;
    student.phone =req.body.phone;
    student.year = req.body.year;
    student.date_of_birth = req.body.data_of_birth;
    // student.created_user_id = req.body.created_user_id;
    const result = await student.save();
    res.json({ message: "Updated Successfully!", data: result })
  } catch (err) {
    console.log(err)
  }
};

export const deleteStudentServices = async (req :any, res:Response) => {
  try {
    await Student.findById(req.params.id);
    await Student.findByIdAndRemove(req.params.id);
    res.json({ message: "Student with id " + req.params.id + " removed." })
  } catch (err) {
    console.log(err)
  }
};