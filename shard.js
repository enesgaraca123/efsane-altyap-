const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const scarew = new Discord.ShardingManager('index.js', { //Lütfen Main dosyanızı giriniz. Sadece burayı ve ayarlayınız.(main.js//app.js//bot.js//index.js//server.js)vb.//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    totalShards: 'auto',
/////////////////////////////////////////////////////////////////////////////////////////
    token: "NzgzMzQzMDQwMjA3MTI2NTUy.X8ZXDg.QO_Xoy1bCCz_YNaJQFaeOqikVBc" // BURAYA BOTUN TOKENİ'Nİ GİRİNİZ. | Burayı Ayarlayınız.
/////////////////////////////////////////////////////////////////////////////////////////
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);
// CodEming https://discord.gg/vArAPfK