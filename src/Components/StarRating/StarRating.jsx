/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
import { useState } from "react";

/* eslint-disable react/prop-types */
const StarRating = ({
  maxRating = 5,
  color = "yellow",
  size = 30,
  defaultRating = 0,
  setStarRating,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const ratingStyle = {
    fontSize: "1.5rem",
    marginLeft: "0.8rem",
  };

  const ratingHandler = (rating) => {
    setRating(rating);
    setStarRating(rating);
  };

  return (
    <>
      <div style={container}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            onClick={() => ratingHandler(i + 1)}
            onMouseLeave={() => setTempRating(0)}
            onMouseEnter={() => setTempRating(i + 1)}
            fullStar={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
            key={i}
          />
        ))}
        <p style={ratingStyle}> {tempRating ? tempRating : rating}</p>
      </div>
    </>
  );
};

export default StarRating;

const Star = ({
  onClick,
  fullStar,
  onMouseEnter,
  onMouseLeave,
  size,
  color,
}) => {
  return (
    <>
      <span
        role="button"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {fullStar ? (
          <svg
            width={size}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={color}
            stroke={color}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ) : (
          <svg
            width={30}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        )}
      </span>
    </>
  );
};

// import React, { useState } from "react";
// import { PropTypes } from "prop-types";

// const containerStyle = {
//   display: "flex",
//   alignItem: "center",
//   justifyContent: "center",
// };

// const containerItem = {
//   display: "flex",
//   fontSize: "20px",
// };

// const Index = ({
//   maxRating = 5,
//   defaultRating = 0,
//   color = "yellow",
//   size = "20px",
//   messages = [],
//   onSetRating,
// }) => {
//   const [rating, isRating] = useState(defaultRating);
//   const [tempRating, setTempRating] = useState(0);

//   const ratingHandler = (rating) => {
//     isRating(rating);
//     onSetRating(rating);
//   };

//   const textStyle = {
//     marginLeft: "20px",
//     color,
//     fontSize: `${size / 1.2}`,
//   };
//   return (
//     <div style={containerStyle}>
//       <div style={containerItem}>
//         {Array.from({ length: maxRating }, (_, i) => (
//           <Star
//             key={i}
//             onRating={() => ratingHandler(i + 1)}
//             full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
//             onHoverIn={() => setTempRating(i + 1)}
//             onHoverOut={() => setTempRating(0)}
//             color={color}
//             size={size}
//           />
//         ))}
//       </div>

//       <p style={textStyle}>
//         {messages.length === maxRating
//           ? messages[tempRating ? tempRating - 1 : rating - 1]
//           : tempRating || rating || ""}
//       </p>
//     </div>
//   );
// };

// export default Index;

// Index.propTypes = {
//   maxRating: PropTypes.number,
//   size: PropTypes.string,
//   color: PropTypes.string,
// };

// function Star({ onRating, full, onHoverIn, onHoverOut, color, size }) {
//   const starSyle = {
//     width: `${size}`,
//     height: `${size}`,
//     display: "block",
//     curser: "pointer",
//   };
//   return (
//     <span
//       onMouseEnter={onHoverIn}
//       onMouseLeave={onHoverOut}
//       onClick={onRating}
//       role="button"
//       style={starSyle}
//     >
//       {full ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill={color}
//           stroke={color}
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke={color}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="{2}"
//             d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//           />
//         </svg>
//       )}
//     </span>
//   );
// }
