import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionItem from './QuestionItem';

const QuestionList = ({ filter }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`);
        setQuestions(response.data.items);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, [filter]);

  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <QuestionItem key={question.question_id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
