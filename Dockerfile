FROM nginx:1.25.2

COPY ./dist/ /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d
RUN service nginx start
EXPOSE 80
CMD ["tail", "-f", "/dev/null"]
