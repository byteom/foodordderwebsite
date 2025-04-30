# Stage 1: Build (simplified for static site)
FROM node:16 as build-stage

WORKDIR /app
COPY . .   

# Stage 2: Production
FROM nginx:alpine
COPY --from=build-stage /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]