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

_The first port number is the port we will interface with through our machine, and the second is the port that postgres will expose inside the container._

_- If your're **outside** this postgres container and you wish to interface with it, you should use the first port number_

_- If you spawn a shell **inside** the postgres container and you wish to interface with postgres, you should use the second port number._

_For the most part, there's no reason to change the second port number._

```bash
$ docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d -t postgres
```

- check container's logs:

```bash
$ docker logs postgres
```

