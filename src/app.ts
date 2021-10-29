import express from 'express';
import * as botbuilder from 'botbuilder';
import { Bot } from './bot';
require('dotenv').config();

const app = express();
const bot = new Bot();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const botFrameworkAdapter = new botbuilder.BotFrameworkAdapter({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

botFrameworkAdapter.onTurnError = async (context, error) => {
  console.error(`\n [onTurnError] Bot Error: ${ error }`);
  await context.sendActivity('Ups, ha ocurrido un error, favor intentar nuevamente');
};

app.post('/api/messages', (req, res) => {
  botFrameworkAdapter.processActivity(req, res, async (context) => {
    await bot.run(context);
  });
});

app.listen(3978, () => {
  console.log('Server running');
});
