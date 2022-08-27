import React from 'react';
import Card from '../Card/Card'
import MovieContainer from '../MovieContainer/MovieContainer'
import ModalInner from '../ModalInner/ModalInner'
import logo from '../../images/rancid-tomatillos.png'

// export default function Modal() {
//     return (
//       <div className="modal-display">
//         <ModalInner />
//       </div>
//     )
//   }
const Modal = ({ movies, selectAMovie }) => {
    const movieCard = movies.map(movie => {
        return(<Card 
            logo = {logo}
            posterImage={movie.poster_path}
            rating={movie.average_rating.toFixed(1)}
            // id={movie.id} 
            key={movie.id}
            selectAMovie={selectAMovie}
            backdropPath={movie.backdrop_path}
            releaseDate={movie.release_date}
            />
        )
    })
    return (
        <div className ="modal-container">
        {movieCard}
      </div>
        )
    }

export default Modal