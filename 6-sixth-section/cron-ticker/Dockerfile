FROM node:19.2-alpine3.16 AS deps

# cd app
WORKDIR /app

# Dest /app
COPY package.json ./

# Instalar las dependencias
RUN npm install


# test and build
FROM node:19.2-alpine3.16 AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

# Realizar testing
RUN npm run test

# Prod
FROM node:19.2-alpine3.16 AS prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod


# Dev
FROM node:19.2-alpine3.16 AS runner

WORKDIR /app

COPY --from=prod-deps /app/node_modules ./node_modules

COPY app.js ./

COPY tasks/ ./tasks

# Comando run de la imagen
CMD [ "node", "app.js" ]

