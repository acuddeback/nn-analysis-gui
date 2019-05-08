#install.packages('NeuralNetTools',repos = "http://cran.us.r-project.org")
#Add this if you need to install the neural network tools library ^
library(NeuralNetTools)

args <- commandArgs(TRUE)

file <- args[1]

fileRaw <- readLines(file)

my_weights <- as.double(unlist(strsplit(fileRaw[1],split=",")))

#print(length(my_weights))

my_struct <- as.integer(unlist(strsplit(fileRaw[2],split=",")))
my_inputs <- unlist(strsplit(fileRaw[3],split=","))
my_outputs <- unlist(strsplit(fileRaw[4],split=","))

tryCatch({
  plotnet(my_weights,my_struct,x_names=my_inputs,y_names=my_outputs)
},error=function(cond){
	message("Incorrect number of weights and biases in input")
})

wts_in <- neuralweights(my_weights, struct = my_struct)
wts_struct <- wts_in$struct
wts_in <- wts_in$wts


try(olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[1],y_lab=my_outputs[1]),silent=TRUE)
try(olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[2],y_lab=my_outputs[2]),silent=TRUE)
try(olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[3],y_lab=my_outputs[3]),silent=TRUE)
try(olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[4],y_lab=my_outputs[4]),silent=TRUE)
try(olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[5],y_lab=my_outputs[5]),silent=TRUE)
try(olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[6],y_lab=my_outputs[6]),silent=TRUE)
try(olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[7],y_lab=my_outputs[7]),silent=TRUE)
try(olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[8],y_lab=my_outputs[8]),silent=TRUE)
try(olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[9],y_lab=my_outputs[9]),silent=TRUE)
try(olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[10],y_lab=my_outputs[10]),silent=TRUE)
try(olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[11],y_lab=my_outputs[11]),silent=TRUE)
