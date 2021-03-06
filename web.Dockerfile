FROM node:15.8.0-alpine as builder

RUN node -v && npm -v
RUN apk update && apk upgrade && apk add --no-cache git

COPY . /app

RUN cd /app && npm i && npm run build && mv ./dist /

# ==============================================================================

FROM nginx:alpine

RUN adduser -D -g 'www' www && mkdir -p /www /var/lib/nginx && \
    chown -R www:www /var/lib/nginx /var/log/nginx /www

# https://github.com/docker-library/docs/tree/master/nginx#using-environment-variables-in-nginx-configuration

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /dist /www

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
