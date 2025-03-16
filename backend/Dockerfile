# Image to be used 
FROM node:18.20.4

# Working directory 
# on CLI type pwd
WORKDIR /backend 

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Expose the port 
EXPOSE 4000

# Start the application 
CMD ["node", "index.js"]