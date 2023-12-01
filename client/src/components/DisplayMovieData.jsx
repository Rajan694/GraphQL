import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { useState } from "react";
const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      year
      isInfo
    }
  }
`;

const GET_MOVIES_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      title
      year
    }
  }
`;

function DisplayMovieData() {
  const [movieSearch, setMovieSearch] = useState("");
  const [getMovies, { error: getMoviesError, data: getMoviesData }] =
    useLazyQuery(GET_MOVIES_BY_NAME);
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      <div>
        <h3>Movie&apos;s list</h3>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {data.movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.isInfo ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex">
        <select
          className="form-select"
          onChange={(e) => setMovieSearch(e.target.value)}
        >
          <option value="">Select a movie</option>

          {data.movies.map((movie) => (
            <option key={movie.id} value={movie.title}>
              {movie.title}
            </option>
          ))}
        </select>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => getMovies({ variables: { name: movieSearch } })}
        >
          Get details
        </button>
      </div>
      <div>
        {getMoviesError && <p>Error: {getMoviesError.message}</p>}
        {getMoviesData && (
          <p>
            Movie: {getMoviesData.movie.title} - {getMoviesData.movie.year}
          </p>
        )}
      </div>
    </>
  );
}

export default DisplayMovieData;
