import { OkPacket } from "mysql2";
import { openai } from "../1-dal/chatGpt";
import { execute } from "../1-dal/dalSql";

export async function getMessageFromChatGPTandSave(message: string) {
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: message,
            max_tokens: 1000
        });
        const reply = completion.data.choices[0].text
        const timeStamp = new Date().getTime();
        const query = 'INSERT INTO messages(message,role,timestamp) VALUES(?,?,?)'
        await execute<OkPacket>(query, [reply, 0, timeStamp]);
        return reply
    } catch (e) {
        return e
    }
}
