# nn-analysis-gui

Network Analysis GUI using the R network analysis tool from

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
When you run the project for the first time, run 
- `docker-compuse up`

## Run the project 
When you run the project any following time, it will work if you run
- `docker-compuse up`
However, if you make any changes to the Dockerfile or requirements.txt, run 
- `docker-compuse up --build`
to update the Docker image. 

# File Compatibility


# Acknowledgements
- This repository was built with subtantial help and guidance from [Chad Baily](https://github.com/chadbaily)
- The analysis package used in this gui is from [Marcus W. Beck](https://github.com/fawda123) and can be found [here](https://github.com/fawda123/NeuralNetTools).