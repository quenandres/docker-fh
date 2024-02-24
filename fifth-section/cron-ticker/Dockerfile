FROM node:19.2-alpine3.16
# /app
# WORKDIR /app -> cd app
WORKDIR /app

COPY  app.js package.json ./

# instalar dependecias
RUN npm install

CMD [ "node", "app.js" ]