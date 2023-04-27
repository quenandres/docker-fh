<img width="260" height="240" center src="./assets/images/docker.png">

# Docker - Guia para desarrolladores

## _*`Sección 2: Bases de docker`*_
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


## _*`12. Borrar contenedores e imágenes`_*
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


## _*`13. Publish and Detached modes`_*
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

## _*`14. Docker Desktop - Mismos comandos ejecutados`_*

## _*`15. Variables de entorno`_*

```bash
docker pull postgres
```


```bash
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```
