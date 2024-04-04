import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovieCast from "../../api/apiCast";
import css from './MovieCast.module.css'

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId, setCast);
  }, [movieId]);
    
  if (!cast) {
    return <div>Loading...</div>;
  }

    const updatedCast = cast.map((member) => {
        const { id, name, character, profile_path } = member;
        return {
            id,
            name,
            character,
            profile_path,
        };
    });

    return (
        <div className={css.castContainer}>
          {updatedCast.map((member) => (
            <div key={member.id} className={css.castBox}>
                <h3 className={css.castName}>{member.name}</h3>
                <p className={css.castRole}>Character: {member.character}</p>
                {member.profile_path && (
                    <div  className={css.castImgBox}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                            alt={member.name}
                            className={css.castImg}
                        />
                    </div>
                )}
            </div>
            ))}
        </div>
    );
};

export default MovieCast;
