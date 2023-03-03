import click
from flask import Blueprint

from ..db import db


def create_blueprint() -> Blueprint:
    bp = Blueprint('dev', __name__)

    @bp.cli.command('create-db')
    @click.option('--drop-existing', is_flag=True)
    def create_db_command(drop_existing: bool):
        if drop_existing:
            db.drop_all()

        db.create_all()

    return bp

blueprint = create_blueprint()
