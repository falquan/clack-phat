# Stage 1 - the build process
FROM node:latest as build-deps
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
RUN rm -rf /etc/nginx/conf.d
COPY ./conf/nginx/conf /etc/nginx
COPY --from=build-deps /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
