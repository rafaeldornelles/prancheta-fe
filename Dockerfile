FROM nginx:1.25.2

COPY ./dist/prancheta-fe/ /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["sh", "-c", "service nginx start; tail -f /dev/null"]
