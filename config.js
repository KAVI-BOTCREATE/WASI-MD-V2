//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0JNU29TNXZ3bnNOMGF1V2IxZjQ1V1JoRkdWVUVzT2pXbVBDMWZtbytYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmpXRldQVjNTNHI4YVg1OURYTHRRdHRtN1ZxUTMxVWRJQXZ6djl0SE56MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Q2IyTTZoVDhUbUdPNE93SE96Nm4zSFplTzVKZkhnTzhNNjYrRVNaazBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3QnhtWXJzRVUwLzZUcUV1T0VHSVpuY3E5ZFdUMEswd3BWNlRJamlZQVhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllJTnF3UllHSUV4ZjBPcTdZWU1qSWcxMzE1SytyeDI5dUVsOGgyV1prblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imlaa1NMdGJUSEZQK05Ja2ZBcGxCdEM5VWdjelZTcElCSWFoVGRFMVBQQTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpwU2dYYmZaY3dGVU5hVlZicUZqWFhvWVBsTnZ1aUN5TTZvR0dOaUMzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGh6ZGhaSWR0MGVaeTFpNWJVVzlTOVA0QStycld2Zk5LMXFOYUlNenB4MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNRNEgvS0pVb0N2a3J0SnZSYWVpUFJBdzBkL1ZvU0ZZNktObElpN05hWSt0YzVncHJ2TFRienZaeThLQTBnakdGVmM0ak12YkFKK0ZjQndNNFhYOUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJhenZBTWxtME5vK1hwblJpQ1R0RTFzM3J0Z3BFVlRKWTZjWkphNVRxdnh3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgzMTgzNTI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBDMEQyNDI0MENCQjhCRjVGQzA2QjhEQzA0MjZDNkQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE4Mjc4OTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgzMTgzNTI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY4MTc3QThBOENERTBCQ0E0NDYyOUVFMUVDMjQ0NzgxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE4Mjc4OTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InAtaTBYS0tOVF9xY0pkeEd6eDc2WFEiLCJwaG9uZUlkIjoiNDdmYzIxZmMtZTk3OC00YmY3LTg1OTItOGQ5YjQxYTFjNDUwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllXZXJDWlMyZ0E1S1R4S0hCRHhrZHhqS0ltUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEQlhxMFVQY082dXZlZFd0a3FQRkZTRmxvaUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUkFIWDNCSkQiLCJtZSI6eyJpZCI6Ijk0NzgzMTgzNTI4OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2hhbnRoYSB3ZWVyYXNpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOcXA5dk1IRUtpRWhMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXYWpZbURnMHRrMUpwUFcyT2x1dVY1L0x5QnJacVlXeHQyNVV5K1NrOEZRPSIsImFjY291bnRTaWduYXR1cmUiOiJLeWtZTUkyM3RCY2hJVmhFQ2xUYmJUZzJuY0lQREMydUovNDYxWEQvcXVZaE0vWi9qWDYzeVlaSW8zbGJ3WHpsaDBVTFczWkJ2VEdKUWhFZFk5N3FDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSy9YNFJMQmJUend3YnhtMHlkd25yeE1RYm80bGN1TE9jR0piU2dGRGlPZzRHczh2dU1wMzd6bjR3SWc5QlRaUGxobVJzdWZic2IzbVpyR2hvU3liQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4MzE4MzUyODo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZtbzJKZzROTFpOU2FUMXRqcGJybGVmeThnYTJhbUZzYmR1Vk12a3BQQlUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE4Mjc4OTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTkl3In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
