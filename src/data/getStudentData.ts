import { connection } from '../index'

export async function getStudentData(
    id: number
): Promise<any> {
    try {
        const result = await connection("Student")
            .select("name","birthdate")
            .where("id", id)

        
        return result

    } catch (error) {
        console.log(error)
    }
} 