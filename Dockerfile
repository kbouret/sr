# Utilisation de l'image officielle Node.js 18
FROM node:18

# Installation du client MySQL
RUN apt-get update && apt-get install -y default-mysql-client

# Créer et changer de répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port utilisé par l'API
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]
