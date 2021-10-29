import { ActivityHandler } from "botbuilder";

export class Bot extends ActivityHandler {
  constructor(){
    super();

    this.onMessage(async (context, next) => {
      await context.sendActivity(`Eco '${ context.activity.text }'`);
      await next();
    });

    this.onMembersAdded(async (context, next) => {
      const membersAdded: any = context.activity.membersAdded;
      for (const member of membersAdded) {
        if (member.id !== context.activity.recipient.id) {
          await context.sendActivity('Bienvenidos mi nombre es TestBot');
        }
      }
      await next();
    });
  }
}
