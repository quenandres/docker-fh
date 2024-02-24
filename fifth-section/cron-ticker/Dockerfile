FROM node:19.2-alpine3.16
# /app
# WORKDIR /app -> cd app
WORKDIR /app

COPY  package.json ./

# instalar dependecias
RUN npm install

COPY  app.js ./

CMD [ "node", "app.js" ]