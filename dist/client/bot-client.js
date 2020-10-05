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
            handleEdits: true,
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
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmmiters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LWNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvYm90LWNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUE4RTtBQUU5RSwrQkFBMkI7QUFDM0IsNkNBQWlEO0FBY2pELE1BQXFCLFNBQVUsU0FBUSw2QkFBWTtJQWdDakQsWUFBbUIsTUFBa0I7UUFDbkMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNO1NBQ3ZCLENBQUMsQ0FBQTtRQWpDRyxvQkFBZSxHQUFHLElBQUksZ0NBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDakQsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQztTQUM5QyxDQUFDLENBQUE7UUFFSyxtQkFBYyxHQUFHLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDL0MsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQU4sZUFBTTtZQUNOLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLG1CQUFtQixFQUFFLEdBQUc7WUFDeEIsZUFBZSxFQUFFLEdBQUc7WUFDcEIsZ0JBQWdCLEVBQUU7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FDL0MsR0FBRyxHQUFHLDhDQUE4QztvQkFDdEQsV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQy9DLEdBQUcsR0FBRyw4Q0FBOEM7b0JBQ3RELE9BQU8sRUFDTCxxRUFBcUU7b0JBQ3ZFLEtBQUssRUFDSCxnR0FBZ0c7b0JBQ2xHLE1BQU0sRUFBRSxnQ0FBZ0M7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNWO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2Q7WUFDRCxpQkFBaUIsRUFBRSxlQUFNO1NBQzFCLENBQUMsQ0FBQTtRQU9BLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUMvQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLE9BQU87U0FDUixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLO1FBQ2hCLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RDLENBQUM7Q0FDRjtBQXhERCw0QkF3REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBa2Fpcm9DbGllbnQsIENvbW1hbmRIYW5kbGVyLCBMaXN0ZW5lckhhbmRsZXIgfSBmcm9tICdkaXNjb3JkLWFrYWlybydcclxuaW1wb3J0IHsgVXNlciwgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnXHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBwcmVmaXgsIG93bmVycyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnXHJcblxyXG5kZWNsYXJlIG1vZHVsZSAnZGlzY29yZC1ha2Fpcm8nIHtcclxuICBpbnRlcmZhY2UgQWthaXJvQ2xpZW50IHtcclxuICAgIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlclxyXG4gICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXJcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBCb3RPcHRpb25zIHtcclxuICB0b2tlbj86IHN0cmluZ1xyXG4gIG93bmVyczogc3RyaW5nIHwgc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90Q2xpZW50IGV4dGVuZHMgQWthaXJvQ2xpZW50IHtcclxuICBwdWJsaWMgY29uZmlnOiBCb3RPcHRpb25zXHJcbiAgcHVibGljIGxpc3RlbmVySGFuZGxlciA9IG5ldyBMaXN0ZW5lckhhbmRsZXIodGhpcywge1xyXG4gICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgJy4uJywgJ2xpc3RlbmVycycpXHJcbiAgfSlcclxuXHJcbiAgcHVibGljIGNvbW1hbmRIYW5kbGVyID0gbmV3IENvbW1hbmRIYW5kbGVyKHRoaXMsIHtcclxuICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsICcuLicsICdjb21tYW5kcycpLFxyXG4gICAgcHJlZml4LFxyXG4gICAgYWxsb3dNZW50aW9uOiB0cnVlLFxyXG4gICAgaGFuZGxlRWRpdHM6IHRydWUsXHJcbiAgICBjb21tYW5kVXRpbExpZmV0aW1lOiAzZTUsXHJcbiAgICBkZWZhdWx0Q29vbGRvd246IDZlNCxcclxuICAgIGFyZ3VtZW50RGVmYXVsdHM6IHtcclxuICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgbW9kaWZ5U3RhcnQ6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PlxyXG4gICAgICAgICAgYCR7c3RyfVxcblxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgY29tbWFuZC4uLmAsXHJcbiAgICAgICAgbW9kaWZ5UmV0cnk6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PlxyXG4gICAgICAgICAgYCR7c3RyfVxcblxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgY29tbWFuZC4uLmAsXHJcbiAgICAgICAgdGltZW91dDpcclxuICAgICAgICAgIFwiSSBkb24ndCBoYXZlIHRoZSB3aG9sZSBkYXksIG1hdGUuIFRoZSBjb21tYW5kIGhhcyBiZWVuIGNhbmNlbGxlZC4uLlwiLFxyXG4gICAgICAgIGVuZGVkOlxyXG4gICAgICAgICAgJ1lvdSBhcmUgdHJ5aW5nIHZlcnkgaGFyZCwgYnV0IHlvdSBleGNlZWQgdGhlIGFtb3VudCBvZiB0cmllcy4gVGFrZSBpdCBlYXN5IGZvciBhIGxpdHRsZSB3aGlsZS4nLFxyXG4gICAgICAgIGNhbmNlbDogJ1RoZSBjb21tYW5kIGhhcyBiZWVuIGNhbmNlbGVkLicsXHJcbiAgICAgICAgcmV0cmllczogMyxcclxuICAgICAgICB0aW1lOiAzZTRcclxuICAgICAgfSxcclxuICAgICAgb3RoZXJ3aXNlOiAnJ1xyXG4gICAgfSxcclxuICAgIGlnbm9yZVBlcm1pc3Npb25zOiBvd25lcnNcclxuICB9KVxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBCb3RPcHRpb25zKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIG93bmVySUQ6IGNvbmZpZy5vd25lcnNcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWdcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgX2luaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLnVzZUxpc3RlbmVySGFuZGxlcih0aGlzLmxpc3RlbmVySGFuZGxlcilcclxuICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLnNldEVtbWl0ZXJzKHtcclxuICAgICAgY29tbWFuZEhhbmRsZXI6IHRoaXMuY29tbWFuZEhhbmRsZXIsXHJcbiAgICAgIGxpc3RlbmVySGFuZGxlcjogdGhpcy5saXN0ZW5lckhhbmRsZXIsXHJcbiAgICAgIHByb2Nlc3NcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5jb21tYW5kSGFuZGxlci5sb2FkQWxsKClcclxuICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLmxvYWRBbGwoKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBhd2FpdCB0aGlzLl9pbml0KClcclxuICAgIHJldHVybiB0aGlzLmxvZ2luKHRoaXMuY29uZmlnLnRva2VuKVxyXG4gIH1cclxufVxyXG4iXX0=