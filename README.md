# vibing.ia.br - Premium Domain Sales Landing Page

🌐 **Live:** [https://vibing.ia.br](https://vibing.ia.br)

Um site moderno e elegante para venda do domínio premium **vibing.ia.br**, desenvolvido com React, Tailwind CSS e Node.js/Express. O site apresenta design minimalista em preto e branco, suporte bilíngue (português/inglês), e integração completa com sistemas de pagamento e contato.

## 🎯 Visão Geral do Projeto

Este projeto é uma landing page de venda de domínio premium posicionada para o mercado brasileiro de IA e startups tech. O domínio **vibing.ia.br** é apresentado como uma identidade pronta para uso em projetos de IA, vibe coding, comunidades de desenvolvedores e ferramentas criativas.

**Preço**: R$ 100.000

## ✨ Características Principais

### Design & UX
- **Design Minimalista**: Fundo preto puro com texto branco, estética premium e limpa
- **Layout Responsivo**: Funciona perfeitamente em desktop e mobile, sem necessidade de scroll
- **Tipografia Premium**: IBM Plex Mono para headings (técnico), Inter para body text
- **Animações Suaves**: Transições elegantes e efeitos de hover refinados

### Funcionalidades
- **Suporte Bilíngue**: Português (PT) e Inglês (EN) com seletor de idioma
- **Pricing Card**: Card destacado com preço e opções de compra
- **Formulários de Contato**: 
  - Modal "Fazer Proposta" com campos para nome, email, empresa, valor da proposta e mensagem
  - Modal "Enviar Email" para contato direto
- **Múltiplos Canais de Contato**:
  - WhatsApp: wa.me/5516996181167
  - Email: rodrigomvsrodrigo@gmail.com
  - Mercado Pago: https://mpago.la/2UKSxsN

### Integração de Pagamento
- **Mercado Pago**: Link de pagamento integrado para processar a venda
- **Envio de Emails**: Sistema de email via Nodemailer para receber propostas e mensagens
- **Botões de Ação**: CTA claro com "Comprar Agora" (Mercado Pago) e "Fazer Proposta"

## 🛠️ Stack Técnico

### Frontend
- **React 19**: Framework UI moderno
- **Tailwind CSS 4**: Estilização utility-first
- **TypeScript**: Type safety
- **Lucide React**: Ícones vetoriais
- **Vite**: Build tool rápido

### Backend
- **Node.js**: Runtime JavaScript
- **Express 4**: Framework web minimalista
- **Nodemailer**: Envio de emails
- **TypeScript**: Type safety no servidor

### Deployment
- **Vercel**: Plataforma de deployment — [https://vibing.ia.br](https://vibing.ia.br)
- **GitHub**: Controle de versão

## 📋 Estrutura do Projeto

```
vibing-ia-br/
├── client/                          # Frontend React
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx            # Página principal
│   │   ├── components/
│   │   │   ├── ContactModal.tsx    # Modal de proposta
│   │   │   ├── EmailModal.tsx      # Modal de email
│   │   │   └── LanguageSwitcher.tsx # Seletor de idioma
│   │   ├── App.tsx                 # Componente raiz
│   │   ├── main.tsx                # Entry point
│   │   └── index.css               # Estilos globais
│   ├── index.html                  # HTML template
│   └── vite.config.ts              # Configuração Vite
├── server/
│   ├── index.ts                    # Servidor Express
│   ├── email.ts                    # Funções de email
│   └── _core/                      # Código de framework
├── package.json                    # Dependências
├── tsconfig.json                   # Configuração TypeScript
└── README.md                        # Este arquivo
```

## 🚀 Como Usar

### Instalação Local

```bash
# Clonar repositório
git clone <seu-repo-url>
cd vibing-ia-br

# Instalar dependências
pnpm install

# Configurar variáveis de ambiente
# Criar arquivo .env.local com:
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-app
EMAIL_FROM=seu-email@gmail.com
```

### Desenvolvimento Local

```bash
# Iniciar servidor de desenvolvimento (frontend + backend)
pnpm dev

# O site estará disponível em http://localhost:3000
```

### Build para Produção

```bash
# Fazer build
pnpm build

# Iniciar servidor de produção
pnpm start
```

## 🔐 Variáveis de Ambiente

O projeto requer as seguintes variáveis de ambiente para funcionar corretamente:

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `EMAIL_USER` | Email do Gmail para envio | seu-email@gmail.com |
| `EMAIL_PASSWORD` | Senha de app do Gmail | xxxx xxxx xxxx xxxx |
| `EMAIL_FROM` | Email de origem dos emails | seu-email@gmail.com |

### Como Obter Credenciais Gmail

1. Ativar autenticação de dois fatores na conta Google
2. Gerar "Senha de App" em https://myaccount.google.com/apppasswords
3. Usar a senha gerada no campo `EMAIL_PASSWORD`

## 📧 Sistema de Emails

O projeto utiliza **Nodemailer** para enviar emails via Gmail. Dois endpoints estão disponíveis:

### POST `/api/email/proposal`
Envia email quando usuário submete uma proposta

**Body:**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "company": "Tech Startup",
  "offerAmount": 95000,
  "message": "Estou interessado no domínio"
}
```

### POST `/api/email/contact`
Envia email quando usuário usa o formulário de contato

**Body:**
```json
{
  "name": "Maria Santos",
  "email": "maria@example.com",
  "subject": "Interesse no domínio",
  "message": "Gostaria de saber mais sobre o domínio"
}
```

## 🌐 Deployment no Vercel

Este projeto está **100% pronto para Vercel**. Siga os passos:

### Passo 1: Preparar Repositório GitHub
```bash
# Inicializar git (se não estiver)
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <seu-repo-url>
git push -u origin main
```

### Passo 2: Conectar ao Vercel
1. Acesse https://vercel.com
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Vercel detectará automaticamente que é um projeto Node.js

### Passo 3: Configurar Variáveis de Ambiente no Vercel
Na página de configuração do Vercel, adicione as seguintes variáveis de ambiente:

| Chave | Valor |
|-------|-------|
| `EMAIL_USER` | seu-email@gmail.com |
| `EMAIL_PASSWORD` | xxxx xxxx xxxx xxxx |
| `EMAIL_FROM` | seu-email@gmail.com |

**⚠️ IMPORTANTE**: Você **DEVE** configurar essas mesmas variáveis no Vercel para que os emails funcionem em produção. Sem essas variáveis, o sistema de email não funcionará após o deploy.

### Passo 4: Deploy
Clique em "Deploy" e aguarde a conclusão

**Importante**: O Vercel executará automaticamente `pnpm build` e `pnpm start` baseado no `package.json`.

## ✅ Checklist de Deployment

- [ ] Repositório GitHub criado e código enviado
- [ ] **Variáveis de ambiente configuradas no Vercel** (EMAIL_USER, EMAIL_PASSWORD, EMAIL_FROM)
- [ ] Domínio customizado configurado (opcional)
- [ ] Emails testados após deploy
- [ ] Links de Mercado Pago verificados
- [ ] WhatsApp e Email funcionando

## 🔗 Integrações Externas

### Mercado Pago
- Link de pagamento: https://mpago.la/2UKSxsN
- Botão "Comprar Agora" redireciona para este link
- Não requer configuração adicional

### WhatsApp
- Número: +55 16 99618-1167
- Botão "Contatar via WhatsApp" abre conversa
- Usa API wa.me do WhatsApp

### Email
- Destinatário: rodrigomvsrodrigo@gmail.com
- Enviado via Nodemailer + Gmail
- Requer credenciais de app do Gmail

## 📱 Responsividade

O site é totalmente responsivo:
- **Desktop**: Layout de 2 colunas (hero text + pricing card)
- **Tablet**: Layout adaptado com espaçamento reduzido
- **Mobile**: Layout de coluna única, otimizado para toque

## 🎨 Customização

### Alterar Preço
Edite `client/src/pages/Home.tsx`:
```tsx
price: "R$ 100.000", // Alterar este valor
```

### Alterar Contatos
Edite `client/src/pages/Home.tsx`:
```tsx
const handleWhatsAppContact = () => {
  window.open("https://wa.me/SEU_NUMERO", "_blank");
};

const handleEmailContact = () => {
  window.location.href = "mailto:SEU_EMAIL@gmail.com";
};
```

### Alterar Link Mercado Pago
Edite `client/src/pages/Home.tsx`:
```tsx
const handleStripeCheckout = () => {
  window.open("https://mpago.la/SEU_LINK", "_blank");
};
```

## 🐛 Troubleshooting

### Emails não estão sendo enviados
1. Verifique se `EMAIL_USER` e `EMAIL_PASSWORD` estão corretos
2. Confirme que a "Senha de App" foi gerada no Google
3. Verifique os logs do servidor para mensagens de erro
4. **No Vercel**: Confirme que as variáveis de ambiente foram configuradas corretamente

### Site não carrega no Vercel
1. Verifique se todas as variáveis de ambiente estão configuradas
2. Confirme que o build foi bem-sucedido nos logs do Vercel
3. Limpe o cache e faça redeploy

### WhatsApp não abre
1. Verifique se o número está no formato correto: +55 16 99618-1167
2. Teste em um navegador diferente

## 📞 Suporte

Para questões sobre o projeto, entre em contato via:
- **Email**: rodrigomvsrodrigo@gmail.com
- **WhatsApp**: wa.me/5516996181167

## 📄 Licença

Este projeto é de propriedade privada. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para vibing.ia.br**
