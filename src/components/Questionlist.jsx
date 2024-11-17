// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import QuestionItem from './QuestionItem';

// const QuestionList = ({ filter }) => {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       setLoading(true); // Set loading to true at the start of the fetch
//       setError(null); // Reset error state before fetching

//       try {
//         const response = await axios.get(
//           `https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`
//         );
//         setQuestions(response.data.items);
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//         setError("Failed to load questions. Please try again later.");
//       } finally {
//         setLoading(false); // Set loading to false after fetch
//       }
//     };

    
      

//     fetchQuestions();
//   }, [filter]);

//   if (loading) {
//     return <p>Loading questions...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">{error}</p>; // Display error message
//   }

//   if (questions.length === 0) {
//     return <p>No questions found for this filter.</p>; // Empty state message
//   }

//   return (
//     <div className="space-y-4">
//       {questions.map((question) => (
//         <QuestionItem key={question.question_id} question={question} />
//       ))}
//     </div>
//   );
// };

// export default QuestionList;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import QuestionItem from './QuestionItem'; // Component to display each question item

// const QuestionList = ({ filter, searchQuery }) => {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       setLoading(true);
//       setError(null);
      
//       // Construct the API URL
//       let apiUrl = `https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`;
//       if (searchQuery) {
//         apiUrl += `&intitle=${encodeURIComponent(searchQuery)}`;
//       }

//       try {
//         const response = await axios.get(apiUrl);
//         setQuestions(response.data.items || []);
//       } catch (err) {
//         console.error("Error fetching questions:", err);
//         setError("Failed to load questions. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, [filter, searchQuery]); // Refetch when filter or search query changes

//   if (loading) {
//     return <p>Loading questions...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   if (questions.length === 0) {
//     return <p>No questions found for this filter.</p>;
//   }

//   return (
//     <div className="space-y-4">
//       {questions.map((question) => (
//         <QuestionItem key={question.question_id} question={question} />
//       ))}
//     </div>
//   );
// };

// export default QuestionList;










// import React from 'react';
// import QuestionItem from './QuestionItem';

// const QuestionList = ({ filter }) => {
//   // Sample data to mimic questions; replace with data fetched from API
//   const questions = [
//     {
//       title: 'I am not able to use view binding in activity in Kotlin Android where I have also used companion object',
//       tags: ['Android', 'Kotlin', 'Android-Activity', 'Android-ViewBinding', 'Companion-Object'],
//       votes: 7,
//       answers: 7,
//       views: 15,
//       timestamp: '55 seconds',
//       user: 'vayron',
//     },
//     {
//       title: 'How do I manage state in a React functional component using hooks?',
//       tags: ['React', 'JavaScript', 'State-Management', 'Hooks'],
//       votes: 12,
//       answers: 3,
//       views: 120,
//       timestamp: '5 minutes',
//       user: 'codeMaster',
//     },
//     {
//       title: 'Best practices for handling API calls in Vue.js with Axios',
//       tags: ['Vue.js', 'JavaScript', 'API', 'Axios', 'Best-Practices'],
//       votes: 5,
//       answers: 2,
//       views: 45,
//       timestamp: '10 minutes',
//       user: 'vueDev',
//     },
//     {
//       title: 'Differences between async and defer attributes in script tags',
//       tags: ['HTML', 'JavaScript', 'async', 'defer'],
//       votes: 8,
//       answers: 4,
//       views: 78,
//       timestamp: '20 minutes',
//       user: 'webWizard',
//     },
//     {
//       title: 'Understanding closures in JavaScript and their practical uses',
//       tags: ['JavaScript', 'Closures', 'Programming', 'Scope'],
//       votes: 10,
//       answers: 5,
//       views: 150,
//       timestamp: '30 minutes',
//       user: 'jsGuru',
//     },
//     {
//       title: 'How to optimize SQL queries for better performance?',
//       tags: ['SQL', 'Database', 'Optimization', 'Performance'],
//       votes: 22,
//       answers: 6,
//       views: 200,
//       timestamp: '1 hour',
//       user: 'dbExpert',
//     },
//     {
//       title: 'Difference between let, var, and const in JavaScript?',
//       tags: ['JavaScript', 'let', 'var', 'const', 'Scope'],
//       votes: 30,
//       answers: 15,
//       views: 500,
//       timestamp: '2 hours',
//       user: 'frontEndDev',
//     },
//     {
//       title: 'Why is the margin collapsing in CSS and how to prevent it?',
//       tags: ['CSS', 'Layout', 'Margin', 'Web-Design'],
//       votes: 18,
//       answers: 2,
//       views: 100,
//       timestamp: '3 hours',
//       user: 'cssNinja',
//     },
//     {
//       title: 'How to use Firebase with React for user authentication?',
//       tags: ['Firebase', 'React', 'Authentication', 'JavaScript'],
//       votes: 14,
//       answers: 8,
//       views: 250,
//       timestamp: '5 hours',
//       user: 'firebaseFan',
//     },
//     {
//       title: 'What are promises in JavaScript and how do they work?',
//       tags: ['JavaScript', 'Promises', 'Asynchronous', 'Programming'],
//       votes: 25,
//       answers: 10,
//       views: 300,
//       timestamp: '6 hours',
//       user: 'asyncDev',
//     },
//   ];

