<img width="260" height="240" center src="./assets/images/docker.png">

# Docker - Guia para desarrolladores

# _*`Sección 2: Bases de docker`*_
### _Temas puntuales de la sección_
Esta sección introductoria a Docker, nos explicará cosas como: ¿Qué es Docker?, ¿Por qué debo de aprenderlo? y ¿Para qué me puede servir?.

También empezaremos con nuestros primeros comandos:

docker container:
- run
- remove
- list
- publish
- environment variables
- logs
- detached
- docker pull

Adicionalmente les mostraré como hacer lo mismo que hicimos directamente desde Docker Desktop, pero les recomiendo fuertemente que primero aprendamos los comandos desde la consola antes de intentar hacer todo directamente desde Docker Desktop y así saber lo que hacen las GUIs (Graphic User Interfaces).

## _*`10. ¿Qué es Docker? y ¿Por qué debo saberlo?`*_
Una imagen de docker es como un molde o una fotografia.
- Cada contenedor esta aislado de los demás.
- Es posible ejecutar varias instacias de la misma versión o diferentes versiones sin configuraciones adicionales.
- Con un comando, puedes descargar, levantar y correr todo lo que necesitas.
- Cada contenedor contiene todo lo que necesita para ejecutarse.
- Indiferente el sistema operativo HOST.

## _*`11. Hola Mundo en Docker`*_
```bash
docker pull hello-world
```

>

```bash
Using default tag: latest
latest: Pulling from library/hello-world
Digest: sha256:ffb13da98453e0f04d33a6eee5bb8e46ee50d08ebe17735fc0779d0349e889e9
Status: Image is up to date for hello-world:latest
docker.io/library/hello-world:latest
```

> 
Ejecución:

```
docker container run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

```


## _*`12. Borrar contenedores e imágenes`*_
#### Containers
```bash
docker container --help
```

>
Este comando nos muestra todos los comandos disponibles en _docker container_

```bash
Usage:  docker container COMMAND

Manage containers

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  inspect     Display detailed information on one or more containers
  kill        Kill one or more running containers
  logs        Fetch the logs of a container
  ls          List containers
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  prune       Remove all stopped containers
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  run         Run a command in a new container
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes
```

- Limpieza especifica
```bash
docker container rm <id_container> | <name>
```

- Limpieza general
```bash
docker container prune
```
Este comando elimina todos los contenedores que no esten siendo ejecutados.

#### Images
- Limpieza especifica
```bash
docker image rm <id_image>
```


## _*`13. Publish and Detached modes`*_
```bash
docker run -d -p 82:80 docker/getting-started
```
_-d_: *detach* Indica que el contenedor correra de manera decenlazada de la terminal, asi esta se cierre el contenedor continuara su ejecución.
_-p_: *publish* Publicar o exponer el contenedor en cierto puerto

#### _*`Puerto`*_
HOST _*:*_ CONTAINER

Inicializar un contenedor
```bash
docker start <id_container>
```

Detener un contenedor
```bash
docker stop <id_container>
```

No se puede eliminar un contenedor que esta en ejecución.

Remover un contenedor de manera forzada.
```bash
docker rm -f <id_container>
```

## _*`14. Docker Desktop - Mismos comandos ejecutados`*_

## _*`15. Variables de entorno`*_

```bash
docker pull postgres
```

```bash
docker run --name some-postgres -e POSTGRES_PASSWORD=password -d postgres
```

## _*`17. Usar la imagen de Postgres`*_

#### _Antes_
```bash
docker run --name some-postgres -dp 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```

Como se ve en el `docker cotainer ls`
```bash
5432/tcp
```


#### _Despues_
```bash
docker run --name some-postgres -dp 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```
Como se ve en el `docker cotainer ls`
```bash
0.0.0.0:5432->5432/tcp
```


## _*`18. Multiples instancias de Postgres`*_

```bash
docker container run --name postgres-alfa -e POSTGRES_PASSWORD=mypass1 -dp 5432:5432 postgres
```

```bash
docker container run --name postgres-bete -e POSTGRES_PASSWORD=mypass1 -dp 5433:5432 postgres:14-alpine3.17
```

Se cambia el nombre de la instancia y cambiamos el puerto para que no se repita

Para eliminar contenedores, se pueden enviar distintos id de contenedores

```bash
docker rm 451 351 ...
```

