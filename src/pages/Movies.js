import React, { useState } from 'react';
import Movie from '../components/Movie';
import MovieForm from '../components/MovieFrom';

const Movies = () => {
    
    const [movies, setMovies]= useState ([]);
    
    const removeMovie = (id) =>{
        setMovies(movies.filter(movie => {
            return movie.id !==id;
        }))
    }
    const renderMovies = movies.length ? movies.map((movie)=>{
        return(
            <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
            )
    }) : '추가된 영화가 없습니다.'
    const addMovie = (movie) => {
        setMovies([...movies, movie])
    }
    return (
        <div className='movieWrap'>
            <h4>Movies List</h4>
            <MovieForm  addMovie={addMovie}/>
            {/* <div className='movie'>
                <div className="movie-title">{movies[0].title}</div>
                <div className="movie-year">{movies[0].year}</div>
            </div>
            <div className='movie'>
                <div className="movie-title">{movies[1].title}</div>
                <div className="movie-year">{movies[1].year}</div>
            </div>
            <div className='movie'>
                <div className="movie-title">{movies[2].title}</div>
                <div className="movie-year">{movies[2].year}</div>
            </div> */}
            {renderMovies}
        </div>
    );
};

export default Movies;