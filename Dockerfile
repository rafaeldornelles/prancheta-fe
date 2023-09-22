FROM nginx:1.25.2

COPY ./dist/* /usr/share/nginx/html/prancheta
RUN ls /usr/share/nginx/html
RUN ls /usr/share/nginx/html/prancheta

COPY nginx.conf /etc/nginx/nginx.conf
RUN cat /etc/nginx/nginx.conf
RUN service nginx start
EXPOSE 80
CMD ["tail", "-f", "/dev/null"]