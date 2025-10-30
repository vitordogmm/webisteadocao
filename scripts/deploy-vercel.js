const { execSync } = require('child_process');

console.log('🚀 Iniciando deploy para Vercel...');

// 1. Build da aplicação
console.log('📦 Construindo a aplicação...');
execSync('npm run build', { stdio: 'inherit' });

// 2. Deploy para Vercel
console.log('📤 Enviando para Vercel...');
execSync('npm run deploy:vercel', { stdio: 'inherit' });

console.log('✅ Deploy concluído com sucesso!');