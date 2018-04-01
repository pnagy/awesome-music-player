
FROM node:8

RUN useradd -ms /bin/sh user

WORKDIR /home/user
USER user

ADD package.json .
RUN yarn --prod && yarn cache clean

ADD src .
ADD static/music /home/user/music
CMD node index.js
