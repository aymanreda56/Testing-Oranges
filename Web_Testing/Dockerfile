FROM cypress/base:10
workdir /app
COPY . .
RUN npm install --save-dev cypress
CMD npx cypress run --headless                          
