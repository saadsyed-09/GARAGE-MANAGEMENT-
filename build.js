const fs = require('fs');

const path = require('path');

// Clean old build
fs.rmSync('www', { recursive: true, force: true });

// Create web folder
fs.mkdirSync('www', { recursive: true });

// Copy main HTML
fs.copyFileSync('index.html', 'www/index.html');

// Copy background if available
if (fs.existsSync('garage-bg.png')) {
fs.copyFileSync('garage-bg.png', 'www/garage-bg.png');
}

// Copy CarvoX logo
const logoPath = 'assets/assets/carvox-logo.png';

if (fs.existsSync(logoPath)) {
fs.mkdirSync('www/assets', { recursive: true });

fs.copyFileSync(
logoPath,
'www/assets/carvox-logo.png'
);

console.log('CarvoX logo copied successfully!');
} else {
console.log('CarvoX logo not found. Check logo path.');
}

console.log('CarvoX web assets copied to www/');
