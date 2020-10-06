"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const config_1 = require("../config/config");
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, '..', 'listeners')
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, '..', 'commands'),
            prefix: config_1.prefix,
            allowMention: true,
            handleEdits: false,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    timeout: "I don't have the whole day, mate. The command has been cancelled...",
                    ended: 'You are trying very hard, but you exceed the amount of tries. Take it easy for a little while.',
                    cancel: 'The command has been canceled.',
                    retries: 3,
                    time: 3e4
                },
                otherwise: ''
            },
            ignorePermissions: config_1.owners
        });
        this.config = config;
    }
    async _init() {
        try {
            this.commandHandler.useListenerHandler(this.listenerHandler);
            this.listenerHandler.setEmitters({
                commandHandler: this.commandHandler,
                listenerHandler: this.listenerHandler,
                process
            });
        }
        catch (_a) {
            console.log('ohhh shi, a spaaa');
        }
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
    async start() {
        try {
            await this._init();
            return this.login(this.config.token);
        }
        catch (_a) {
            console.log('fuck it');
        }
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LWNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvYm90LWNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUE4RTtBQUU5RSwrQkFBMkI7QUFDM0IsNkNBQWlEO0FBY2pELE1BQXFCLFNBQVUsU0FBUSw2QkFBWTtJQWdDakQsWUFBbUIsTUFBa0I7UUFDbkMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNO1NBQ3ZCLENBQUMsQ0FBQTtRQWpDRyxvQkFBZSxHQUFHLElBQUksZ0NBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDakQsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQztTQUM5QyxDQUFDLENBQUE7UUFFSyxtQkFBYyxHQUFHLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDL0MsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQU4sZUFBTTtZQUNOLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLG1CQUFtQixFQUFFLEdBQUc7WUFDeEIsZUFBZSxFQUFFLEdBQUc7WUFDcEIsZ0JBQWdCLEVBQUU7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FDL0MsR0FBRyxHQUFHLDhDQUE4QztvQkFDdEQsV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQy9DLEdBQUcsR0FBRyw4Q0FBOEM7b0JBQ3RELE9BQU8sRUFDTCxxRUFBcUU7b0JBQ3ZFLEtBQUssRUFDSCxnR0FBZ0c7b0JBQ2xHLE1BQU0sRUFBRSxnQ0FBZ0M7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNWO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2Q7WUFDRCxpQkFBaUIsRUFBRSxlQUFNO1NBQzFCLENBQUMsQ0FBQTtRQU9BLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBSztRQUNqQixJQUFJO1lBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7Z0JBQy9CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO2dCQUNyQyxPQUFPO2FBQ1IsQ0FBQyxDQUFBO1NBQ0g7UUFBQyxXQUFNO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSztRQUNoQixJQUFJO1lBQ0YsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDckM7UUFBQyxXQUFNO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtTQUN2QjtJQUNILENBQUM7Q0FDRjtBQWhFRCw0QkFnRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBa2Fpcm9DbGllbnQsIENvbW1hbmRIYW5kbGVyLCBMaXN0ZW5lckhhbmRsZXIgfSBmcm9tICdkaXNjb3JkLWFrYWlybydcclxuaW1wb3J0IHsgVXNlciwgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnXHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBwcmVmaXgsIG93bmVycyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnXHJcblxyXG5kZWNsYXJlIG1vZHVsZSAnZGlzY29yZC1ha2Fpcm8nIHtcclxuICBpbnRlcmZhY2UgQWthaXJvQ2xpZW50IHtcclxuICAgIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlclxyXG4gICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXJcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBCb3RPcHRpb25zIHtcclxuICB0b2tlbj86IHN0cmluZ1xyXG4gIG93bmVyczogc3RyaW5nIHwgc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90Q2xpZW50IGV4dGVuZHMgQWthaXJvQ2xpZW50IHtcclxuICBwdWJsaWMgY29uZmlnOiBCb3RPcHRpb25zXHJcbiAgcHVibGljIGxpc3RlbmVySGFuZGxlciA9IG5ldyBMaXN0ZW5lckhhbmRsZXIodGhpcywge1xyXG4gICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgJy4uJywgJ2xpc3RlbmVycycpXHJcbiAgfSlcclxuXHJcbiAgcHVibGljIGNvbW1hbmRIYW5kbGVyID0gbmV3IENvbW1hbmRIYW5kbGVyKHRoaXMsIHtcclxuICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsICcuLicsICdjb21tYW5kcycpLFxyXG4gICAgcHJlZml4LFxyXG4gICAgYWxsb3dNZW50aW9uOiB0cnVlLFxyXG4gICAgaGFuZGxlRWRpdHM6IGZhbHNlLFxyXG4gICAgY29tbWFuZFV0aWxMaWZldGltZTogM2U1LFxyXG4gICAgZGVmYXVsdENvb2xkb3duOiA2ZTQsXHJcbiAgICBhcmd1bWVudERlZmF1bHRzOiB7XHJcbiAgICAgIHByb21wdDoge1xyXG4gICAgICAgIG1vZGlmeVN0YXJ0OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT5cclxuICAgICAgICAgIGAke3N0cn1cXG5cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIGNvbW1hbmQuLi5gLFxyXG4gICAgICAgIG1vZGlmeVJldHJ5OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT5cclxuICAgICAgICAgIGAke3N0cn1cXG5cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIGNvbW1hbmQuLi5gLFxyXG4gICAgICAgIHRpbWVvdXQ6XHJcbiAgICAgICAgICBcIkkgZG9uJ3QgaGF2ZSB0aGUgd2hvbGUgZGF5LCBtYXRlLiBUaGUgY29tbWFuZCBoYXMgYmVlbiBjYW5jZWxsZWQuLi5cIixcclxuICAgICAgICBlbmRlZDpcclxuICAgICAgICAgICdZb3UgYXJlIHRyeWluZyB2ZXJ5IGhhcmQsIGJ1dCB5b3UgZXhjZWVkIHRoZSBhbW91bnQgb2YgdHJpZXMuIFRha2UgaXQgZWFzeSBmb3IgYSBsaXR0bGUgd2hpbGUuJyxcclxuICAgICAgICBjYW5jZWw6ICdUaGUgY29tbWFuZCBoYXMgYmVlbiBjYW5jZWxlZC4nLFxyXG4gICAgICAgIHJldHJpZXM6IDMsXHJcbiAgICAgICAgdGltZTogM2U0XHJcbiAgICAgIH0sXHJcbiAgICAgIG90aGVyd2lzZTogJydcclxuICAgIH0sXHJcbiAgICBpZ25vcmVQZXJtaXNzaW9uczogb3duZXJzXHJcbiAgfSlcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogQm90T3B0aW9ucykge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBvd25lcklEOiBjb25maWcub3duZXJzXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIF9pbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5jb21tYW5kSGFuZGxlci51c2VMaXN0ZW5lckhhbmRsZXIodGhpcy5saXN0ZW5lckhhbmRsZXIpXHJcbiAgICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLnNldEVtaXR0ZXJzKHtcclxuICAgICAgICBjb21tYW5kSGFuZGxlcjogdGhpcy5jb21tYW5kSGFuZGxlcixcclxuICAgICAgICBsaXN0ZW5lckhhbmRsZXI6IHRoaXMubGlzdGVuZXJIYW5kbGVyLFxyXG4gICAgICAgIHByb2Nlc3NcclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICBjb25zb2xlLmxvZygnb2hoaCBzaGksIGEgc3BhYWEnKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29tbWFuZEhhbmRsZXIubG9hZEFsbCgpXHJcbiAgICB0aGlzLmxpc3RlbmVySGFuZGxlci5sb2FkQWxsKClcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5faW5pdCgpXHJcbiAgICAgIHJldHVybiB0aGlzLmxvZ2luKHRoaXMuY29uZmlnLnRva2VuKVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmdWNrIGl0JylcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19