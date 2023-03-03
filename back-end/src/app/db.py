from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship


db = SQLAlchemy()


class Address(db.Model):
    id = Column(Integer, primary_key=True)
    line_1 = Column(String, nullable=False)
    line_2 = Column(String, nullable=True)
    city = Column(String, nullable=True)
    country = Column(String, nullable=False)
    postcode = Column(String, nullable=False)


class Customer(db.Model):
    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    address_id = Column(ForeignKey("address.id"))

    # Relationship
    address = relationship("Address")


class Product(db.Model):
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
