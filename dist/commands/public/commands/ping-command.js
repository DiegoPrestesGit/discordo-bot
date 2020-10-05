"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            category: 'Public Commands',
            description: {
                content: 'check the latency of the ping to the Discord API',
                usage: 'ping',
                examples: ['ping']
            },
            ratelimit: 6
        });
    }
    exec(message) {
        return message.util.send(`Pong! ${this.client.ws.ping}ms\``);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3B1YmxpYy9jb21tYW5kcy9waW5nLWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBd0M7QUFHeEMsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzlDO1FBQ0UsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRTtnQkFDWCxPQUFPLEVBQUUsa0RBQWtEO2dCQUMzRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7YUFDbkI7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTSxJQUFJLENBQUMsT0FBZ0I7UUFDMUIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUE7SUFDOUQsQ0FBQztDQUNGO0FBakJELDhCQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybydcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaW5nQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCdwaW5nJywge1xyXG4gICAgICBhbGlhc2VzOiBbJ3BpbmcnXSxcclxuICAgICAgY2F0ZWdvcnk6ICdQdWJsaWMgQ29tbWFuZHMnLFxyXG4gICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdjaGVjayB0aGUgbGF0ZW5jeSBvZiB0aGUgcGluZyB0byB0aGUgRGlzY29yZCBBUEknLFxyXG4gICAgICAgIHVzYWdlOiAncGluZycsXHJcbiAgICAgICAgZXhhbXBsZXM6IFsncGluZyddXHJcbiAgICAgIH0sXHJcbiAgICAgIHJhdGVsaW1pdDogNlxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChgUG9uZyEgJHt0aGlzLmNsaWVudC53cy5waW5nfW1zXFxgYClcclxuICB9XHJcbn1cclxuIl19