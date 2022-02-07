# Specify a base image
FROM node:alpine
WORKDIR /usr/app
COPY ./ ./

# Install some dependencies
RUN npm install

# Default command
CMD ["npm", "start"]