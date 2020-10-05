import { token, owners } from './config/config'
import BotClient from './client/bot-client'

const client = new BotClient({ token, owners })
client.start()
