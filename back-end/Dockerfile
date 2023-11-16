FROM python:3.10.4-slim

WORKDIR /app

RUN apt-get update && apt-get -y install gcc libmariadb-dev 

COPY src src
COPY Makefile Makefile
COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

ENV PYTHONPATH=src
ENV FLASK_APP=app:app
ENV FLASK_ENV=development

EXPOSE 9000

CMD flask run --host 0.0.0.0 --port 9000
