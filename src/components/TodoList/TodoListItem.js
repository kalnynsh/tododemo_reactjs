import React from 'react';

const TodoListItem = ({ content, important = false }) => {
    const spStyle = {
        paddingBottom: '2px',
        paddingTop: '2px',
        color: important ? 'tomato' : 'black',
        fontWeight: important ? 700 : 400,
        backgroundColor: important ? 'olive' : '#fff',
    };

    return <span style={spStyle}>{ content }</span>;
};

export default TodoListItem;
