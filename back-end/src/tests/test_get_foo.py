from app import create_app


def test_get_foo():
    with create_app().test_client() as client:
        res = client.get('/foo')
        assert res.status_code == 200
        assert res.data == b'bar'

