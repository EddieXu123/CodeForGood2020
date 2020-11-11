from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from dateutil.tz import tzlocal

Base = declarative_base()

'''
Defining the tables for the database
'''
class TourMessage(Base):
	__tablename__ = 'tourmessage'
	id = Column(Integer, primary_key=True)
	parent_id = Column(Integer)
	body = Column(String(120))
	created_at = Column(DateTime(tzlocal()))

	def __init__(self, parent_id=-1, body=None, created_at=None):
		self.parent_id = parent_id
		self.body = body
		self.created_at = datetime.now(tzlocal())

	def __repr__(self):
		return '<TourMessage id: %d  parent_id: %d  body: %r>' % (self.id, self.parent_id, self.body)

class TourSection(Base):
    __tablename__ = 'toursection'
    id = Column(Integer, primary_key=True)
    audio_name = Column(String(120), unique=True)
    audio_path = Column(String(120), unique=True)   
    photo_name = Column(String(120), unique=True)
    photo_path = Column(String(120), unique=True)

    def __init__(self, audio_name=None, audio_path=None, photo_name=None, photo_path=None):
        self.audio_name = audio_name
        self.audio_path = audio_path
        self.photo_name = photo_name
        self.photo_path = photo_path

    def __repr__(self):
        return '<TourSection id: %d  audio_name: %r  audio_path: %r  photo_name: %r  photo_path: %r>' % (self.id, self.audio_name, self.audio_path, self.photo_name, self.photo_path)

class Podcast(Base):
    __tablename__ = 'podcasts'
    id = Column(Integer, primary_key=True)
    title = Column(String(60), unique=True)
    desc = Column(String(256))
    image_url = Column(String(120), unique=True)
    download_url = Column(String(120), unique=True)

    def __init__(self, title=None, desc=None, image_url=None, download_url=None):
        self.title = title
        self.desc = desc
        self.image_url = image_url
        self.download_url = download_url
    
    def __repr__(self):
        return '<Podcast id: %d  title: %r  desc: %r  image_url: %r  download_url: %r>' % (self.id, self.title, self.desc, self.image_url, self.download_url)


engine = create_engine('sqlite:///test.db', convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))
Base.query = db_session.query_property()
def init_db():
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()
    #import models 
    Base.metadata.create_all(bind=engine)