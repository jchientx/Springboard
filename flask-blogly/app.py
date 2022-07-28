"""Blogly application."""

from flask import Flask, request, redirect, render_template, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'bloglysecret'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()

@app.route('/')
def home_page():
    """Redirect to list of users"""

    return redirect('/users')

@app.route('/users')
def list_users():
    """Shows list of all users in db"""

    users = User.query.all()
    return render_template('users/index.html', users=users)

@app.route('/users/new', methods=["GET"])
def create_user_form():
    """Show a form to create a new user"""

    return render_template('users/create.html')

@app.route('/users/new', methods=["POST"])
def create_user():
    """Add a new user via form submission"""

    first_name = request.form['first_name']
    last_name = request.form['last_name']
    image_url = request.form['image_url'] or None

    new_user = User(first_name=first_name, last_name=last_name, image_url=image_url)
    db.session.add(new_user)
    db.session.commit()

    return redirect('/users')

@app.route('/users/<int:user_id>')
def show_user(user_id):
    """Show details about the given user"""

    user = User.query.get_or_404(user_id)
    print(user.image_url)
    return render_template('users/details.html', user=user)
    
@app.route('/users/<int:user_id>/edit')
def show_edits(user_id):
    """Show the edit page for a user"""

    user = User.query.get_or_404(user_id)
    return render_template('users/edit.html', user=user)

@app.route('/users/<int:user_id>/edit', methods=["POST"])
def edit_user(user_id):
    """Edit the user details via form submission"""

    user = User.query.get_or_404(user_id)
    user.first_name = request.form['first_name']
    user.last_name = request.form['last_name']
    user.image_url = request.form['image_url']

    db.session.add(user)
    db.session.commit()

    return redirect('/users')

@app.route('/users/<int:user_id>/delete', methods=["POST"])
def delete_user(user_id):
    """Delete the user via form submission"""

    user = User.query.get_or_404(user_id)

    db.session.delete(user)
    db.session.commit()

    return redirect('/users')