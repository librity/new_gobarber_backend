# new_bootcamp_lesson_5

- create a dotenv file:

```bash
$ cp .env.example .env
```

- check what processes are using postgres' default port:

```bash
$ lsof -i :5432
```

- create a persistent postgres docker container:

_The first port number is the port we will interface with on our machine, and the second is the port on which docker will run inside the container. If your're outside your docker container and you wish to talk to it, you will interact with the first port number. There is no reason to change the second port number._

```bash
$ docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d -t postgres
```

- check container's logs:

```bash
$ docker logs postgres
```

