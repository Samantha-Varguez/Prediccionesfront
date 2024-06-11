import React, { useState } from 'react';
import './Search.css';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        const elements = document.querySelectorAll('.searchable');

        elements.forEach(element => {
            const text = element.innerText.toLowerCase();
            if (text.includes(value)) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });

        setSearchTerm(value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="searchh-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <i className="search-icon fas fa-search"></i>
        </div>
    );
};

export default Search;
