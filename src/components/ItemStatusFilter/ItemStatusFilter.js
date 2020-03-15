import React from 'react';
import './ItemStatusFilter.css';

const ItemStatusFilter = () => {
    return (
        <div className="btn btn-group mt-0">
            <button type="button"
                className="btn btn-outline-info"
            >
                All
            </button>
            <button type="button"
                className="btn btn-outline-primary"
            >
                Active
            </button>
            <button type="button"
                className="btn btn-outline-secondary"
            >
                Done
            </button>
        </div>
    );
};

export default ItemStatusFilter;
