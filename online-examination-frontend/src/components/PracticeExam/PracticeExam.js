import React from "react";
import "./PracticeExam.css";
import { Form, Row } from "react-bootstrap";

class PracticeExam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null,
      count: 0,
      currentQuestionCount: 1,
      userAnswers: [],
    };
  }

  fetchPracticeTestQuestions() {
    fetch("http://localhost:8000/api/exam/listPracticeTestQuestion")
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
        userAnswers[answerIndex].selectedAnswer === item
      ) {
        isChecked = true;
      }
      return (
        <Row key={index}>
          <Form.Check
            type="radio"
            name="radio"
            checked={isChecked}
            value={item}
            onChange={(e) => {
              this.optionSelected(questionId, e.target.value);
            }}
          />
          {item}
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
  render() {
    const { data, currentQuestionCount } = this.state;
    const currentQuestion = this.getCurrentQuestion(currentQuestionCount - 1);
    if (data.length <= 0) {
      return (
        <div className="app">
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div className="app">
        {data.length > 0 && (
          <>
            <div className="question-section">
              <div className="question-count">
                <Row>
                  <span>
                    Question {currentQuestion.id || currentQuestionCount}/
                    {data.length}
                  </span>
                </Row>
                <p className="question-text">{currentQuestion.question}</p>
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
            <div className="d-flex justify-content-between">
              <div id="prev">
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
                  <button className="btn btn-success" onClick={() => {}}>
                    Submit
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default PracticeExam;
