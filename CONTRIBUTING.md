# Contribuindo para o AdotaPet Platform

🎉 Obrigado por contribuir para o AdotaPet Platform! Este documento irá guiá-lo através do processo de contribuição.

## 📝 Regras de Contribuição

1. **Siga o código de conduta**
2. **Faça fork do repositório**
3. **Crie uma branch para sua feature**
4. **Faça commit das suas mudanças**
5. **Abra um Pull Request**

## 🚀 Como Contribuir

### Reportar Bugs

1. Verifique se o bug já foi reportado
2. Crie uma nova issue com:
   - Título claro e descritivo
   - Descrição detalhada do problema
   - Passos para reproduzir
   - Ambiente (navegador, sistema operacional)
   - Capturas de tela se aplicável

### Sugerir Features

1. Verifique se a feature já foi sugerida
2. Crie uma nova issue com:
   - Título claro
   - Descrição detalhada da feature
   - Casos de uso
   - Benefícios da implementação

### Desenvolvimento

1. Faça fork do repositório
2. Clone o fork: `git clone https://github.com/seu-usuario/adota-pet-platform.git`
3. Adicione o repositório original como upstream: `git remote add upstream https://github.com/adota-pet/platform.git`
4. Crie sua branch: `git checkout -b feature/nova-feature`
5. Faça commit das suas mudanças: `git commit -m 'feat: add nova feature'`
6. Push para o fork: `git push origin feature/nova-feature`
7. Abra um Pull Request

## 📋 Checklist para Pull Requests

- [ ] Eu li o guia de contribuição
- [ ] Meu código segue as convenções de estilo
- [ ] Eu adicionei testes para as minhas mudanças
- [ ] Eu atualizei a documentação, se necessário
- [ ] Eu executei `npm run lint` e `npm run type-check`
- [ ] Eu executei os testes e todos passaram

## 🎨 Convenções de Código

### JavaScript/TypeScript

```typescript
// Boa prática
const handleAdopt = (animalId: number) => {
  // lógica
};

// Evite
const handleAdopt = (animalId) => {
  // lógica
};
```

### Componentes React

```tsx
// Boa prática
const AnimalCard = ({ animal }: { animal: Animal }) => {
  return (
    <div className="animal-card">
      <h3>{animal.name}</h3>
    </div>
  );
};

// Evite
const AnimalCard = (props) => {
  return (
    <div className="animal-card">
      <h3>{props.animal.name}</h3>
    </div>
  );
};
```

### Estilos

```css
/* Boa prática */
.animal-card {
  padding: 1rem;
  border-radius: 0.5rem;
}

/* Evite */
.animal-card {
  padding: 16px;
  border-radius: 8px;
}
```

## 📚 Documentação

- Leia a [documentação](./docs/README.md)
- Consulte as [convenções de código](./docs/CODING_STANDARDS.md)
- Veja o [guia de estilo](./docs/STYLE_GUIDE.md)

## 🤝 Comunidade

- Junte-se ao nosso [Discord](https://discord.gg/adota-pet)
- Participe das discussões no [GitHub Discussions](https://github.com/adota-pet/platform/discussions)
- Siga-nos no [Twitter](https://twitter.com/adota_pet)

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão sob a licença MIT.

---

Obrigado por ajudar a tornar o AdotaPet Platform melhor! 🐾