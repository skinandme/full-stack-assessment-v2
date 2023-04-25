from flask import Blueprint, request

#from app.api.handlers.shipping import handle


def create_blueprint() -> Blueprint:
    bp = Blueprint("api", __name__)

    @bp.route("/foo")
    def test_route():
        return "bar"

    return bp


blueprint = create_blueprint()
