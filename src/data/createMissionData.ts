import {connection} from "../index"


export const createMissionData = async (
    name: string,
    start_date: string,
    end_date: string,
    modulo: number
  ): Promise<void> => {
    await connection.insert({
        name:name,
      start_date:start_date,
      end_date:end_date,
      modulo:modulo
    })
    .into("Mission");
      
  };