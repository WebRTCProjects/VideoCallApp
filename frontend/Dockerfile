# develop stage
FROM node:16.17-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm i -g @quasar/cli
COPY . .

# build stage
FROM develop-stage as build-stage
RUN npm i
RUN quasar build

# production stage
FROM nginx:1.22.0-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
