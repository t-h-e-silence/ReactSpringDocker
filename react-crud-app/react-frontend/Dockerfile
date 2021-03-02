FROM node:13.12.0-alpine
ENV POSTGRES_USER=user POSTGRES_PASSWORD=password

COPY . /home/NIX/altemirova/NixProject/reactspringsmployeelist/react-crud-app/react-frontend
COPY . /home/NIX/altemirova/NixProject/reactspringsmployeelist/react-crud-app/react-frontend/public
RUN mkdir -p //home/NIX/altemirova/NixProject/reactspringsmployeelist/react-crud-app/react-frontend
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.2 -g --silent

CMD ["npm", "start"]
CMD ["react-scripts", "start"]
