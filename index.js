#!/usr/bin/node
let https = require('https'),
    fs = require('fs'),
    { accessToken } = require('./accessToken');

if (accessToken === 'put_access_token_here') {
  console.log('https://oauth.vk.com/authorize?client_id=5618042&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=offline,messages&response_type=token&v=5.33');
}

let mess = Math.floor(Math.random()*10000000) + '_tuturu_mazafaka_' + Math.floor(Math.random()*10000000),
    url = `https://api.vk.com/method/messages.send?user_id=91464737&message=${mess}&access_token=${accessToken}&v=5.53`;
https.get(url, res => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', d => {
    process.stdout.write(d);
  });
}).on('error', e => {
  console.error(e);
});
