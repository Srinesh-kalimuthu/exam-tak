import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomUsers.css'; // Import your CSS file for styling

const RandomUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=3');
                const data = response.data.results;
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();

        const interval = setInterval(fetchUsers, 30000); // Fetch every 30 seconds

        return () => {
            clearInterval(interval); // Clear the interval when the component unmounts
        };
    }, []);

    return (
        <div className="random-users">
            <h1>Random Users</h1>
            <div className="user-list">
                {users.map(user => (
                    <div className="user" key={user.login.uuid}>
                        <img src={user.picture.large} alt="User" />
                        <div className="user-info">
                            <p className="user-name">{`${user.name.first} ${user.name.last}`}</p>
                            <p className="user-email">{user.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomUsers;
