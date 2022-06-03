import { useState } from "react";
import debounce from 'lodash.debounce';
const Search2 = () => {

    const [suggestions, setSuggestions] = useState("");
    const handleChangeWithLodash = debounce((value) => {
        fetch(`https://demo.dataverse.org/api/search?q=${value}`)
            .then((res) => res.json())
            .then((json) => setSuggestions(json.data.items))
    }, 500)
    const style = {
        display: 'inline - block',
        width: '33%',
        height: '500px',
        padding: '5px',
        border: '1px solid #97a3a5',
        backgroundColor: '#e8f6f6',
        float: 'right'
    }
    return (
        <div style={style}>
            <h4 style={{ textAlign: "center" }}>Debouncing with Lodash</h4>
            <input
                type="text"
                className="search"
                placeholder="Enter search items here..."
                onChange={(e) => handleChangeWithLodash(e.target.value)}
            />
            {suggestions.length > 0 && (
                <div className="autocomplete">{
                    suggestions.map((el, i) => (
                        <div key={i} className="autocomplete">{el.name}</div>
                    ))
                }</div>
            )}

        </div>
    );
}

export default Search2;