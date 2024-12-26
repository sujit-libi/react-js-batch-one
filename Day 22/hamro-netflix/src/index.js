import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
// import './index.css';
import App from './App';
import Modal from './Modal';
import RatingStar from './RatingStar';

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
    {/* <RatingStar maxRating={10} color={'red'} size={32} />
    <RatingStar maxRating={5} color={'green'} size={28} /> */}

    <RatingStar maxRating={10} color={'blue'} size={14} />

    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      message={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating maxRating={5} size={24} /> */}
  </React.StrictMode>
);
