# GoBarber 2.0 Back End

## Database Setup

Create a persistent postgres docker container.

1. Check whether any processes are using postgres' default port:

```bash
$ lsof -i :5432
```

2. Create the container:

_The first port number is the port we will interface with through our machine, and the second is the port that postgres will expose inside the container._

_- If your're **outside** this postgres container and you wish to interface with it, you should use the first port number_

_- If you spawn a shell **inside** the postgres container and you wish to interface with postgres, you should use the second port number._

_For the most part, there's no reason to change the second port number._

```bash
$ docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d -t postgres
```

3. check container's logs:

```bash
$ docker logs postgres
```

4. Access postgres and create the appropriate user and databases.

## App Setup

1. Create and configure a dotenv file:

```bash
$ cp .env.example .env
```

2. Install dependencies, run migrations and deploy the dev server:

```bash
$ yarn install && yarn typeorm migration:run && yarn dev:server
```

## Run Tests

```bash
$ yarn test
```
