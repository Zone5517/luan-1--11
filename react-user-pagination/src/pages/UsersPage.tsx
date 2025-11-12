import React, { useContext, useEffect } from 'react';
import { UsersContext } from '../context/UsersContext';
import UserList from '../components/UserList';
import Pagination from '../components/Pagination';

const UsersPage: React.FC = () => {
    const { state, dispatch } = useContext(UsersContext);

    useEffect(() => {
        // Aqui você pode disparar uma ação para carregar os usuários
        // dispatch({ type: 'LOAD_USERS' });
    }, [dispatch]);

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <UserList users={state.users} />
            <Pagination 
                currentPage={state.currentPage} 
                totalPages={state.totalPages} 
                onPageChange={(page) => dispatch({ type: 'SET_CURRENT_PAGE', payload: page })} 
            />
        </div>
    );
};

export default UsersPage;