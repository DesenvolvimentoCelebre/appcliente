# Usar a imagem oficial do Node.js como base
FROM node:17

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de configuração do npm
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta que a aplicação irá rodar (ajuste se necessário)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
