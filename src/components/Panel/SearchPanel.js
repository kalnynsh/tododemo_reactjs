import React from 'react';

const SearchPanel = () => {
    const searchText = 'Search text';
    const searchStyle = {
        fontSize: '16px',
        fontStyle: 'italic',
        paddingLeft: '10px',
        paddingTop: '6px',
        paddingBottom: '6px'
    };

    return (
        <input
            style={searchStyle}
            placeholder={searchText}
        />
    );
};

export default SearchPanel;
