# Stage 1: Build
FROM node:16 as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# No build step needed as it's plain HTML/CSS/JS

# Stage 2: Production
FROM nginx:alpine
COPY --from=build-stage /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]