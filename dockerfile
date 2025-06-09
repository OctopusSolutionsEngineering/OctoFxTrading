FROM node
LABEL org.opencontainers.image.source="https://github.com/OctopusSolutionsEngineering/OctoFX-trading"
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["node","app.js"]