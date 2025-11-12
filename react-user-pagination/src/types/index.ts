export interface User {
    id: number;
    name: string;
    email: string;
    // Adicione outros campos conforme necessário
}

export interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    totalUsers: number;
}

export interface UsersState {
    users: User[];
    currentPage: number;
    paginationInfo: PaginationInfo;
    loading: boolean;
}