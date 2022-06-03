import { useState } from "react";
import DebounceInput from 'react-debounce-input';
const Search3 = () => {

    const [suggestions, setSuggestions] = useState("");
    const handleChange = (value) => {
        fetch(`https://demo.dataverse.org/api/search?q=${value}`)
            .then((res) => res.json())
            .then((json) => setSuggestions(json.data.items))
    }
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
            <h4 style={{ textAlign: "center" }}>Debouncing with React Debounce Input </h4>
            <DebounceInput
                minLength={2}
                className="search"
                placeholder="enter something"
                debounceTimeout={500}
                onChange={e => handleChange(e.target.value)}
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

export default Search3;