# production stage
FROM nginx:1.22.0-alpine as production-stage
COPY ./dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