## _*`19. Logs del contenedor`*_

```bash
docker container logs <container id>
docker container logs --follow CONTAINER

# Para darle seguimiento a los logs del contenedor
docker container logs -f CONTAINER
```

### Tarea:
1. Montar la base de datos MARIADB con el siguiente comando
```bash
docker container run -e MARIADB_RANDOM_ROOT_PASSWORD=yes -dp 3307:3306 mariadb:jammy
```

2. Obtener el listado de los contenedores activos
3. Ejecutar el comando
```bash
docker container logs <id del contenedor>
```
4. Identificar cuál es  el password del usuario root en los logs (GENERATED ROOT PASSWORD)
5. Conectase a MariaDB desde tablePlus user:root pass: El password aleatorio generado

_Pass_: zBNknN3y1Z2%;+njRoX3%JK0W0x@DuTz

## _*`20. Tarea - Borrar todas las imágenes de Postgres`*_
```bash
docker container rm -f a2e
```

# _*`Sección 3 Volúmenes y Redes`*_
### _Temas puntuales de la sección_

Esta sección empieza a ponerse más interesante con los siguientes temas:
- Terminal interactiva dentro del contenedor
- Aplicaciones con múltiples contenedores
- Redes
- Volúmenes
- Mapeo de directorios y relaciones
- Montar un servidor Apache con PHPMyAdmin junto a MariaDB
- Revisar el file system de alpine y node

Esta sección empieza a dejar bases para el uso de los contenedores a otro nivel.

## _*`23. Ejercicio sin volúmenes - Montar Base de Datos`*_

### Tarea:
1. Montar la imagen de MariaDB con el tag jammy, publicar en el puerto 3306 del contenedor con el puerto 3306 de nuestro equipo, colocarle el nombre al contenedor de world-db (--name world-db) y definir las siguientes variables de entorno:

MARIADB_USER=example-user
MARIADB_PASSWORD=user-password
MARIADB_ROOT_PASSWORD=root-secret-password
MARIADB_DATABASE=world-db
Conectarse usando Table Plus a la base de datos con las credenciales del usuario (NO EL ROOT)

2. Conectarse a la base de datos world-db

3. Ejecutar el query de creación de tablas e inserción proporcionado

[world.sql](./assets/sql/seccion-2/world.sql)

4. Revisar que efectivamente tengamos la data

## `Solución`

```bash
docker container run --name world-db -e MARIADB_USER=example-user -e MARIADB_PASSWORD=user-password -e MARIADB_ROOT_PASSWORD=root-secret-password -e MARIADB_DATABASE=world-db -dp 3307:3306 mariadb:jammy
```

## _*`24. Tipos de volúmenes`*_
Existen 3 tipos de volúmenes, son usados para hacer persistente la data entre los reinicios o levantamientos de contenedores.

#### _`Named Volumes`_
Es el tipo de volumen mas común

Crear volumen
```bash
docker volumen create todo-db
```

Listar los volúmenes creados
```bash
docker volumen ls
```

Inspeccionar el volumen específico
```bash
docker volumen inspect todo-db
```

Remueve todos los volúmenes no usados
```bash
docker volumen prune
```

remueve uno o más volúmenes especificados
```bash
docker volumen rm VOLUME_NAME
```

Usar volumen al correr un contenedor
```bash
docker run -v todo-db:/etc/todos getting-started
```

#### _`Bind Volumes`_
Trabaja con paths absolutos
Se vincula el directorio del host con el directorio /app del contenedor

Terminal
```bash
docker run -dp 3000:3000 \ 
    -w /app -v "$(pwd):/app" \ 
    node:18-alpine \ 
    sh -c "yarn install && yarn run dev"
```


#### _`Anonymous Volumes`_
Volúmenes donde sólo se especifica el path del contenedor y Docker lo asigna automáticamente en el host
```bash
docker container run --name world-db -e MARIADB_USER=example-user -e MARIADB_PASSWORD=user-password -e MARIADB_ROOT_PASSWORD=root-secret-password -e MARIADB_DATABASE=world-db --volume world-db:/var/lib/mysql -dp 3307:3306 mariadb:jammy
```


## _*`25. PHPMyAdmin`*_
```bash
docker pull phpmyadmin:5.2.0-apache
```

```bash
docker container run --name phpmyadmin -d -e PMA_ARBITRARY=1 -p 8080:80 phpmyadmin:5.2.0-apache
```

