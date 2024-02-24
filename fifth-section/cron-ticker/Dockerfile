FROM node:19.2-alpine3.16
# /app
# WORKDIR /app -> cd app
WORKDIR /app

COPY  package.json ./

# instalar dependecias
RUN npm install

COPY . .

# Realizar testing
RUN npm run test



CMD [ "node", "app.js" ]