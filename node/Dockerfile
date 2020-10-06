FROM node:lts-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 3000

USER 1000

CMD ["npm", "start"]
