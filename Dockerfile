FROM nginx:1.13.8-alpine

COPY build /usr/share/nginx/html
VOLUME /usr/share/nginx/html/conf

CMD ["nginx", "-g", "daemon off;"]
