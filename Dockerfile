# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /website

# add `/app/node_modules/.bin` to $PATH
ENV PATH /website/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts -g --silent

# add app
COPY . ./

# start app
ENTRYPOINT ["npm", "start"]