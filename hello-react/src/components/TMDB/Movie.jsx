import React from "react";

const Movie = ({ movie }) => {
  return (
    <div>
      <p>제목 : {movie.title}</p>

      <p>줄거리 : {movie.overview}</p>

      <p>개봉일 : {movie.release_date}</p>

      <p>평균 평점 : {movie.vote_average}</p>
    </div>
  );
};

export default Movie;
