import PropTypes from 'prop-types';
import { useState } from 'react';

// RatingStar.propTypes = {
//   maxRating: PropTypes.number,
//   color: PropTypes.string,
//   size: PropTypes.number,
// };

export default function RatingStar({
  maxRating = 10,
  color = '#fcc419',
  size = 24,
  onSetRating,
}) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const containerStyle = {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  };

  const starContainerStyle = {
    display: 'flex',
  };

  const textStyle = {
    lineHeight: 1,
    margin: 0,
    color: color,
    fontSize: `${size}px`,
  };

  function handleRatingStar(rating) {
    setTempRating(rating);
  }

  function handleResetRating() {
    setTempRating(0);
  }

  function handleSetRatingStar(rating) {
    setRating(rating);
    if (onSetRating) onSetRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            color={color}
            size={size}
            handleSetRatingStar={() => handleSetRatingStar(index + 1)}
            full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
            handleResetRating={handleResetRating}
            handleRatingStar={() => handleRatingStar(index + 1)}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ''}</p>
    </div>
  );
}

function Star({
  color,
  size,
  handleRatingStar,
  handleResetRating,
  full,
  handleSetRatingStar,
}) {
  const starStyle = {
    height: `${size}px`,
    width: `${size}px`,
    display: 'block',
    cursor: 'pointer',
  };
  return (
    <span
      style={starStyle}
      onClick={handleSetRatingStar}
      onMouseEnter={handleRatingStar}
      onMouseLeave={handleResetRating}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
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
  );
}
