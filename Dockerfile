FROM nginx:1.21.6-alpine

RUN rm /usr/share/nginx/html/*

COPY build /usr/share/nginx/html