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

# Eliminar archivos y directorios no necesarios en PROD
RUN rm -rf test && rm -rf node_modules && rm -rf package-lock.json

# instala dependecias de producción
RUN npm install --prod

CMD [ "node", "app.js" ]