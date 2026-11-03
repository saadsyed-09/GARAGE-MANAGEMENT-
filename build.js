
const fs = require('fs');

fs.rmSync('www', { recursive: true, force: true });
fs.mkdirSync('www', { recursive: true });

fs.copyFileSync('index.html', 'www/index.html');

// Copy existing background if available
if (fs.existsSync('garage-bg.png')) {
  fs.copyFileSync('garage-bg.png', 'www/garage-bg.png');
}

// Copy CarvoX logo
if (fs.existsSync('assets/assets/carvox-logo.png')) {
  fs.mkdirSync('www/assets', { recursive: true });
  fs.copyFileSync(
    'assets/assets/carvox-logo.png',
    'www/assets/carvox-logo.png'
  );
}

console.log('CarvoX web assets copied to www/');
