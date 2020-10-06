import { Command } from 'discord-akairo'
import { Message, GuildMember } from 'discord.js'
import { Repository } from 'typeorm'
import { Warn } from '../../database/entities/warn'

interface ExecWarn {
  member: GuildMember
  reason: string
}

export default class WarnCommand extends Command {
  public constructor() {
    super('warn', {
      aliases: ['warn'],
      category: 'Moderation Commands',
      description: {
        content: 'warn a member in the server',
        usage: 'warn [member] <reason>',
        examples: ['warn @Host#0001 searing', 'warn host swearing']
      },
      ratelimit: 6,
      userPermissions: ['MANAGE_MESSAGES'],
      args: [
        {
          id: 'member',
          type: 'member',
          prompt: {
            start: (msg: Message) =>
              `${msg.author}, please provide a member to warn...`,
            retry: (msg: Message) =>
              `${msg.author}, please provide a valid member to warn...`
          }
        },
        {
          id: 'reason',
          type: 'string',
          match: 'rest',
          default: 'No reason provided'
        }
      ]
    })
  }

  public async exec(
    message: Message,
    { member, reason }: ExecWarn
  ): Promise<Message> {
    const warnRepo: Repository<Warn> = this.client.db.getRepository(Warn)
    if (
      member.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    ) {
      return message.util.reply('this member has higher or equal roles to you!')
    }
    await warnRepo.insert({
      guild: message.guild.id,
      user: member.id,
      moderator: message.author.id,
      reason
    })
    return message.util.send(
      `**${member.user.tag}** has been warned by **${message.author.tag}** for *${reason}*`
    )
  }
}
