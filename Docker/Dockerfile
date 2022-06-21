FROM python:3.8

ENV PYTHONUNBUFFERED 1

RUN mkdir /web_projects
WORKDIR /web_projects

COPY requirements.txt /web_projects/
RUN pip install --upgrade pip && pip install -r requirements.txt

ADD . /web_projects/
