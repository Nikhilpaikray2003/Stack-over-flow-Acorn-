// import React from 'react';
// import { ChatBubbleBottomCenterIcon, EyeIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

// const QuestionItem = ({ question }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200">
//       {/* Question Title */}
//       <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-500 cursor-pointer mb-2">
//         {question.title}
//       </h3>

//       {/* Tags */}
//       <div className="flex space-x-2 mb-4">
//         {question.tags.map((tag, index) => (
//           <span
//             key={index}
//             className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* Bottom Row: Metadata (votes, answers, views) and Timestamp/User Info */}
//       <div className="flex items-center justify-between text-gray-600">
//         {/* Metadata (votes, answers, views) */}
//         <div className="flex items-center space-x-6">
//           <div className="flex items-center space-x-1">
//             <ArrowTrendingUpIcon className="h-5 w-5 text-orange-500" />
//             <span>{question.votes}</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <ChatBubbleBottomCenterIcon className="h-5 w-5 text-green-500" />
//             <span>{question.answers}</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <EyeIcon className="h-5 w-5 text-blue-500" />
//             <span>{question.views}</span>
//           </div>
//         </div>

//         {/* Timestamp and User Information */}
//         <div className="text-sm text-gray-500 whitespace-nowrap">
//           <span>asked {question.timestamp} ago by </span>
//           <span className="font-medium text-gray-700">{question.user}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionItem;

















// import React from 'react';
// import { ChatBubbleBottomCenterIcon, EyeIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

// const QuestionItem = ({ question }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200">
//       {/* Question Title */}
//       <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-500 cursor-pointer">
//         <a
//           href={`https://stackoverflow.com/questions/${question.question_id}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:underline"
//         >
//           {question.title}
//         </a>
//       </h3>

//       {/* Tags */}
//       <div className="flex space-x-2 mb-4">
//         {question.tags.map((tag, index) => (
//           <span
//             key={index}
//             className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* Bottom Row: Metadata (votes, answers, views) and Timestamp/User Info */}
//       <div className="flex items-center justify-between text-gray-600">
//         {/* Metadata (votes, answers, views) */}
//         <div className="flex items-center space-x-6">
//           <div className="flex items-center space-x-1">
//             <ArrowTrendingUpIcon className="h-5 w-5 text-orange-500" />
//             <span>{question.votes}</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <ChatBubbleBottomCenterIcon className="h-5 w-5 text-green-500" />
//             <span>{question.answers}</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <EyeIcon className="h-5 w-5 text-blue-500" />
//             <span>{question.views}</span>
//           </div>
//         </div>

//         {/* Timestamp and User Information */}
//         <div className="text-sm text-gray-500 whitespace-nowrap">
//           <span>asked {question.timestamp} ago by </span>
//           <a
//             href={`https://stackoverflow.com/users/${question.user_id}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="font-medium text-gray-700 hover:underline"
//           >
//             {question.user}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionItem;
























import React from 'react';
import { ChatBubbleBottomCenterIcon, EyeIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const QuestionItem = ({ question }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200">
      {/* Question Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-500 cursor-pointer">
        <a
          href={`https://stackoverflow.com/questions/${question.question_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {question.title}
        </a>
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap space-x-2 mb-4">
        {question.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Row: Metadata (votes, answers, views) and Timestamp/User Info */}
      <div className="flex items-center justify-between text-gray-600">
        {/* Metadata (votes, answers, views) */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <ArrowTrendingUpIcon className="h-5 w-5 text-orange-500" />
            <span>{question.votes} votes</span>
          </div>
          <div className="flex items-center space-x-1">
            <ChatBubbleBottomCenterIcon className="h-5 w-5 text-green-500" />
            <span>{question.answers} answers</span>
          </div>
          <div className="flex items-center space-x-1">
            <EyeIcon className="h-5 w-5 text-blue-500" />
            <span>{question.views} views</span>
          </div>
        </div>

        {/* Timestamp and User Information */}
        <div className="text-sm text-gray-500 whitespace-nowrap">
          <span>asked {question.timestamp} by </span>
          <a
            href={`https://stackoverflow.com/users/${question.user_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-700 hover:underline"
          >
            {question.user}
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
