FROM node:18

COPY . /project
WORKDIR /project/server
RUN npm install

CMD cd /project/server && npm run start
