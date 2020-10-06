import { Command } from 'discord-akairo'
import { Message, GuildMember, MessageEmbed, ImageSize } from 'discord.js'

interface ExecAvatar {
  member: GuildMember
  size: number
}

export default class AvatarCommand extends Command {
  public constructor() {
    super('avatar', {
      aliases: ['avatar', 'av'],
      category: 'Public Commands',
      description: {
        content: 'Display avatar',
        usage: 'avatar [member]',
        examples: ['avatar', 'avatar @Host#0001', 'avatar host']
      },
      ratelimit: 6,
      args: [
        {
          id: 'member',
          type: 'member',
          match: 'rest',
          default: (msg: Message) => msg.member
        },
        {
          id: 'size',
          type: (_: Message, str: string): null | number => {
            if (
              str &&
              !isNaN(Number(str)) &&
              [16, 32, 64, 128, 256, 512, 1024, 2048].includes(Number(str))
            ) {
              return Number(str)
            }
            return null
          },
          match: 'option',
          flag: ['-size='], // ;avatar @Host#0001 -size=512
          default: 2048
        }
      ]
    })
  }

  public exec(
    message: Message,
    { member, size }: ExecAvatar
  ): Promise<Message> {
    return message.util.send(
      new MessageEmbed()
        .setTitle(`Avatar | ${member.user.tag}`)
        .setColor('RANDOM')
        .setImage(member.user.displayAvatarURL({ size: size as ImageSize }))
    )
  }
}
