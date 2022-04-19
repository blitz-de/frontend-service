# pull official base image
FROM node:16.13.1

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

RUN npm install react-icons --save

# add app
COPY . ./
# start app
CMD ["npm", "start"]