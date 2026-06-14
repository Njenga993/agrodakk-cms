FROM node:20-alpine

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./

RUN npm ci

# Force @swc/core to install the correct Alpine binary
RUN npm rebuild @swc/core --platform=linuxmusl --arch=x64

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]