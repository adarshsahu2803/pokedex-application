import React from 'react';

const TypeFilter = ({ types, onSelectType }) => {
    return (
        <select onChange={(e) => onSelectType(e.target.value)}>
            <option value="">All Types</option>
            {types.map((type) => (
                <option key={type} value={type}>
                    {type}
                </option>
            ))}
        </select>
    );
};

export default TypeFilter;