FROM node:lts-alpine3.18
ENV port=3010

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
EXPOSE 3010
CMD [ "npm", "start" ]