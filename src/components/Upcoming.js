import React,{useEffect, useState} from 'react';
import axios from 'axios';
import styles from './Upcoming.module.scss';

const Upcoming = () => {
    const APIKEY=process.env.REACT_APP_TMDB_API_KEY;
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = async () => {
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=ko-KR`);

            console.log(response.data.results);
            setLoading(false);
            setUpcomingMovies(response.data.results);
        }catch(error){
           /*  console.error('Errer :', err); */
            setLoading(false)
        }
    }

    useEffect(() =>{
        getMovies();
    }, [])

    const getRandomMovie = () =>{
        const randomIndex=Math.floor(Math.random() * upcomingMovies.length);
        return upcomingMovies[randomIndex];
    }
    const randomMovie=getRandomMovie();
    return (
        <div>
            {
                isLoading ? (<div>로딩중....</div>) : (
                    <div className={styles.upMovie}>
                        <div className={styles.upBackImg}>
                            <img src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`} alt="" />
                        </div>
                        <div className={styles.upInfo}>
                            <img src={`https://image.tmdb.org/t/p/w300/${randomMovie.poster_path}`} alt="" className={styles.upPoster} />
                        </div>
                        <div className={styles.upInfoText}>
                            <p className={styles.upTitle}>{randomMovie.title}</p>
                            <p className={styles.upRelease}>{randomMovie.release_date}</p>
                        </div>
                    </div> 
                )
            }
        </div>
    );
};

export default Upcoming;