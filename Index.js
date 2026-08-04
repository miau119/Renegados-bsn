
import 'dotenv/config';
import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { createClient } from '@supabase/supabase-js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.commands = new Collection();

export const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

client.once('ready', () => {
    console.log(`✅ ${client.user.tag} está en línea.`);
});

client.login(process.env.DISCORD_TOKEN);
