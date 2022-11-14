"""Flask app for Cupcakes"""
from flask import Flask, jsonify, request, render_template

from models import db, connect_db, Cupcake

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "cupcakeisthebest"

connect_db(app)

@app.route("/")
def root():
    """Homepage"""
    return render_template("index.html")

@app.route("/api/cupcakes")
def all_cupcakes():
    """Return all cupcakes in JSON format
    {cupcakes: [{id, flavor, size, rating, image}, ...]}
    """
    cupcakes = Cupcake.query.all()
    serialized = [cupcake.to_dict() for cupcake in cupcakes]
    return jsonify(cupcakes=serialized)

@app.route("/api/cupcakes/<int:cupcake_id>")
def get_single_cupcake(cupcake_id):
    """Return data about a single cupcake in JSON format
    {cupcake: {id, flavor, size, rating, image}}
    """
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    return jsonify(cupcake=cupcake.to_dict())

@app.route("/api/cupcakes", methods=["POST"])
def create_cupcake():
    """Add a new cupcake. Return data about the new cupcake in JSON format
    {cupcake: {id, flavor, size, rating, image}}
    """
    cupcake = Cupcake(
        flavor=request.json['flavor'],
        size=request.json['size'],
        rating=request.json['rating'],
        image=request.json['image'] or None
    )

    db.session.add(cupcake)
    db.session.commit()

    return (jsonify(cupcake=cupcake.to_dict()), 201)

@app.route("/api/cupcakes/<int:cupcake_id>", methods=["PATCH"])
def update_cupcake(cupcake_id):
    """Update a cupcake with the id passed in the URL. Return data about the updated cupcake in JSON format
    {cupcake: {id, flavor, size, rating, image}}
    """
    cupcake = Cupcake.query.get_or_404(cupcake_id)

    cupcake.flavor = request.json['flavor']
    cupcake.size = request.json['size']
    cupcake.rating = request.json['rating']
    cupcake.image = request.json['image']

    db.session.add(cupcake)
    db.session.commit()

    return jsonify(cupcake=cupcake.to_dict())

@app.route("/api/cupcakes/<int:cupcake_id>", methods=["DELETE"])
def delete_cupcake(cupcake_id):
    """Delete cupcake data. Return JSON format
    {message: "Deleted"}
    """
    cupcake = Cupcake.query.get_or_404(cupcake_id)

    db.session.delete(cupcake)
    db.session.commit()

    return jsonify(message="Deleted")