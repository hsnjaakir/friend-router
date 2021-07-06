import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    const {name, email, phone, website, username} = friend;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    return (
        <div>
            <p>This is friend {friendId}</p>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h4>{phone}</h4>
            <h5>{website}</h5>
            <h6>{username}</h6>
        </div>
    );
};

export default FriendDetails;