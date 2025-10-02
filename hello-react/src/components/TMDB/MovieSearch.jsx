import React, { useState } from "react";
import axios from "axios";
import Movie from "./Movie";

const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];
const BASE_URL = `https://api.themoviedb.org/3`;

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(event.target.elements.query.value);
  };

  const searchMovies = async (query) => {
    const config = {
      method: "GET",
      url: `${BASE_URL}/search/movie`,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "ko-KR",
        query: query,
      },
    };
    const response = await axios(config);
    const result = response.data.results;
    //console.log(response.data.results);

    if (result.length === 0) {
      alert("검색 결과가 없습니다.");
      setMovies(null);
      setQuery("");
      return;
    }

    setMovies(result);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            value={query}
            placeholder="영화 이름"
            onChange={handleChange}
          />
          <input type="submit" value="검색" />
        </form>
        <ul>
          {/* Movie 컴포넌트를 활용하여 검색된 영화 데이터를 반복 생성하여 표시 */}
          {movies === null ? (
            <></>
          ) : (
            movies.map((movie) => (
              <li key={movie.id} className="border mt-2">
                <Movie movie={movie} />
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default MovieSearch;
