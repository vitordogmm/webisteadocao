# AdotaPet Platform

🐾 Plataforma de adoção de animais que conecta canis com famílias amorosas.

## 🚀 Funcionalidades

- **Catálogo de Animais**: Browse e filtre animais disponíveis para adoção
- **Sistema de Adoção**: Processo completo de solicitação de adoção
- **Painéis Administrativos**: Separados para adotantes e canis
- **Busca por Localização**: Encontre animais próximos a você
- **Favoritos**: Salve animais que você gostou
- **Notificações**: Fique atualizado sobre o status das suas solicitações

## 🛠️ Tecnologias

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router v6
- **State Management**: React Hooks + Context API
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **API**: RESTful (pronto para integração)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/adota-pet-platform.git
cd adota-pet-platform

# Instale as dependências
npm install

# Crie o arquivo .env
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça fork deste repositório
2. Crie uma conta no [Vercel](https://vercel.com)
3. Importe seu repositório
4. Configure as variáveis de ambiente (copie do `.env.example`)
5. Deploy!

Ou use o script:
```bash
npm run deploy:vercel
```

### GitHub Pages

```bash
# Build para produção
npm run build

# Deploy para GitHub Pages
npm run deploy:gh-pages
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes shadcn/ui
│   ├── animals/        # Componentes específicos de animais
│   ├── applications/   # Componentes de aplicações
│   └── shared/         # Componentes compartilhados
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks
├── services/           # Serviços de API
├── types/              # Tipos TypeScript
├── utils/              # Funções utilitárias
└── lib/                # Configurações e utilitários
```

## 🧪 Testes

```bash
# Rodar testes
npm test

# Rodar testes com UI
npm run test:ui

# Gerar relatório de cobertura
npm run test:coverage
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Pré-visualiza o build
- `npm run lint` - Roda ESLint
- `npm run type-check` - Verificação de tipos
- `npm run format` - Formatação de código
- `npm run deploy:vercel` - Deploy para Vercel
- `npm run deploy:gh-pages` - Deploy para GitHub Pages

## 🤝 Contribuindo

1. Faça fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- [IBGE](https://www.ibge.gov.br/) - Dados oficiais de estados e cidades
- [BrasilAPI](https://brasilapi.com.br/) - API de endereçamento
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS

---

Made with ❤️ by the AdotaPet Team