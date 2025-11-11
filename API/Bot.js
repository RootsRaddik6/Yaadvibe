const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('🌴 Welcome to YaadLife!\nTap “Launch YaadLife” to enter the island.'));

bot.launch();
console.log('YaadLife Bot Running');
