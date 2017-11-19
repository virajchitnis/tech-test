#!/bin/sh

mongod --fork --logpath /var/log/mongod.log &&
yarn start
