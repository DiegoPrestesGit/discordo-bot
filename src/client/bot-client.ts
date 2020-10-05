import { AkairoClient, CommandHandler, ListenerHandler } from 'discord-akairo'
import { User, Message } from 'discord.js'
import { join } from 'path'
import { prefix, owners } from '../config/config'

declare module 'discord-akairo' {
  interface AkairoClient {
    commandHandler: CommandHandler
    listenerHandler: ListenerHandler
  }
}

interface BotOptions {
  token?: string
  owners: string | string[]
}

export default class BotClient extends AkairoClient {
  public config: BotOptions
  public listenerHandler = new ListenerHandler(this, {
    directory: join(__dirname, '..', 'listeners')
  })

  public commandHandler = new CommandHandler(this, {
    directory: join(__dirname, '..', 'commands'),
    prefix,
    allowMention: true,
    handleEdits: true,
    commandUtilLifetime: 3e5,
    defaultCooldown: 6e4,
    argumentDefaults: {
      prompt: {
        modifyStart: (_: Message, str: string): string =>
          `${str}\n\nType \`cancel\` to cancel the command...`,
        modifyRetry: (_: Message, str: string): string =>
          `${str}\n\nType \`cancel\` to cancel the command...`,
        timeout:
          "I don't have the whole day, mate. The command has been cancelled...",
        ended:
          'You are trying very hard, but you exceed the amount of tries. Take it easy for a little while.',
        cancel: 'The command has been canceled.',
        retries: 3,
        time: 3e4
      },
      otherwise: ''
    },
    ignorePermissions: owners
  })
}
