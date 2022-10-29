import { Response } from "express";
import { getStudentServices, createStudentServices, findStudentServices, updateStudentServices, deleteStudentServices } from "../services/studentService";

export const getStudent = async (_req :any, res:Response) => {
  getStudentServices(_req, res);
};

export const createStudent = async (req :any, res:Response) => {
  createStudentServices(req, res);
};

export const findStudent = async (req :any, res:Response) => {
  findStudentServices(req, res);
};

export const updateStudent = async (req :any, res:Response) => {
  updateStudentServices(req, res);
};

export const deleteStudent = async (req :any, res:Response) => {
  deleteStudentServices(req, res);
};