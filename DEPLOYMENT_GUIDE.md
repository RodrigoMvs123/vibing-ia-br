# Guia de Deployment - vibing.ia.br

## 📋 Pré-requisitos

- Conta no Vercel (vercel.com)
- Repositório GitHub com o código do projeto
- Variáveis de ambiente configuradas

## 🚀 Passo 1: Preparar o Repositório

```bash
# Certifique-se de que o vercel.json está na raiz do projeto
ls -la vercel.json

# Commit e push para o GitHub
git add .
git commit -m "Preparar para deployment no Vercel"
git push origin main
```

## 🔐 Passo 2: Configurar Variáveis de Ambiente no Vercel

1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecione seu projeto ou crie um novo
3. Vá para **Settings → Environment Variables**
4. Adicione as seguintes variáveis:

### Variáveis Obrigatórias (Email)
```
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-app-gmail
EMAIL_FROM=seu-email@gmail.com
```

### Variáveis Opcionais (Banco de Dados)
Se você usar um banco de dados:
```
DATABASE_URL=sua-connection-string
JWT_SECRET=sua-chave-secreta
```

### Variáveis de OAuth (Manus)
Se usar autenticação:
```
OAUTH_SERVER_URL=https://oauth.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
VITE_APP_ID=seu-app-id
OWNER_NAME=seu-nome
OWNER_OPEN_ID=seu-open-id
```

## 📦 Passo 3: Deploy no Vercel

### Opção A: Usando Git (Recomendado)

1. Vá para [vercel.com/new](https://vercel.com/new)
2. Selecione seu repositório GitHub
3. Vercel detectará automaticamente:
   - **Framework**: Node.js
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
4. Clique em **Deploy**

### Opção B: Usando Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Ou com variáveis de ambiente
vercel --prod --env EMAIL_USER=seu-email@gmail.com --env EMAIL_PASSWORD=sua-senha
```

## ✅ Passo 4: Verificar o Deployment

1. Acesse sua URL do Vercel (ex: `seu-projeto.vercel.app`)
2. Teste os botões:
   - ✅ "Comprar Agora" → Deve ir para Mercado Pago
   - ✅ "Fazer Proposta" → Deve abrir modal
   - ✅ "Enviar Email" → Deve enviar email para rodrigomvsrodrigo@gmail.com
   - ✅ "Contatar via WhatsApp" → Deve abrir wa.me/5516996181167

## 🔧 Troubleshooting

### Erro: "Cannot find module 'nodemailer'"
- Certifique-se de que `pnpm install` foi executado
- Verifique se `nodemailer` está em `package.json`

### Erro: "EMAIL_USER is not defined"
- Adicione as variáveis de ambiente no Vercel Dashboard
- Redeploy após adicionar as variáveis

### Emails não estão sendo enviados
- Verifique se as credenciais do Gmail estão corretas
- Ative "Senhas de app" no Gmail (https://myaccount.google.com/apppasswords)
- Verifique os logs no Vercel Dashboard

### Botões não funcionam
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se o build foi bem-sucedido
- Verifique os logs do browser (F12 → Console)

## 📊 Estrutura do Build

```
vibing-ia-br/
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.tsx
│   └── index.html
├── server/                 # Backend Express
│   ├── index.ts           # Servidor principal
│   ├── email.ts           # Funções de email
│   └── routers.ts         # Rotas tRPC
├── dist/                  # Build output
│   ├── index.js          # Backend compilado
│   └── public/           # Frontend compilado
├── package.json
├── vite.config.ts
└── vercel.json           # Configuração do Vercel
```

## 🔄 Atualizações Futuras

Para fazer atualizações após o deployment:

1. Faça as mudanças no código
2. Commit e push para GitHub
3. Vercel fará redeploy automaticamente
4. Ou use `vercel --prod` para deploy manual

## 📝 Notas Importantes

- **Nodemailer**: Usa credenciais do Gmail. Para maior segurança, use "Senhas de app" em vez de senha principal
- **Mercado Pago**: O link `https://mpago.la/2UKSxsN` é um link de pagamento direto
- **WhatsApp**: O link `wa.me/5516996181167` abre o WhatsApp Web
- **Banco de Dados**: Se usar banco de dados, certifique-se de que está acessível da internet

## 🆘 Suporte

Para mais informações:
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Node.js](https://nodejs.org/docs)
- [Documentação Nodemailer](https://nodemailer.com)
