import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';

const User = () => {
    const {id} = useParams();
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users/' + id).then(res =>{
            console.log(res)
           setUser(res.data); 
           setLoading(false);
        })
    }, [id]);

    const userDetail = loading ? (<div>로딩중</div>):(
        <div className='userDetail'>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )

    return (
        <div className='userWrap'>
            <h2>정보</h2>
            {userDetail}
        </div>
    );
};

export default User;