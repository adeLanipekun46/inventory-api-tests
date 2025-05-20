# Use official Node.js LTS image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Set environment variables (or use .env in volume)
ENV NODE_ENV=development

# Default command to run tests
CMD ["npm", "test"]
