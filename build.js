const fs = require('fs');
fs.rmSync('www', { recursive: true, force: true });
fs.mkdirSync('www', { recursive: true });
fs.copyFileSync('index.html', 'www/index.html');
fs.copyFileSync('garage-bg.png', 'www/garage-bg.png');
console.log('Garage Manager web assets copied to www/');
