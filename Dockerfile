FROM nginx
COPY default.conf /etc/nginx/conf.d/
COPY ~/Documents/_WEARERED/ssl/* /etc/ssl/

COPY ./build/ /usr/share/nginx/html
