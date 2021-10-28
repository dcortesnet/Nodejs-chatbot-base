import express from 'express';
import * as botbuilder from 'botbuilder';
require('dotenv').config();

const app = express();

console.log(process.env.MICROSOFT_APP_ID);
console.log(process.env.MICROSOFT_APP_PASSWORD);

// Cree un adaptador de bot, que define cómo el bot envía y recibe mensajes.
const botFrameworkAdapter = new botbuilder.BotFrameworkAdapter({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/api/messages', (req, res) => {
  // Utilice el adaptador para procesar la solicitud web entrante en un objeto TurnContext.
  botFrameworkAdapter.processActivity(req, res, async (turnContext) => {
    if(turnContext.activity.type === 'message'){
      // Obtener el texto del usuario através del turnContext
      const utterance = turnContext.activity.text;
      // Enviar mensaje
      await turnContext.sendActivity(`Eco ${utterance}`)
    }
  });
});

app.listen(3978, () => {
  console.log('Server running');
});
