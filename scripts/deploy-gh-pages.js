const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuração
const OUT_DIR = 'dist';
const GH_PAGES_DIR = 'gh-pages';

console.log('🚀 Iniciando deploy para GitHub Pages...');

// 1. Build da aplicação
console.log('📦 Construindo a aplicação...');
execSync('npm run build', { stdio: 'inherit' });

// 2. Criar diretório gh-pages se não existir
if (!fs.existsSync(GH_PAGES_DIR)) {
  fs.mkdirSync(GH_PAGES_DIR);
}

// 3. Copiar arquivos de build para gh-pages
console.log('📁 Copiando arquivos para gh-pages...');
fs.readdirSync(OUT_DIR).forEach(file => {
  const src = path.join(OUT_DIR, file);
  const dest = path.join(GH_PAGES_DIR, file);
  fs.copyFileSync(src, dest);
});

// 4. Adicionar CNAME se existir
const cnamePath = path.join(__dirname, '..', 'CNAME');
if (fs.existsSync(cnamePath)) {
  fs.copyFileSync(cnamePath, path.join(GH_PAGES_DIR, 'CNAME'));
  console.log('📝 Adicionando arquivo CNAME');
}

// 5. Commit e push
console.log('📤 Enviando para GitHub Pages...');
execSync('git add gh-pages', { stdio: 'inherit' });
execSync('git commit -m "Deploy para GitHub Pages"', { stdio: 'inherit' });
execSync('git push origin gh-pages --force', { stdio: 'inherit' });

console.log('✅ Deploy concluído com sucesso!');
console.log('🔗 Sua página estará disponível em: https://seu-usuario.github.io/adota-pet-platform');