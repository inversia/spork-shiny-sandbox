FROM node:14-alpine

RUN apk update && apk add --no-cache git openssh
RUN mkdir -p ~/.ssh && ssh-keyscan github.com > ~/.ssh/known_hosts

WORKDIR /data

CMD [ "sh" ]
