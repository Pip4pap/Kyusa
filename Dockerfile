#Build stage
FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
        
#Production stage
EXPOSE 80
CMD ["node", "server.js"]