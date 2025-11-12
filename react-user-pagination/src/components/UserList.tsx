import React, { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

const UserList: React.FC = () => {
    const { users } = useContext(UsersContext);

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    );
};

export default UserList;