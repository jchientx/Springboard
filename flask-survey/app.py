from flask import Flask, render_template, request, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "secret-survey"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

responses = []

@app.route("/")
def start_page():
    #title = survey.title
    #instructions = survey.instructions
    return render_template("start_page.html", survey=survey) #title=title, instructions=instructions

@app.route("/questions/<int:num>")
def questions(num):
    
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
    answer = request.form["answer"]

    responses.append(answer)

    if len(responses) == len(survey.questions):
        return redirect("/thanks")
    else:
        return redirect(f"/questions/{len(responses)}")

@app.route("/thanks")
def complete():
    return render_template("thanks.html")