//   return (
//     <div>
//       {questions.map((question, index) => (
//         <QuestionItem key={index} question={question} />
//       ))}
//     </div>
//   );
// };

// export default QuestionList;











// import React from 'react';
// import QuestionItem from './QuestionItem';

// const QuestionList = ({ filter }) => {
//   // Sample data to mimic questions; replace with data fetched from API
//   const questions = [
//     {
//       question_id: 123456,
//       title: 'I am not able to use view binding in activity in Kotlin Android where I have also used companion object',
//       tags: ['Android', 'Kotlin', 'Android-Activity', 'Android-ViewBinding', 'Companion-Object'],
//       votes: 7,
//       answers: 7,
//       views: 15,
//       timestamp: '55 seconds',
//       user: 'vayron',
//       user_id: 987654,
//     },
//     {
//       question_id: 234567,
//       title: 'How do I manage state in a React functional component using hooks?',
//       tags: ['React', 'JavaScript', 'State-Management', 'Hooks'],
//       votes: 12,
//       answers: 3,
//       views: 120,
//       timestamp: '5 minutes',
//       user: 'codeMaster',
//       user_id: 876543,
//     },
//     {
//       question_id: 345678,
//       title: 'Best practices for handling API calls in Vue.js with Axios',
//       tags: ['Vue.js', 'JavaScript', 'API', 'Axios', 'Best-Practices'],
//       votes: 5,
//       answers: 2,
//       views: 45,
//       timestamp: '10 minutes',
//       user: 'vueDev',
//       user_id: 765432,
//     },
//     // Add more questions with unique question_id and user_id values here
//   ];

//   return (
//     <div>
//       {questions.map((question, index) => (
//         <QuestionItem key={index} question={question} />
//       ))}
//     </div>
//   );
// };

// export default QuestionList;








import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem';

const QuestionList = ({ filter }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);

      try {
        // Optional: Add your API key here if you have one
        const apiKey = ""; // Replace with your API key or leave empty if not available

        const response = await fetch(
          `https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow&pagesize=10${apiKey ? `&key=${apiKey}` : ""}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Check if items are present in the response
        if (data.items) {
          setQuestions(data.items);
        } else {
          throw new Error('No questions found');
        }
      } catch (err) {
        console.error("API fetch error:", err);
        setError(`Error fetching questions: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [filter]);

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
            timestamp: new Date(question.creation_date * 1000).toLocaleTimeString(),
            user: question.owner.display_name,
            user_id: question.owner.user_id,
          }}
        />
      ))}
    </div>
  );
};

export default QuestionList;
