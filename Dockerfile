FROM node:20-slim

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm install --include=optional

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]