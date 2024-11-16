import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionItem from './QuestionItem';

const QuestionList = ({ filter }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true); // Set loading to true at the start of the fetch
      setError(null); // Reset error state before fetching

      try {
        const response = await axios.get(
          `https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`
        );
        setQuestions(response.data.items);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setError("Failed to load questions. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    
      

    fetchQuestions();
  }, [filter]);

  if (loading) {
    return <p>Loading questions...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>; // Display error message
  }

  if (questions.length === 0) {
    return <p>No questions found for this filter.</p>; // Empty state message
  }

  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <QuestionItem key={question.question_id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
