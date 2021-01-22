import { Request, Response } from "express"
import { getStudentData } from "../data/getStudentData";


export const getStudentById = async (
    req: Request, res: Response
): Promise<any> => {
    try {
        const id = Number(req.params.id);

        const student = (await (getStudentData(id)))[0];
        

        if(!student) {
            res.statusCode = 400;
            throw new Error("Student not found");
        }

        const studentBirthdate = student.birthdate;
        const date: Date = new Date(studentBirthdate)
        const ageInMilisseconds: number = Date.now() - date.getTime();
        const age: number = Math.floor(ageInMilisseconds / 1000 / 60 / 60 / 24 / 365);

        res.status(200).send({ message: `${student.name}:  ${age} years`}); 
        
    } catch (err) {
        res.status(400).send({ message: err.message || err.sqlMessage });
    }
}