import { OkPacket } from "mysql2"
import { execute } from "../1-dal/dalSql"

export async function saveUserMessages(message: string) {
    const timeStamp = new Date().getTime()
    const query = 'INSERT INTO messages(message,role,timestamp) VALUES(?,?,?)'
    await execute<OkPacket>(query, [message, 1, timeStamp]);
}