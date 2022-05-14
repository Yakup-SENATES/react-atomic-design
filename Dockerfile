FROM node:lts-alpine
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install
COPY . .
CMD ["npm", "start"]




#FROM node:16.14.2-buster

#WORKDIR /app

#COPY package.json package.json
#COPY package-lock.json package-lock.json

#RUN npm install

#COPY . .

#CMD ["npm","run", "start"]