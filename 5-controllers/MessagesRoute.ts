import express from 'express'
import { getMessagesByUser } from '../3-logic/userLogic';
export const MessagesRoute = express.Router();
// import { translateToEn, translateToUserLanguage } from '../1-dal/translate';
// import { getMessageFromChatGPTandSave } from '../3-logic/chatGptLogic';
// import { saveUserMessages } from '../3-logic/userLogic';


MessagesRoute.get('/message', async (req, res) => {
    const id = req.headers.authorization;
    console.log(id);
    
    try {
        const results = await getMessagesByUser(id)
        res.status(200).json(results)
    } catch(e) {
        res.status(404).json(e);
    }

    // console.log(message);
    
    // try {
        // const translatedTextEnglish = await translateToEn(message);        
        // const results = await getMessageFromChatGPTandSave(translatedTextEnglish,id);
        // const translatedTextUserLanguage = await translateToUserLanguage(results)

        // res.status(200).json(translatedTextUserLanguage)
        // await saveUserMessages(translatedTextEnglish, id)
    // } catch (e) {
        // res.status(401).json(e)
    // }
})


