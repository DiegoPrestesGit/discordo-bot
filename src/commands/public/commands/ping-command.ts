import { Command } from 'discord-akairo'
import { Message } from 'discord.js'

export default class PingCommand extends Command {
  public constructor() {
    super('ping', {
      aliases: ['ping'],
      category: 'Public Commands',
      description: {
        content: 'check the latency of the ping to the Discord API',
        usage: 'ping',
        examples: ['ping']
      },
      ratelimit: 6
    })
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send(`Pong! ${this.client.ws.ping}ms\``)
  }
}
