# Använd en officiell Node.js-bild som bas
FROM node:18-alpine

# Sätt arbetskatalog till /app i containern
WORKDIR /app

# Kopiera package.json och package-lock.json om den finns
COPY package*.json ./

# Installera Node.js beroenden
RUN npm install

# Kopiera resten av applikationen
COPY . .

# Exponera porten som backend kör på
EXPOSE 3000

# Starta applikationen
CMD ["npm", "start"]
