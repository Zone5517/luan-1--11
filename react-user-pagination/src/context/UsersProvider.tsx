import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { usersReducer } from '../reducers/usersReducer';
import { UsersState, UsersAction } from '../types';

const initialState: UsersState = {
    users: [],
    currentPage: 1,
    totalPages: 0,
    loading: false,
};

const UsersContext = createContext<{
    state: UsersState;
    dispatch: React.Dispatch<UsersAction>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const UsersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(usersReducer, initialState);

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {children}
        </UsersContext.Provider>
    );
};

export const useUsers = () => {
    return useContext(UsersContext);
};