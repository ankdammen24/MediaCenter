# Använd en officiell Node.js-avbildning som bas
FROM node:18-alpine

# Skapa en arbetskatalog i containern
WORKDIR /app

# Kopiera package.json och package-lock.json (om den finns)
COPY package*.json ./

# Installera Node.js beroenden
RUN npm install

# Kopiera hela projektet till containern
COPY . .

# Exponera porten som applikationen kör på
EXPOSE 3000

# Starta applikationen
CMD ["node", "server.js"]
