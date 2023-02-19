import express from 'express'
export const ChatGptRoute = express.Router();
import { translateToEn, translateToUserLanguage } from '../1-dal/translate';
import { getMessageFromChatGPTandSave } from '../3-logic/chatGptLogic';
import { saveUserMessages } from '../3-logic/userLogic';


ChatGptRoute.post('/message', async (req, res) => {
    const message = req.body.message;
    const id = req.body.id
    console.log(message);
    
    try {
        const translatedTextEnglish = await translateToEn(message);        
        const results = await getMessageFromChatGPTandSave(translatedTextEnglish,id);
        const translatedTextUserLanguage = await translateToUserLanguage(results)

        res.status(200).json(translatedTextUserLanguage)
        await saveUserMessages(translatedTextEnglish, id)
    } catch (e) {
        res.status(401).json(e)
    }
})


