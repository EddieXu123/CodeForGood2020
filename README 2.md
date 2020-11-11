# Ohio Humanities (Team 6)

MAIN: This page hosts the three most recent podcasts, news articles, and a discussion board for current events.
PODCAST: This page hosts the podcast archive, and a podcast discussion board.
SELF-DIRECTED TOUR: This page hosts the tours designed by the Ohio Humanities Society, and has the option for users to piece together their own tours from various audio clips. This page also hosts a discussion board for the tours where users can also post pictures.

## Get Started

### Content Server

##### Setup

```
$ cd server
$ python3 -m venv venv
$ source venv/bin/activate
$ python3 -r requirements.txt
```

##### To run

```
$ export FLASK_APP=server/server.py
$ python3 -m flask run
```

### App Server

##### Setup

```
$ cd app-server
$ yarn install
```

##### To run

```
$ yarn dev
```
