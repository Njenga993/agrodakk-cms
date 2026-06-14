FROM node:20-slim

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN rm -f package-lock.json && \
    npm install && \
    npm install @rollup/rollup-linux-x64-gnu --save-optional

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]