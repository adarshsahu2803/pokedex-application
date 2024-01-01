import '../css/searchBar.css';

const searchBar = ({ setSearchVisibility, value, handleSearchInputChange }) => {

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        handleSearchInputChange(inputValue);
    };

    const handleSearch = () => {
        setSearchVisibility(true);
    };

    return (
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter search term"
                    value={value}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
    );
};

export default searchBar;