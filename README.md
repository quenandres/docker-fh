<img width="260" height="240" center src="./assets/images/docker.png">

# Docker - Guia para desarrolladores

## _*Sección 2: Bases de docker*_
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

## _*10. ¿Qué es Docker? y ¿Por qué debo saberlo?*_
Una imagen de docker es como un molde o una fotografia.
- Cada contenedor esta aislado de los demás.
- Es posible ejecutar varias instacias de la misma versión o diferentes versiones sin configuraciones adicionales.
- Con un comando, puedes descargar, levantar y correr todo lo que necesitas.
- Cada contenedor contiene todo lo que necesita para ejecutarse.
- Indiferente el sistema operativo HOST.

## _*11. Hola Mundo en Docker*_
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


