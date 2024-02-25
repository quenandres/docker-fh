# Dependecias de desarrollo
FROM node:19.2-alpine3.16 as dependencies
WORKDIR /app
COPY  package.json ./
# instalar dependecias
RUN npm install

# Realizar testing
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
# Realizar testing
RUN npm run test

# Instalar dependencias de producción
FROM node:19.2-alpine3.16 as dependencies-prod
# /app
# WORKDIR /app -> cd app
WORKDIR /app
COPY  package.json ./
# instalar dependecias
RUN npm install --prod

FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=dependencies-prod /app/node_modules ./node_modules
COPY  app.js ./
COPY tasks/ ./tasks

CMD [ "node", "app.js" ]