# base image
FROM node:8

# set working directory
WORKDIR /home/node

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
#COPY package.json /app/package.json
RUN npm install

USER node
# start app
CMD ["npm", "run", "serve"]

### Build the Docker image
#`docker build -t lews-blog-vue .`

### Run the project!
#`docker run -it -v ${PWD}:/home/node -p 8080:8080 lews-blog-vue`