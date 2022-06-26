from flask import Flask, render_template, request, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "secret-survey"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

#responses = []
session_key = "responses"

@app.route("/")
def start_page():
    return render_template("start_page.html", survey=survey) 

@app.route("/begin", methods=["POST"])
def begin():
    session[session_key] = []
    return redirect("/questions/0")

@app.route("/questions/<int:num>")
def questions(num):
    
    responses = session.get(session_key)
    # Step Six: Protecting Questions
    # if the user is trying to access question page, go to the start page
    if responses is None:
        return redirect("/")
    # if the user already answers all questions, go to the thank you page
    if len(responses) == len(survey.questions):
        return redirect("/thanks")
    # if the user is trying to access the questions out of order, go to 
    # the question# it should be in order
    if len(responses) != num:
        flash(f"You are trying to access an invalid question: Question {num}")
        return redirect(f"/questions/{len(responses)}")
    
    question = survey.questions[num]
    return render_template("questions.html", question=question, num=num)

@app.route("/answer", methods=["POST"])
def handle_answers():
    # get the response choice
    answer = request.form["answer"]
    
    # add this response to the session
    responses = session[session_key]
    responses.append(answer)
    session[session_key] = responses

    if len(responses) == len(survey.questions):
        return redirect("/thanks")
    else:
        return redirect(f"/questions/{len(responses)}")

@app.route("/thanks")
def complete():
    return render_template("thanks.html")
