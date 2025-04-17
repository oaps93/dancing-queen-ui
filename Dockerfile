#Latest LTS version of Node.js
FROM node:18-alpine
#Set working directory inside container
WORKDIR /app
#Copy package.json and package-lock.json
COPY package*.json ./
#Install dependencies
RUN npm install
#Copy the rest of the application files
COPY . .
#Expose the port
EXPOSE 3000
#Define command to run the app
CMD ["npm", "start"]