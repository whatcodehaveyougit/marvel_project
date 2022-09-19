FROM node:13.12.0-alpine
# The parent image

# It will go inside a subdirectory on the image
WORKDIR /marvel_react_app

# Copying over the package.json to the root directory of the image 
COPY package.json .

RUN npm install --verbose

# Copy all the files from this level, put it in ./app as we are there right now
COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]