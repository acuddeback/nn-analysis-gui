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
- `docker-compose up`

## Run the project 
When you run the project any following time, it will work if you run
- `docker-compose up`
However, if you make any changes to the Dockerfile or requirements.txt, run 
- `docker-compose up --build`
to update the Docker image. 

# File Compatibility
Example network structure .txt files can be found in [nn-analysis-gui/testfiles](https://github.com/acuddeback/nn-analysis-gui/tree/master/testfiles). 

## File Structure
Consider a network with structure input &rarr; h<sub>0</sub> &rarr; ... &rarr; h<sub>n</sub> &rarr; output. 

![Graph of a genearl neural ntwork of the descibed structure](./static/general_net.png)

The file structure is: \
b<sub>0</sub>, W<sub>00</sub>, ..., W<sub>0m</sub>, ... b<sub>n</sub>, W<sub>n0</sub>, ..., W<sub>nm</sub> \
dim(input), dim(h<sub>0</sub>), ..., dim(h<sub>n</sub>), dim(output)
in_labelh<sub>0</sub>, ..., in_labelh<sub>n</sub> \
out_labelh<sub>0</sub>, ..., out_labelh<sub>n</sub>

### Example
For a 2 &rarr; 5 &rarr; 5 &rarr; 2 [network](https://github.com/neu-physics/leptonIdentificationNN/blob/master/network_files/leptonIdNN_E2P2Dec.ipynb) structure with the following attributes,
```
Weight 1: 
 [[ 2.71078656 -0.54482255  1.49119083  3.40287371  2.72451196]
 [-2.82694977  0.89892445 -1.34958522 -1.37313475 -0.08053674]]
Weight 2: 
 [[-0.71557014  1.93788306  0.53519384 -0.75823443  0.25123773]
 [-0.33080407  2.01800074 -1.42523548 -0.3711385  -2.73905808]
 [-6.10737842  0.32545863  0.74408332 -2.48650943  3.74387307]
 [-3.90689368 -0.86895665 -1.35969632  2.06487152  2.0416786 ]
 [-0.68386149 -0.19280488 -2.77274485 -4.96151007 -1.63668046]]
Weight 3: 
 [[ 0.28411543  0.39069374]
 [-0.29518525 -1.02619704]
 [-0.46183389 -0.17988786]
 [ 0.17719155 -0.15959498]
 [ 1.29132985 -1.11049255]]
Bias 1: 
 [[ 0.11876654 -0.0700461  -0.0576522  -0.13987502 -0.01901942]]
Bias 2: 
 [[ 0.01776611  0.07615346 -0.01073479 -0.00166744  0.06711185]]
Bias 3: 
 [[ 0.10387698 -0.10387698]]
```
the corresponding text file would be
``` 
0.11876654,2.71078656,-2.82694977,-0.0700461,-0.54482255,0.89892445,-0.0576522,1.49119083,-1.34958522,-0.13987502,3.40287371,-1.37313475,-0.01901942,2.72451196,-0.08053674,0.01776611,-0.71557014,-0.33080407,-6.10737842,-3.90689368,-0.68386149,0.07615346,1.93788306,2.01800074,0.32545863,-0.86895665,-0.19280488,-0.01073479,0.53519384,-1.42523548,0.74408332,-1.35969632,-2.77274485,-0.00166744,-0.75823443,-0.3711385,-2.48650943,2.06487152,-4.96151007,0.06711185,0.25123773,-2.73905808,3.74387307,2.0416786,-1.63668046,0.10387698,0.28411543,-0.29518525,-0.46183389,0.17719155,1.29132985,-0.10387698,0.39069374,-1.02619704,-0.17988786,-0.15959498,-1.11049255
2,5,5,2
Mass,Momentum
Electron,Muon
```

The weights and biases in this file were printed from the weights and biases shown using the following code:
``` python
W1, b1, W2, b2,b3,W3 = model['W1'], model['b1'], model['W2'], model['b2'],model['b3'],model["W3"]

for i in range(len(b1[0])):
    print(b1[0][i], end=",")
    for j in range(len(W1)):
        print(W1[j][i], end=",")

for i in range(len(b2[0])):
    print(b2[0][i], end=",")
    for j in range(len(W2)):
        print(W2[j][i], end=",")
        
for i in range(len(b3[0])):
    print(b3[0][i], end=",")
    for j in range(len(W3)):
        print(W3[j][i], end=",")

```


## Interpreting the Results

# Acknowledgements
- This repository was built with subtantial help and guidance from [Chad Baily](https://github.com/chadbaily)
- The analysis package used in this gui is from [Marcus W. Beck](https://github.com/fawda123) and can be found [here](https://github.com/fawda123/NeuralNetTools).