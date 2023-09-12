import { useParams } from "react-router-dom";

const Movie = () => {
  let { id } = useParams();
  console.log(id);

  return <div>Movie</div>;
};

export default Movie;
