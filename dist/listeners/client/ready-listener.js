"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready',
            category: 'client'
        });
    }
    exec() {
        console.log(`${this.client.user.tag} is now online and ready!`);
    }
}
exports.default = ReadyListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHktbGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlzdGVuZXJzL2NsaWVudC9yZWFkeS1saXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUV6QyxNQUFxQixhQUFjLFNBQVEseUJBQVE7SUFDakQ7UUFDRSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRU0sSUFBSTtRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLDJCQUEyQixDQUFDLENBQUE7SUFDakUsQ0FBQztDQUNGO0FBWkQsZ0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lciB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHlMaXN0ZW5lciBleHRlbmRzIExpc3RlbmVyIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigncmVhZHknLCB7XHJcbiAgICAgIGVtaXR0ZXI6ICdjbGllbnQnLFxyXG4gICAgICBldmVudDogJ3JlYWR5JyxcclxuICAgICAgY2F0ZWdvcnk6ICdjbGllbnQnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGV4ZWMoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNsaWVudC51c2VyLnRhZ30gaXMgbm93IG9ubGluZSBhbmQgcmVhZHkhYClcclxuICB9XHJcbn1cclxuIl19