import { UsersAction, UsersState } from '../types';

const initialState: UsersState = {
    users: [],
    currentPage: 1,
    totalPages: 0,
    loading: false,
};

const usersReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case 'LOAD_USERS':
            return {
                ...state,
                users: action.payload.users,
                totalPages: action.payload.totalPages,
                loading: false,
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            };
        case 'UPDATE_USERS':
            return {
                ...state,
                users: action.payload,
            };
        case 'LOADING':
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default usersReducer;