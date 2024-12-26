import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
import './index.css';
import App from './App';
import Modal from './Modal';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Modal /> */}
    <App />
    {/* <StarRating
      maxRating={5}
      message={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating maxRating={5} size={24} /> */}
  </React.StrictMode>
);
