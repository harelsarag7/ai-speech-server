import * as dotenv from 'dotenv';
dotenv.config()

const googleTranslate = require('google-translate')(process.env.GOOGLE_TRANSLATE_KEY);

export function translateToEn(message: string): Promise<string> {
    console.log(message);
    return new Promise((resolve, reject) => {
        googleTranslate.translate(message, 'en', (err: any, translation: any) => {
            if (err) {
                reject(err);
                console.log(err);

            } else {
                resolve(translation.translatedText);
            }
        });
    });
}


export function translateToUserLanguage(message: string): Promise<string> {
    console.log(typeof message)
    console.log(message)
    return new Promise((resolve, reject) => {
        googleTranslate.translate(message, 'he', (err: any, translation: any) => {
            if (err) {
                reject(err);
                console.log(err);

            } else {
                resolve(translation.translatedText);
            }
        });
    });
}
