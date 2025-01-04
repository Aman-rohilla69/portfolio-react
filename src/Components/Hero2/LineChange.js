// import React, { useState } from 'react';

// const LineChange = () => {
//   const [isFirstLine, setIsFirstLine] = useState(true);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <div
//         className={`transition-transform duration-500 ${
//           isFirstLine ? 'translate-x-0' : 'translate-x-10'
//         }`}
//       >
//         {isFirstLine ? (
//           <p className="text-blue-500">This is the first line.</p>
//         ) : (
//           <p className="text-red-500">This is the second line.</p>
//         )}
//       </div>
//       <button
//         onClick={() => setIsFirstLine(!isFirstLine)}
//         className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
//       >
//         Toggle Line
//       </button>
//     </div>
//   );
// };

// export default LineChange;

import React, { useState, useEffect } from 'react';

const LineChange = () => {
  const [isFirstLine, setIsFirstLine] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstLine((prev) => !prev);
    }, 2000); // Change line every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className={`transition-transform duration-500 ${
          isFirstLine ? 'translate-x-0' : 'translate-x-0'
        }`}
      >
        {isFirstLine ? (
          <p className="text-blue-500">This is the first line.</p>
        ) : (
          <p className="text-red-500">This is the second line.</p>
        )}
      </div>
    </div>
  );
};

export default LineChange;

