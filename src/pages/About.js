import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


const About = () => {
    const APIKEY=process.env.REACT_APP_TMDB_API_KEY;
    const {id} = useParams();
    const[m, setAppm] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=ko-KR`).then(res => {
            console.log(res);
            setAppm(res.data);
            setLoading(false);
        })
    }, [])
    const movieDetail= loading ? (<div className='aboutload'>로딩중...</div>) : (
        <div className='aboutUser'>
            <div className="box">
                <img src={`http://image.tmdb.org/t/p/original/${m.poster_path}`} alt="" className='aboutImg' />
                <div className='overAndaver'>
                    <div className="overview">{m.overview}</div>
                    <div className="voteAverage">평점:{m.vote_average}</div>
                </div>
            </div>
        </div>
    )
    return (
        <div className='aboutWrap'>
            <h2 className='aboutTitle'>detail</h2>
            {movieDetail}
        </div>
    );
};

export default About;