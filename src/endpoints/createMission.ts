import { Request, Response } from "express"
import {createMissionData} from "../data/createMissionData"



export const createMission = async (req: Request, res: Response) => {
   try {
     await createMissionData(
       req.body.name,
       req.body.start_date,
       req.body.end_date,
       req.body.modulo
     );
 
     res.status(200).send("New mission");
       console.log("Mission criado com sucesso!")
   } catch (error) {
     res.status(400).send({
       message: error.message
     });
   }
 };
