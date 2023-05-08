FROM node:alpine

WORKDIR /apps
COPY package.json .
RUN npm install --only-prod
COPY . .

CMD ["npm", "start"]