import React, {useState} from 'react';

const MovieForm = ({addMovie}) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState ('');
    const [yearError, setYearError] = useState ('');

    const resetForm =  () =>{
        setMovieTitle('');
        setMovieYear('')
    }

    const validateFrom = () =>{
        resetErrors();
        let validated=true;
        if(!movieTitle){
            setTitleError('영화제목을 입력해주세요');
            validated=false;
        }
        if(!movieYear){
            setYearError('개봉연도를 넣어주세요')
            validated=false;
        }
        return validated;
    }


    const resetErrors =()=>{
        setTitleError('');
        setYearError('');
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(validateFrom()){
            addMovie({
                id:Date.now(),
                title: movieTitle,
                year: movieYear
            });
            resetErrors();
             resetForm();
        }
        
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='영화제목' value={movieTitle} onChange={e => setMovieTitle(e.target.value)}/>
            <div style={{color:'red', fontSize:"12px",marginBottom:'10px'}}>{titleError}</div>
            <input type="text" placeholder='개봉연도' value={movieYear} onChange={e => setMovieYear(e.target.value)} />
            <div style={{color:'red', fontSize:"12px", marginBottom:'10px'}}>{yearError}</div>
            <button type="submit">영화추가</button>
        </form>
    );
};

export default MovieForm;