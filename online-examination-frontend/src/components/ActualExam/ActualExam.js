import React from "react";
import "./ActualExam.css";
import { Form, Row, Button } from "react-bootstrap";
import he from "he";
import { AuthContext } from "../../App";
import { Redirect } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class ActualExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      count: 0,
      currentQuestionCount: 1,
      userAnswers: [],
      finalScore: {
        correctAnswer: 0,
        percentage: 0,
      },
      showScore: false,
    };
  }

  fetchPracticeTestQuestions() {
    fetch("http://localhost:8000/api/exam/listActualTestQuestion")
      .then((response) => response.json())
      .then(
        (result) => {
          let newData = [];
          if (result) {
            if ("results" in result) {
              result.results.forEach((item, index) => {
                let optionsArray = item.incorrect_answers || [];
                optionsArray.push(item.correct_answer);
                optionsArray = optionsArray.sort((a, b) => a.localeCompare(b));
                let obj = {
                  id: index + 1,
                  question: item.question,
                  correct_answer: item.correct_answer,
                  allOptions: optionsArray,
                };
                newData.push({ ...obj });
              });
            }
          }
          this.setState({
            isLoaded: true,
            data: newData,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  componentDidMount() {
    this.fetchPracticeTestQuestions();
  }

  incrementQuestion() {
    this.state((prevState) => ({
      ...prevState,
      count: this.count + 1,
    }));
  }

  getCurrentQuestion(questionNumber) {
    const { data } = this.state;
    return data[questionNumber];
  }
  generateOptions(questionId, currentQuestionsOptions) {
    let { userAnswers } = this.state;
    return currentQuestionsOptions.map((item, index) => {
      let isChecked = false;
      const answerIndex = userAnswers.findIndex(
        (x) => x.questionId === questionId
      );
      if (
        userAnswers &&
        answerIndex !== -1 &&
        userAnswers[answerIndex].selectedAnswer ===
        this.showHTMLSafeString(item)
      ) {
        isChecked = true;
      }
      return (
        <Row key={index} class="form-check">
          <Form.Check
            type="radio"
            name={`radio-${index + 1}`}
            id={index + 1}
            label={this.showHTMLSafeString(item)}
            checked={isChecked}
            value={this.showHTMLSafeString(item)}
            onChange={(e) => {
              this.optionSelected(questionId, e.target.value);
            }}
          />
        </Row>
      );
    });
  }
  optionSelected(questionId, selectedAnswer) {
    let { userAnswers } = this.state;
    if (userAnswers && userAnswers.length > 0) {
      const answerIndex = userAnswers.findIndex(
        (x) => x.questionId === questionId
      );
      if (answerIndex !== -1) {
        userAnswers[answerIndex].selectedAnswer = selectedAnswer;
      } else {
        userAnswers.push({
          questionId: questionId,
          selectedAnswer: selectedAnswer,
        });
      }
    } else {
      userAnswers.push({
        questionId: questionId,
        selectedAnswer: selectedAnswer,
      });
    }
    this.setState((prevState) => ({
      ...prevState,
      userAnswers,
    }));
  }

  showHTMLSafeString(text) {
    return he.decode(text);
  }

  submitTest(context, userId) {
    let { userAnswers, data } = this.state;
    let result = 0;
    userAnswers.forEach((userAnswer) => {
      const answerIndex = data.findIndex((x) => x.id === userAnswer.questionId);
      if (
        answerIndex !== -1 &&
        userAnswer.selectedAnswer ===
        this.showHTMLSafeString(data[answerIndex].correct_answer)
      ) {
        result++;
      }
    });
    this.setState(
      (prevState) => ({
        ...prevState,
        finalScore: {
          correctAnswer: result,
          percentage: (result * 100) / data.length,
        },
        showScore: true,
      }),
      () => {
        this.saveScore(context, userId);
      }
    );
  }

  saveScore(context, userId) {
    const { finalScore } = this.state;
    fetch("http://localhost:8000/api/exam/submitTest", {
      method: "post",
      body: JSON.stringify({
        grade: finalScore.percentage,
        userId: userId,
        isPractice: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(
        (result) => {
          let user = { ...context.user };
          user.isActualTestGiven = true;
          context.setAuth({ isLoggedIn: true, user: user });
        },
        (error) => {
          console.error(error);
        }
      );
  }

  showResult() {
    const { finalScore, data } = this.state;

    return (
      <div className="question-section">
        <h4>Your final score</h4>
        <p className="question-text">Total Questions: {data.length}</p>
        <p className="question-text">
          Your correct Answers: {finalScore.correctAnswer}
        </p>
        <p className="question-text">Percentage: {finalScore.percentage}%</p>
        <LinkContainer to="/taketest">
          <Button id="btnBack">Go Back</Button>
        </LinkContainer>
      </div>
    );
  }

  render() {
    const { data, currentQuestionCount, userAnswers, showScore } = this.state;
    const currentQuestion = this.getCurrentQuestion(currentQuestionCount - 1);
    if (data.length <= 0) {
      return (
        <div className="app">
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <AuthContext.Consumer>
        {(context) => {
          if (!context.isLoggedIn) {
            return <Redirect to="/login" />;
          }
          if (!context.isPurchased && context.isActualTestGiven) {
            return <Redirect to="/taketest" />;
          }
          return (
            <div className="app">
              {showScore && this.showResult()}
              {data.length > 0 && !showScore && (
                <>
                  <div className="question-section">
                    <div className="question-count">
                      <Row>
                        <span>
                          Question {currentQuestion.id || currentQuestionCount}/
                          {data.length}
                        </span>
                      </Row>
                      <p className="question-text">
                        {this.showHTMLSafeString(currentQuestion.question)}
                      </p>
                    </div>
                  </div>
                  <div className="answer-section">
                    <div className="radioBtn">
                      {this.generateOptions(
                        currentQuestion.id,
                        currentQuestion.allOptions
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div id="prev" className="col-md-6 col-lg-4">
                      <button
                        className="btn btn-primary"
                        disabled={currentQuestionCount === 1}
                        onClick={() => {
                          this.setState((prevState) => ({
                            ...prevState,
                            currentQuestionCount:
                              currentQuestionCount > 1
                                ? currentQuestionCount - 1
                                : data.length,
                          }));
                        }}
                      >
                        Previous
                      </button>
                    </div>
                    {!(currentQuestionCount === data.length) ? (
                      <div className="ml-auto mr-sm-5">
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            this.setState((prevState) => ({
                              ...prevState,
                              currentQuestionCount:
                                currentQuestionCount < data.length
                                  ? currentQuestionCount + 1
                                  : 1,
                            }));
                          }}
                        >
                          Next
                        </button>
                      </div>
                    ) : (
                      <div className="ml-auto mr-sm-5">
                        <button
                          className="btn btn-success"
                          disabled={data.length !== userAnswers.length}
                          onClick={() =>
                            this.submitTest(context, context.user.userId)
                          }
                        >
                          Submit
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default ActualExam;
