#!/bin/bash

cd ~/MERN/server || exit
git pull origin master
npm install
pm2 restart server.js || pm2 start server.js --name server

cd ~/MERN/client || exit
git pull origin master
npm install
npm run build
pm2 restart client.js || pm2 start serve --name client -- -s build
