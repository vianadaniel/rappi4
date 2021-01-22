import { Request, Response } from "express"
import {createStudentData} from "../data/createStudentData"



export const createStudent = async (req: Request, res: Response) => {
   try {
     await createStudentData(
       req.body.name,
       req.body.email,
       req.body.birthdate,
       req.body.missionId
     );
 
     res.status(200).send("New student");
       console.log("Student criado com sucesso!")
   } catch (error) {
     res.status(400).send({
       message: error.message
     });
   }
 };

 