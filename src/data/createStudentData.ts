import {connection} from "../index"


export const createStudentData = async (
    name: string,
    email: string,
    birthdate: string,
    missionId: number
  ): Promise<void> => {
    await connection.insert({
        name:name,
      email:email,
      birthdate: birthdate,
      mission_id: missionId
    })
    .into("Student");
      
  };