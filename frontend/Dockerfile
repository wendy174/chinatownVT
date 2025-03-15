FROM node:18.20.4
# Working directory 
# on CLI type pwd
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Expose the port 
EXPOSE 5173

# Start the application 
CMD ["npm", "run", "dev", "--","--host"]