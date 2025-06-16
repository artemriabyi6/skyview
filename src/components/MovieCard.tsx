import React from 'react';

interface MovieCardProps {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  resRef: React.RefObject<HTMLElement | null>;
  img: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ scrollToSection, resRef, img }) => {
  return (
    <div className="movie-card">
      <img src={img} alt="Bride Hard Poster" className="movie-poster" loading='lazy'/>

      <div className="movie-info">
        <h3 className="movie-title">Шпигунка на весіллі</h3>
        <div className="movie-times">18:00 | 20:30 | 22:45</div>

        <div className="movie-buttons">
          <button className="btn book" onClick={() => scrollToSection(resRef)}>
            Бронювати
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
