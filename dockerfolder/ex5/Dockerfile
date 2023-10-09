FROM node:14
WORKDIR /app
COPY . .
WORKDIR /app/simpleapp
RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]
