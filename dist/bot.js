"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const bot_client_1 = __importDefault(require("./client/bot-client"));
const client = new bot_client_1.default({ token: config_1.token, owners: config_1.owners });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUErQztBQUMvQyxxRUFBMkM7QUFFM0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxvQkFBUyxDQUFDLEVBQUUsS0FBSyxFQUFMLGNBQUssRUFBRSxNQUFNLEVBQU4sZUFBTSxFQUFFLENBQUMsQ0FBQTtBQUMvQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b2tlbiwgb3duZXJzIH0gZnJvbSAnLi9jb25maWcvY29uZmlnJ1xyXG5pbXBvcnQgQm90Q2xpZW50IGZyb20gJy4vY2xpZW50L2JvdC1jbGllbnQnXHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQm90Q2xpZW50KHsgdG9rZW4sIG93bmVycyB9KVxyXG5jbGllbnQuc3RhcnQoKVxyXG4iXX0=