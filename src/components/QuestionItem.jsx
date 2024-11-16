import React from 'react';

const QuestionItem = ({ question }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-blue-600">{question.title}</h3>
    <div className="flex items-center space-x-2 mt-2 text-gray-500">
      {question.tags.map((tag, index) => (
        <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-xs">{tag}</span>
      ))}
    </div>
    <div className="flex justify-between items-center mt-4 text-gray-600">
      <div>Score: {question.score}</div>
      <div>Answers: {question.answer_count}</div>
      <div>Views: {question.view_count}</div>
    </div>
  </div>
);

export default QuestionItem;
