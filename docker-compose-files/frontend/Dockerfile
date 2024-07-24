# production stage
FROM nginx:1.16.0-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY ./dist/spa /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
