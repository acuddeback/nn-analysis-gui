From r-base:3.4.1
RUN apt-get update && apt-get install -y python3 nodejs python3-pip
RUN cp /usr/bin/python3 /usr/bin/python
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN python3 -m pip install --upgrade setuptools
RUN python3 -m pip install -r requirements.txt
RUN Rscript -e "install.packages('NeuralNetTools')"
COPY . /code/

