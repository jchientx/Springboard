from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

app = Flask(__name__)
app.config['SECRET_KEY'] = "whatever"
debug = DebugToolbarExtension(app)

@app.route("/")
def ask_questions():
    prompts = story.prompts
    return render_template("questions.html", prompts=prompts)

@app.route("/story")
def story_result():
    text = story.generate(request.args) # **why not request.args.get()? What will request.args print? {"verb": "eat", "noun": "mango"}?
    #A MultiDict with the parsed contents of the query string. (The part in the URL after the question mark).
    return render_template("story.html", text=text)