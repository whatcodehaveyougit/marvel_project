FROM node:17-alpine
# The parent image

# It will go inside a subdirectory on the image
WORKDIR /app

# Copying over the package.json to the root directory of the image 
COPY package.json .

RUN npm install

# Copy all the files from this level, put it in ./app as we are there right now
COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]