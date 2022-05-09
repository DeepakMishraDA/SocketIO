FROM node:14.19.0
# mkdir /socketapp
# cd /socketapp
WORKDIR /socketapp
#first dot refers the current directory and refers destination which is "/socketapp" 
COPY . .
RUN yarn install
CMD ["node", "server.js"]