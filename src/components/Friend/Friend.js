import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const Friend = (props) => {
    const { name, email,id } = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid gray',
        margin: '20px',
        padding: '20px',
        borderRadius: '5px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>More about id {id}</Link>
            <button onClick={()=>handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;