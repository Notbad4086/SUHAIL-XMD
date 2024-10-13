const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923139822769";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923139822769";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923139822769";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923139822769,923139822769";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_03_10_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMixcbiAgICAgICAgMTUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODksXG4gICAgICAgIDg4LFxuICAgICAgICA1NixcbiAgICAgICAgODMsXG4gICAgICAgIDI0LFxuICAgICAgICA4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICAyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibWtKU2s4U2VUd3ArVEtGNU5ZQmRJbkJXbU51MXRQMzJpT3BQbkFjT1pvbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicl9TUWFhd3VTT2VwVGRLbTdYTGprQVwiLFxuICBcInBob25lSWRcIjogXCJhODQxNDJjOC05ZDA4LTRiYWQtYTllNC1mZWYyYTExZjgzODZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMjU1LFxuICAgICAgMTU2LFxuICAgICAgNDIsXG4gICAgICA5MSxcbiAgICAgIDE1LFxuICAgICAgOTgsXG4gICAgICA0NyxcbiAgICAgIDEwNSxcbiAgICAgIDE5NCxcbiAgICAgIDgwLFxuICAgICAgNDAsXG4gICAgICA0MixcbiAgICAgIDIwMyxcbiAgICAgIDEwOCxcbiAgICAgIDQ5LFxuICAgICAgODMsXG4gICAgICAxNTgsXG4gICAgICAxMzgsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMTc4LFxuICAgICAgOCxcbiAgICAgIDExMixcbiAgICAgIDEwMCxcbiAgICAgIDEzLFxuICAgICAgMjI4LFxuICAgICAgMTM5LFxuICAgICAgNTAsXG4gICAgICAxODcsXG4gICAgICAxNTksXG4gICAgICAxNDIsXG4gICAgICAxNDIsXG4gICAgICAxNixcbiAgICAgIDIwNyxcbiAgICAgIDEwMixcbiAgICAgIDE4MyxcbiAgICAgIDIzNixcbiAgICAgIDIsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRE0zVkFLWEZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEzOTgyMjc2OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCThqkqSSBBTSBCQUNLKvCThqogXl9eXFxuXFxuXFxuXl9eXFxuXFxuXFxuXl9eXFxuXFxuXFxuXl9eXFxuXFxuXFxuXl9eXFxuXFxuXFxuXl9eXFxuXFxuXFxuXl9eXFxuXFxuXFxuXl9eIPCdmoPwnZm48J2ZvPCdmbQg8J2Zv/CdmbDwnZqC8J2agi4uXCIsXG4gICAgXCJsaWRcIjogXCIxNDIwMzg1OTUyNTgzNjoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKakl0dnNGRVA3UnJyZ0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBxZWg5Wm1LYUxGRDFLMFJ6NktQRllqVjM4VWZOUGIydnZFcVJ5eUYyU3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWDAyR2ZWZ1pPR3I0Y0todkJCSHVMeW5rd0lLREtYd1hiaHB5WTI2WlJpK3ZBRmNyM0VrUmh5NEgxQ2s4c2lueEJ6cnRUbG5CZ2hoaUdIOUVnSnl6QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDUrRE1tSHRFRUd4MWtGZU9rT1NZclI4bmtndTRXMkFvRWdxR1FtL2t1WlZPczNPNDdXdVlZaEtSbUY5cStEZnEySXBPdXcvOVJzdFFsVHZMZTFIREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTM5ODIyNzY5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4ODE3NDEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUZHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFRkcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzS0Q2TE8xVUtnTjdTTFk0UGdTWDZ0Rk9WM0RHclFISTFLNFpzWi91aWlrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MDEwMjA5NTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODU1NTIyOTAyNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