Si los contenedores estan en la misma red, podran hablarse entre si.

## _*`26. Redes de contenedores`*_

[https://docs.docker.com/engine/tutorials/networkingcontainers/](https://docs.docker.com/engine/tutorials/networkingcontainers/)

Mostrar las redes
```bash
docker network ls
```

Crear nueva red
```bash
docker network create todo-app
```

Crear nueva red
```bash
docker network inspect <NAME o ID>
```

Borrar todas las redes no usadas
```bash
docker network prune
```

Correr una imagen y unirla a la red
```bash
docker run -d \ 
    --network todo-app --network-alias mysql \ 
    -v todo-mysql-data:/var/lib/mysql \ 
    -e MYSQL_ROOT_PASSWORD=secret \ 
    -e MYSQL_D \
    --network world-app
    mysql:8.0
```

## _*`27. Asignar la red desde la inicialización`*_

```bash
docker container run --name world-db -e MARIADB_USER=example-user -e MARIADB_PASSWORD=user-password -e MARIADB_ROOT_PASSWORD=root-secret-password -e MARIADB_DATABASE=world-db --volume world-db:/var/lib/mysql -dp 3307:3306 --network world-app mariadb:jammy
```

```bash
docker container run --name phpmyadmin -d -e PMA_ARBITRARY=1 -p 8080:80 --network world-app phpmyadmin:5.2.0-apache
```

--network <name-network>

## _*`28. Bind Volumes`*_

Los bind volumes, facilitan la conexion entre el contenedor y el host, los cambios no se ven reflejados inmediatamente.

## _*`29. Ejercicio - Bind Volumes`*_
```bash
docker container run `
    --name nest-app `
    -w /app `
    -p 8085:3000 `
    -v ${PWD}:/app `
    node:18.16-alpine3.16 sh -c "yarn install && yarn start:dev"
```

```bash
docker container run ` # Set the name of the container to 'nest-app'
    --name nest-app ` # Set the working directory inside the container to '/app'
    -w /app ` # Map port 8085 on the host to port 3000 in the container
    -p 8085:3000 ` # Mount the current directory on the host to '/app' in the container
    -v ${PWD}:/app ` # Use the 'docker pull node:18.16-alpine3.16' image
    node:18.16-alpine3.16 sh -c "yarn install && yarn start:dev" # Run the specified command inside the container
```

_-w_: workin directory ()
_-p_: publish del puerto
_-v_: Volumen
_sh -c ""_: Se ejecutado cuando la imagen se ha montado


## _*`30. Probar el enlace de directorios`*_
Configuración de ts para que se refresquen los cambios en el contenedor en tiempo real
```json
,
  "watchOptions": {
      // Use native file system events for files and directories
      "watchFile": "priorityPollingInterval",
      "watchDirectory": "dynamicprioritypolling",
      // Poll files for updates more frequently
      // when they're updated a lot.
      "fallbackPolling": "dynamicPriority",
      // Don't coalesce watch notification
      "synchronousWatchDirectory": true,
      // Finally, two additional settings for reducing the amount of p        ossible
      // files to track work from these directories
      "excludeDirectories": ["**/node_modules", "dist"]
  }
```

## _*`31. Terminal interactiva -it`*_
```bash
docker exec -it <id contenedor> (bash | bin/sh)
```
_-it_: hace interactivo el contenedor.



# _*`Sección 4 Multi-container Apps - Docker Compose`*_
### _Temas puntuales de la sección_

En esta sección trabajaremos montando aplicaciones con multiples contenedores, técnicamente usaremos la herramienta del docker compose para ejecutar todas las instrucciones que levantan los contenedores con todo lo necesario para nuestra aplicación.

- docker-compose.yml
- Crear servicios
- Volúmenes
- Bind
- Name
- Externos
- Imágenes con tags
- Comandos de ejecución al montar una imagen
- Puertos
- Manejo de variables de entorno
- Nombres de servicios y servidores
- Dependencias de otros servicios

Esto dejará las base es para que comprendamos cómo trabajar con estos archivos que nos servirán mucho para dejar documentado cómo correr y configurar la aplicación.

## _*`35. Laboratorio: Reforzamiento de lo aprendido`*_
[Tarea 1](./assets/homeworks/fourthSection.md)

## _*`37. Docker Compose - Multi Container Apps`*_

## _*`38. Correr, limpiar y otras consideraciones - Docker Compose`*_
Ejemplo de named volumes


```yml
version: '3.7'
services:
  db:
    container_name: postgres_database
    image: postgres:15.1
    volumes:
      - postgres-db:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=123456
    
  pgadmin:
    container_name: pgadmin
    depends_on: 
      - db
    image: dpage/pgadmin4:6.17
    ports:
      - "8080:80"
    environment:
      - PGADMIN_DEFAULT_PASSWORD=123456
      - PGADMIN_DEFAULT_EMAIL=superman@google.com

volumes:
  postgres-db:
    external: true
```


_*`40. Bind Volumes - Docker Compose`*_

Se definen 2 volumenes para _pgadmin_ y para _postgresql_.

```yml
version: '3.7'
services:
  db:
    container_name: postgres_database
    image: postgres:15.1
    volumes:
      #- postgres-db:/var/lib/postgresql/data #Ejemplo
      - ./postgresdb:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=123456
    
  pgadmin:
    container_name: pgadmin
    depends_on: 
      - db
    image: dpage/pgadmin4:6.17
    ports:
      - "8080:80"
    volumes:
      - ./pgadmin:/var/lib/pgadmin
    environment:
      - PGADMIN_DEFAULT_PASSWORD=123456
      - PGADMIN_DEFAULT_EMAIL=superman@google.com

#volumes:
#  postgres-db:
#    external: true
```


_*`42. Multi-container app - Base de datos Mongo`*_


```yml
version: "3.7"
services:
  db:
    container_name: pokemon_db
    image: mongo:6.0
    volumes:
      - poke-vol:/data/db
    environment:        
        MONGO_INITDB_ROOT_USERNAME: ${MONGO_INITDB_ROOT_USERNAME}
        MONGO_INITDB_ROOT_PASSWORD: ${MONGO_INITDB_ROOT_PASSWORD}
    ports:
      - ${PORT}:27017
    restart: always
    command: ["--auth"]

volumes:
  poke-vol:
    external: false
      
```



## _*`44. Multi-container app - Visor de Base de datos`*_

Quitamos el puerto de mongo del host para que unicamente sea accesible desde _mongo-express_


```yml
version: "3.7"
services:
  db:
    container_name: pokemon_db
    image: mongo:6.0
    volumes:
      - poke-vol:/data/db
    environment:        
        MONGO_INITDB_ROOT_USERNAME: ${MONGO_INITDB_ROOT_USERNAME}
        MONGO_INITDB_ROOT_PASSWORD: ${MONGO_INITDB_ROOT_PASSWORD}
    #ports:
    #  - ${PORT}:27017
    restart: always
    command: ["--auth"]
  mongo-express:
    depends_on:
      - db
    image: mongo-express:1.0.0-alpha.4
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: ${MONGO_INITDB_ROOT_USERNAME}
      ME_CONFIG_MONGODB_ADMINPASSWORD: ${MONGO_INITDB_ROOT_PASSWORD}
      ME_CONFIG_MONGODB_SERVER: ${MONGO_DB_NAME}
    ports:
      - 8081:8081
    restart: always
volumes:
  poke-vol:
    external: false
      
```


## _*`45. Multi-container app - Aplicación de Nest`*_


```yml
version: "3.7"
services:
  db:
    container_name: pokemon_db
    image: mongo:6.0
    volumes:
      - poke-vol:/data/db
    environment:        
        MONGO_INITDB_ROOT_USERNAME: ${MONGO_INITDB_ROOT_USERNAME}
        MONGO_INITDB_ROOT_PASSWORD: ${MONGO_INITDB_ROOT_PASSWORD}
    #ports:
    #  - ${PORT}:27017
    restart: always
    command: ["--auth"]
  mongo-express:
    depends_on:
      - db
    image: mongo-express:1.0.0-alpha.4
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: ${MONGO_INITDB_ROOT_USERNAME}
      ME_CONFIG_MONGODB_ADMINPASSWORD: ${MONGO_INITDB_ROOT_PASSWORD}
      ME_CONFIG_MONGODB_SERVER: ${MONGO_DB_NAME}
    ports:
      - 8081:8081
    restart: always

  poke-app:
    depends_on:
      - db
      - mongo-express
    image: klerith/pokemon-nest-app:1.0.0
    ports:
      - 3001:3000
    environment:
      MONGODB: mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@db:27017/${MONGO_DB_NAME}?authSource=admin
      DB_NAME: ${MONGO_DB_NAME}
    #volumes:
    #  - ./pokemon-app:/usr/src/app
    restart: always

volumes:
  poke-vol:
    external: false
      
```



# _*`Sección 5 Dockerfile - Crear imágenes`*_
### _Temas puntuales de la sección_

Esta sección es sumamente importante para la comprensión y creación de imágenes personalizadas.

- Dockerfile
- .dockerignore
- Principales comandos del Dockerfile
  - FROM
  - RUN
  - COPY
  - WORKDIR
  - Entre otros
- Asignar tags
- Build
- Buildx (Para múltiples arquitecturas)

Es una sección indispensable para poder crear de forma eficiente nuestras futuras imágenes que desplegaremos en servidores con arquitecturas diferentes a la nuestra computadora.


## _*`49. Cron-Ticker - Aplicación simple`*_
Se crea archivos _app.js_ se instala `npm i node-cron` y se crea una tarea de cada 5 segundos.

```js
const cron = require('node-cron');
let times  = 0;

cron.schedule('1-59/5 * * * * *', () => {
    times++;
    console.log('Tick cada 5 segundos '+ times);
});

console.log('inicio');
```

## _*`50. Dockerfile - primeros pasos`*_

```Dockerfile
FROM node:19.2-alpine3.16
# /app
# WORKDIR /app -> cd app
WORKDIR /app

COPY  app.js package.json ./

# instalar dependecias
RUN npm install

CMD [ "node", "app.js" ]
```

## _*`52. Reconstruir una imagen`*_


- Comando para tag de una imagen

```bash
docker build -t cron-ticker:1.0.0 .
```

- Renombrar tag de una imagen

```bash
docker image tag cron-ticker:1.0.0 cron-ticker:bufalo
```


## _*`53. Subir imagen a Docker Hub`*_

- Cambiar nombre del tag
1. origen
2. destino
```bash
docker image tag quenandres/cron-ticker quenandres/cron-ticker:bufalo
```

- Subir imagenes a docker hub

```bash
docker push quenandres/cron-ticker:bufalo
```

## _*`54. Consumir nuestra imagen de DockerHub`*_

```bash
docker pull quenandres/cron-ticker:bufalo
```

## _*`55. Añadir pruebas automáticas al código`*_

Implementación de testing.

```bash
npm i jest
```

## _*`57. Examinar la imagen creada`*_


## _*`58. Dockerignore`*_

Redujimos megas ignorando cosas innecesarias para la imagen

## _*`59. Remover archivos y carpetas de la imagen`*_

```Dockerfile
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
```

## _*`61. Forzar una plataforma en la construcción`*_

Indicamos la version de la arquitectura que tendra la imagen.

```yml
FROM --platform=linux/amd64 node:19.2-alpine3.16
```


[https://docs.docker.com/build/building/multi-platform/#getting-started](https://docs.docker.com/build/building/multi-platform/#getting-started)

```bash
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t quenandres/cron-ticker:latest --push .
```

Automaticamente se generar los versionados de la imagen en las arquitecturas descritas.


## _*`63. Buildx - Construcción en multiples arquitecturas`*_

```bash
 docker buildx build --platform linux/amd64,linux/arm64 -t quenandres/cron-ticker --push .
 ```


 # _*`Sección 6 Multi-stage build`*_
### _Temas puntuales de la sección_

En esta sección aprenderemos a realizar lo que se conoce como Multi-Stage Build, el cual no es más que el mismo proceso que vimos anteriormente del docker file, pero en una agrupación de pasos.
Puntualmente veremos:

- Variables de entorno para ambientes
  Stages como:
  - dev
  - dependencies
  - prod-dependencies
  - prod
  - runner
  - builder
  - tester
- Configuraciones adicionales
- Dockerfile + Docker Compose
- Bind mounts en Compose
- Seleccionar un stage específico a ejecutar únicamente
- Docker Compose para producción
- Auto tag en Compose

Es una sección indispensable para poder crear de forma eficiente nuestras futuras imágenes que desplegaremos en servidores con arquitecturas diferentes a la nuestra computadora.


## _*`67. Continuación de proyecto`*_

## _*`68. Multi-State Build`*_
