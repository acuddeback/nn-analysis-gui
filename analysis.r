#install.packages('NeuralNetTools',repos = "http://cran.us.r-project.org")
#Add this if you need to install neural network tools ^

library(NeuralNetTools)

args <- commandArgs(TRUE)

file <- args[1]

fileRaw <- readLines(file)

my_weights <- as.double(unlist(strsplit(fileRaw[1],split=",")))
my_struct <- as.integer(unlist(strsplit(fileRaw[2],split=",")))
my_inputs <- unlist(strsplit(fileRaw[3],split=","))
my_outputs <- unlist(strsplit(fileRaw[4],split=","))

plotnet(my_weights,my_struct,x_names=my_inputs,y_names=my_outputs)

wts_in <- neuralweights(my_weights, struct = my_struct)
wts_struct <- wts_in$struct
wts_in <- wts_in$wts

olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[1],y_lab=my_outputs[1])
olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[2],y_lab=my_outputs[2])
olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[3],y_lab=my_outputs[3])
olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[4],y_lab=my_outputs[4])
olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[5],y_lab=my_outputs[5])
olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[6],y_lab=my_outputs[6])
olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[7],y_lab=my_outputs[7])
olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[8],y_lab=my_outputs[8])
olden(wts_in,my_inputs,my_outputs,out_var=my_outputs[9],y_lab=my_outputs[9])


