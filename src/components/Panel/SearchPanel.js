import React from 'react';
import './SearchPanel.css';

const SearchPanel = () => {
    const searchText = 'Search text';

    return (
        <input
            placeholder={searchText}
            className="form-control search-panel-input"
        />
    );
};

export default SearchPanel;
