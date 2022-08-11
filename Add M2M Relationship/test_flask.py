from unittest import TestCase

from app import app
from models import db, User

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_test'
app.config['SQLALCHEMY_ECHO'] = False

app.config['TESTING'] = True

app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

db.drop_all()
db.create_all()


class UserViewsTestCase(TestCase):
    def setUp(self):
        User.query.delete()

        user = User(first_name='TestUser', last_name='T', image_url='https://images-na.ssl-images-amazon.com/images/I/61QW1RLSsKL.__AC_SX300_SY300_QL70_FMwebp_.jpg')
        db.session.add(user)
        db.session.commit()

        self.user_id = user.id
        self.user = user
    
    def tearDown(self):
        db.session.rollback()

    def test_list_users(self):
        with app.test_client() as client:
            resp = client.get('/users')
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('TestUser T', html)
        
    def test_show_user(self):
        with app.test_client() as client:
            resp = client.get(f'/users/{self.user_id}')
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('<h1>TestUser T</h1>', html)
            
    
    def test_add_user(self):
        with app.test_client() as client:
            d = {'first_name': 'Boba', 'last_name': 'Mochi', 'image_url': 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'}
            resp = client.post('/users/new', data=d, follow_redirects=True)
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('<a href="/users/2">Boba Mochi</a>', html)