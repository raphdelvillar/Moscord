FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html
COPY build/ /app
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080