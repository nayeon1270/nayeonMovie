import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './../components/UserList';

const Users = () => {
    const [users, setUsers]= useState([]);


    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            console.log(response)
            setUsers(response.data);
            //console.log(users)
           // console.log(setUsers)
        })
    }, [])
    return (
        <div className='usersWrap'>
            <h4>Users</h4>
           <UserList  users={users}/>
        </div>
    );
};

export default Users;