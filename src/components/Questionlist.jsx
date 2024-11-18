import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import QuestionItem from './QuestionItem';

const QuestionList = ({ filter, searchQuery }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const url = searchQuery
        ? `https://api.stackexchange.com/2.3/search?order=desc&sort=${filter}&intitle=${searchQuery}&site=stackoverflow&pagesize=10`
        : `https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow&pagesize=10`;

      const response = await axios.get(url);

      if (response.data && response.data.items) {
        setQuestions(response.data.items);
      } else {
        throw new Error('No questions found');
      }
    } catch (err) {
      console.error("API fetch error:", err);
      setError(`Error fetching questions: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, [filter, searchQuery]); // Add filter and searchQuery as dependencies

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const timeAgo = (creationDate) => {
    const secondsAgo = Math.floor((Date.now() - creationDate * 1000) / 1000);

    if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) return `${minutesAgo} minutes ago`;
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) return `${hoursAgo} hours ago`;
    const daysAgo = Math.floor(hoursAgo / 24);
    return `${daysAgo} days ago`;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {questions.map((question) => (
        <QuestionItem
          key={question.question_id}
          question={{
            question_id: question.question_id,
            title: question.title,
            tags: question.tags,
            votes: question.score,
            answers: question.answer_count,
            views: question.view_count,
            timestamp: timeAgo(question.creation_date),
            user: question.owner.display_name,
            user_id: question.owner.user_id,
          }}
        />
      ))}
    </div>
  );
};

export default QuestionList;
