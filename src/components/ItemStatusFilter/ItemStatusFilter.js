import React, { Component } from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component
{
    buttons = [
        {
            name: 'all',
            label: 'All',
        },
        {
            name: 'active',
            label: 'Active',
        },
        {
            name: 'done',
            label: 'Done',
        },
    ];

    render () {
        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            let cssClass;

            if (isActive) {
               cssClass = "btn btn-info";
            }

            if (!isActive) {
                cssClass = "btn btn-outline-secondary";
            }

            return (
                <button type="button"
                    className={cssClass}
                    key={name}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            );
        });

        return (
            <div className="btn btn-group mt-0">
                {buttons}
            </div>
       );
    }
}
