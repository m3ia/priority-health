# syntax=docker/dockerfile:1
FROM node:19-alpine as server-testing
WORKDIR /server
# Copies all files from current workdir to the base of the image
COPY /server /server
RUN npm install
CMD ["npm", "run", "test"]

FROM node:19-alpine as client-testing
WORKDIR /client
# Copies all files from current workdir to the base of the image
COPY /client /client
RUN npm install
CMD ["npm", "run", "test"]