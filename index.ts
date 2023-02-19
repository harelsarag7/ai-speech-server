import express from 'express';
import { ChatGptRoute } from './5-controllers/chatGptRoute';
import cors from 'cors'
import { MessagesRoute } from './5-controllers/MessagesRoute';

const app = express();

app.use(express.json());
app.use(cors());

app.use(ChatGptRoute);
app.use(MessagesRoute);

app.listen(3046, () => {
    console.log('listening on port 3046');
})