# package innstall layer
FROM node:20.10.0-slim as innstaller
WORKDIR /innstaller
COPY ./src .
RUN npm install

# application runner layer
FROM node:20.10.0-slim
WORKDIR /application
COPY ./startup.dev.sh ./
COPY --from=innstaller ./innstaller ./src/
ENV NODE_ENV=development
ENV SERVER_ENV=docker
ENV TZ=utc
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV CHOKIDAR_USEPOLLING=1
CMD ["./startup.dev.sh"]