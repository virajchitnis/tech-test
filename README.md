Tech Test
=========

This project was built and tested on a Mac, natively and within Docker for Mac (which runs Ubuntu Linux within the container). It **was not tested on Windows because I do not have access to a Windows machine**.

This project includes a Dockerfile that is a modification of an existing one that I use for my personal website. This allows the project to be run on any machine that has docker installed, regardless of whether the machine has MongoDB, Node.js, etc installed.

To run this project using docker:
---------------------------------

1.
```
cd docker
docker build -t tech-test .
cd ..
```

The `docker` in the `cd docker` command above is referring to the `docker` directory within this project, and not something to do with your docker installation.

2.
```
docker run --detach --name tech-test --restart always -p 3000:3000 --volume `pwd`:/src tech-test
```

The `pwd` in the above command can be replaced by the absolute path of the repository `--volume /Users/somebody/directory:/src`. This is not necessary for Mac or Linux machines, but may be required for Windows machines, such as `--volume C:\Users\somebody\directory:/src` or something similar (not sure because I have not tried this on Windows).
Also, **while running step 2 above, make sure that you are in the root directory of the project**.

3.
```
docker logs -f tech-test
```

4. Once the log output says `Server started on port 3000`, open your browser to `http://localhost:3000` or `http://127.0.0.1:3000`

The docker container can then be stopped or restarted like any other docker container using `docker stop tech-test` or `docker restart tech-test`. **If you delete the container using `docker rm tech-test`, the data stored in the MongoDB database will be lost.**

To run this project natively on the machine, the prerequisites are:
-------------------------------------------------------------------

- MongoDB (tested against v2.6.10)
- Node.js (tested against v6.12.0)
- NPM (tested against v3.10.9 and v3.10.10, natively on my Mac and within docker respectively)
- Yarn (installed via `npm install -g yarn` after installing Node.js and npm and tested against v0.22.0 on my Mac and v1.3.2 within docker)

The steps to run the project are:

1. `yarn`
2. `yarn build`
3. `yarn start`
4. Open your browser to `http://localhost:3000` or `http://127.0.0.1:3000`
