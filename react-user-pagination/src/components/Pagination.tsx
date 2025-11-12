import React from 'react';
import { useUsers } from '../hooks/useUsers';

const Pagination: React.FC = () => {
    const { state, dispatch } = useUsers();
    const { currentPage, totalPages } = state.paginationInfo;

    const handlePageChange = (page: number) => {
        dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
    };

    return (
        <div className="pagination">
            <button 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;