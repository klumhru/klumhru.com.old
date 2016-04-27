FROM nginx

COPY /src/app.min.js /usr/share/nginx/html/app.min.js
COPY /src/index.html /usr/share/nginx/html/index.html
COPY /src/img/ /usr/share/nginx/html/img/
COPY /src/css/ /usr/share/nginx/html/css/
