from flask import Flask, request, make_response
from flask_sqlalchemy import SQLAlchemy
import json
from flask_cors import CORS, cross_origin

import string
import random

from database import init_db, db_session, Podcast, TourMessage, TourSection
from app import app

'''
To run this, first set the environment variable FLASK_APP to server/server.py
	Do this using export FLASK_APP=server/server.py
Then, run "flask run" in the terminals
	You may have to run 'py -m flask run' on windows or 'python3 -m flask run' on MacOS
'''

init_db()


@app.route('/')
def index():
    return 'index'


'''
adding some dummy data to the Podcast, TourMessage, and TourSection tables
'''
db_session.query(Podcast).delete()
db_session.query(TourMessage).delete()
db_session.query(TourSection).delete()


def get_random_string(length):
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str


p = Podcast("E15: Marck Curnutte, Reporting, and Race", "Mark Curnutte has been on the faculty of Miami University in Oxford Ohio for the past several years where he teaches courses on journalism and social justice. He is also a multi-award-winning career newspaper journalist who has reported extensively on social issues of race, class, poverty, homelessness, and immigration, including for the Cincinnati Enquirer where he worked 25 years. Over 80 of the articles he wrote for the Enquirer are reproduced in his most recent book: Across the Color Line: Reporting 25 Years in Black Cincinnati. ",
                "https://www.google.com/search?q=Across+the+Color+Line:+Reporting+25+Years+in+Black+Cincinnati&rlz=1C5CHFA_enUS868US868&sxsrf=ALeKk01vOyxe7S98qvTCZx42IM4TtEbP2w:1602940767833&tbm=isch&source=iu&ictx=1&fir=rs9Oyluzr20V2M%252CSyRGe6K1i74lVM%252C%252Fg%252F11g23f8fjh&vet=1&usg=AI4_-kQPCMOlqNeyRqO9UiPL0Zj3zn7cwg&sa=X&ved=2ahUKEwiy07_Y27vsAhXMUs0KHYbbCgsQ_B16BAgXEAI&biw=1272&bih=733#imgrc=oOVIbW3nLG2oAM", "https://media.transistor.fm/21528961.mp3?download=true")
db_session.add(p)
tm = TourMessage(0, get_random_string(20))
db_session.add(tm)
ts = TourSection(get_random_string(20), get_random_string(
        20), get_random_string(20), get_random_string(20))
db_session.add(ts)
db_session.commit()

tm = TourMessage(0, get_random_string(20))
db_session.add(tm)
tm = TourMessage(1, get_random_string(20))
db_session.add(tm)
tm = TourMessage(3, get_random_string(20))
db_session.add(tm)
db_session.commit()

'''
This will return a list of JSON's containing the info about the podcasts
'''

@app.route('/api/podcast/<int:podcast_id>')
@cross_origin()
def podcast_data(podcast_id):
	podcast = db_session.query(Podcast).filter(Podcast.id == podcast_id).all()[0]
	print(podcast)
	data = {}
	data['id'] = podcast.id
	data['title'] = podcast.title
	data['desc'] = podcast.desc
	data['image_url'] = podcast.image_url
	data['download_url'] = podcast.download_url
	data_json = json.dumps(data)
	return make_response(data_json)


@app.route('/api/podcast', methods=['GET'])
@cross_origin()
def podcast():
    print('getting podcast list')
    podcast_list = db_session.query(Podcast).all()
    data_list = []
    for pods in podcast_list:
        data = {}
        data['id'] = pods.id
        data['title'] = pods.title
        data['desc'] = pods.desc
        data['image_url'] = pods.image_url
        data['download_url'] = pods.download_url
        data_list.append(data)
    data_json = json.dumps(data_list)
    return make_response(data_json)
'''
retrieves the list of message board messages sorted in parent-children order
'''


@app.route('/api/tour/get', methods=['GET'])
@cross_origin()
def tour_get_messages():
    tour_list = db_session.query(TourMessage).all()
    data_list = [None] * len(tour_list)
    pos_list = []
    pos_index_list = []
    index_list = [x.id for x in tour_list]
    tour_list_copy = [x for x in tour_list]
    for i in range(len(tour_list_copy)):
        if i >= len(tour_list_copy):
            break
        if tour_list_copy[i].parent_id == 0:
            pos_list.append(tour_list_copy[i].id)
            pos_index_list.append(index_list.index(tour_list_copy[i].id) + 1)
            tour_list_copy.pop(i)
            i -= 1

    while len(tour_list_copy) > 0:
        for i in range(len(tour_list_copy)):
            if (i >= len(tour_list_copy)):
                break
            if tour_list_copy[i].parent_id in pos_list:
                pos_list.insert(pos_list.index(
                    tour_list_copy[i].parent_id) + 1, tour_list_copy[i].id)
                pos_index_list.insert(pos_list.index(
                    tour_list_copy[i].parent_id) + 1, tour_list_copy[i].id)
                tour_list_copy.pop(i)
                i -= 1

    for i in range(len(tour_list)):
        tours = tour_list[i]
        data = {}
        data['id'] = tours.id
        data['parent_id'] = tours.parent_id
        data['body'] = tours.body
        data['created_at'] = str(tours.created_at.year) + '-' + str(tours.created_at.month) + '-' + str(tours.created_at.day) + \
            '-' + str(tours.created_at.hour) + '-' + \
            str(tours.created_at.minute) + '-' + str(tours.created_at.second)
        data_list[pos_index_list.index(tours.id)] = data
    data_json = json.dumps(data_list)
    return make_response(data_json)


'''
adding a comment to the message board
TODO: maybe add username feature?
'''


@app.route('/api/tour/comment', methods=['POST'])
@cross_origin()
def tour_add_message():
    parent_id = request.form['parent_id']
    body = request.form['body']
    tm = TourMessage(parent_id, body)
    db_session.add(tm)
    db_session.commit()
    return make_response()


'''
maybe /tour/download and /tour/stream can be the same?
'''


@app.route('/api/tour/download', methods=['GET'])
@cross_origin()
def tour_download():
    tour = db_session.query(TourSection).filter(
        TourSection.id == request.args['id']).all()[0]
    tour_info = {}
    tour_info['audio_name'] = tour.audio_name
    tour_info['audio_path'] = tour.audio_path
    tour_info['photo_name'] = tour.photo_name
    tour_info['photo_path'] = tour.photo_path
    tour_json = json.dumps(tour_info)
    return make_response(tour_json)


@app.route('/api/tour/stream')
@cross_origin()
def tour_stream():
    tour = db_session.query(TourSection).filter(
        TourSection.id == request.args['id']).all()[0]
    tour_info = {}
    tour_info['audio_name'] = tour.audio_name
    tour_info['audio_path'] = tour.audio_path
    tour_info['photo_name'] = tour.photo_name
    tour_info['photo_path'] = tour.photo_path
    tour_json = json.dumps(tour_info)
    return make_response(tour_json)


@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()
