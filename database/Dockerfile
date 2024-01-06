FROM mysql:8.0.28

COPY ./my.cnf /etc/mysql/my.cnf
RUN mkdir /var/lib/mysql-files -p
RUN chmod 644 /etc/mysql/my.cnf