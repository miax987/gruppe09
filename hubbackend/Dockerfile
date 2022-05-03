FROM node:14

WORKDIR /hubbackend
COPY package.json .
RUN npm install
COPY . .
CMD npm start
