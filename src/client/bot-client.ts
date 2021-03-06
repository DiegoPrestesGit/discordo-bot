import { AkairoClient, CommandHandler, ListenerHandler } from 'discord-akairo'
import { User, Message } from 'discord.js'
import { join } from 'path'
import { prefix, owners, dbName } from '../config/config'
import { Connection } from 'typeorm'
import connectionManager from '../database/typeorm-connection'

declare module 'discord-akairo' {
  interface AkairoClient {
    commandHandler: CommandHandler
    listenerHandler: ListenerHandler
    db: Connection
  }
}

interface BotOptions {
  token?: string
  owners: string | string[]
}

export default class BotClient extends AkairoClient {
  public config: BotOptions
  public db!: Connection
  public listenerHandler = new ListenerHandler(this, {
    directory: join(__dirname, '..', 'listeners')
  })

  public commandHandler = new CommandHandler(this, {
    directory: join(__dirname, '..', 'commands'),
    commandUtil: true,
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

  public constructor(config: BotOptions) {
    super({
      ownerID: config.owners
    })

    this.config = config
  }

  private async _init(): Promise<void> {
    try {
      this.commandHandler.useListenerHandler(this.listenerHandler)
      this.listenerHandler.setEmitters({
        commandHandler: this.commandHandler,
        listenerHandler: this.listenerHandler,
        process
      })

      this.commandHandler.loadAll()
      this.listenerHandler.loadAll()

      this.db = connectionManager.get(dbName)
      await this.db.connect()
      await this.db.synchronize()
    } catch {
      console.log('The Music Manager has found some problems to initiate')
    }
  }

  public async start(): Promise<string> {
    try {
      await this._init()
      console.log('configuration JSON', this.config)
      return this.login(this.config.token)
    } catch {
      console.log('The Music Manager has found some problems to start')
    }
  }
}
