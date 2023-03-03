FROM python:3.9.7-slim

WORKDIR /app

COPY src src
COPY Makefile Makefile
COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

ENV PYTHONPATH=src
ENV FLASK_APP=app:app
ENV FLASK_ENV=development

EXPOSE 9000

CMD flask run --host 0.0.0.0 --port 9000
