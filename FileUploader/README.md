# Getting up and running

## Download Docker

- [Docker](https://www.docker.com/get-started)

### Docker commands
- `docker-compose up`
  - This runs the `docker-compose.yml` file
- `docker-compose -f docker-compose.prod.yml up`
  - This runs docker compose on the `docker-compose.prod.yml up` file
- `ctrl + c`
  - This exits docker
- `docker-compose down`
  - This stops docker and removes the containers

## Start the project

In order for the project to run, you must first run it in production mode to install the node_modules, then you can run it in development

### Starting in development mode

- To run in developemnt mode, make sure that you have docker running
- run `cd FileUploader`
- run `docker-compose up`
  - This will start both the node.js server and the Angular development server. This means that any updates made to the Angular files will be auto-updated
- Naviate to [http://localhost:4200/home](http://localhost:4200/home)

### Starting in production mode

- To run in developemnt mode, make sure that you have docker running
- run `cd FileUploader`
- run `docker-compose -f docker-compose.prod.yml up`
  - This will compile all of the angular code and then serve it out of the server
  - Any changes made to the angular will **not** be updated in real time
- Navigate to [http://localhost:8080/home](http://localhost:8080/home)
