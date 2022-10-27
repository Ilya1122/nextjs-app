FROM node:14.18.1-alpine

WORKDIR /main

COPY package.json /main

RUN yarn install

COPY . /main

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
