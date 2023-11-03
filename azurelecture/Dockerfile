FROM node:14
WORKDIR /app
COPY package*.json ./
COPY index.js ./
RUN npm install
ENV PORT=3000
CMD ["node", "index.js"]