export const LOAD_USERS = 'LOAD_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const UPDATE_USERS = 'UPDATE_USERS';

export const loadUsers = (users) => ({
    type: LOAD_USERS,
    payload: users,
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
});

export const updateUsers = (users) => ({
    type: UPDATE_USERS,
    payload: users,
});