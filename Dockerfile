FROM node:alpine
WORKDIR /socketapp
COPY . .
RUN yarn
CMD ["yarn","start"]