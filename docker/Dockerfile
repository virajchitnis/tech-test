FROM ubuntu:16.04
MAINTAINER Viraj Chitnis chitnisviraj@gmail.com

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y mongodb-server wget

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.12.0
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
RUN npm install -g yarn

RUN mkdir -p /data/db

WORKDIR /src
VOLUME ["/src"]

EXPOSE 3000
EXPOSE 27017

COPY docker_entrypoint.sh /usr/local/bin/
CMD ["docker_entrypoint.sh"]
