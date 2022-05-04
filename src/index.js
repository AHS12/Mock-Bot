// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env.DISCORD_TOKEN;

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	console.log('Client Object', client);
	console.log('Token from enviroment:', process.env.DISCORD_TOKEN);
	console.log('Token from variable:', token);
	console.log('User:', client.user);
	console.log('Applications:', client.application);
	// Set the bot status
	client.user.setPresence({
		status: 'online',
		activity: {
			name: 'Mockery',
			type: 'WATCHING',
		},
	});
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	switch (commandName) {
	case 'ping':
		await interaction.reply('Pong!');
		break;
	case 'server':
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
		break;
	case 'user':
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
		break;
	case 'helloworld':
		await interaction.reply('Hello!');
		break;
	default:
		await interaction.reply('Unknown command!');
		break;
	}
});

// Login to Discord with your client's token
client.login(token);