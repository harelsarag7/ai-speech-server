import { OkPacket } from "mysql2"
import { execute } from "../1-dal/dalSql"

export async function saveUserMessages(message: string,id:string) {
    const timeStamp = new Date().getTime()
    const query = 'INSERT INTO messages(message,role,timestamp,userId) VALUES(?,?,?,?)'
    await execute<OkPacket>(query, [message, 1, timeStamp,id]);
}

export async function getMessagesByUser(id: string) {
    const query = "SELECT * FROM messages WHERE userId = ?"
    const results = await execute<OkPacket>(query, [id]);
    return results;
}
