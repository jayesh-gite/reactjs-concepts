import { useCallback, useState } from "react";

const Search1 = () => {

    const [suggestions, setSuggestions] = useState("");
    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500)
        }
    }
    const handleChange = (value) => {
        fetch(`https://demo.dataverse.org/api/search?q=${value}`)
            .then((res) => res.json())
            .then((json) => setSuggestions(json.data.items))
    }
    const optimizedFunction = useCallback(debounce(handleChange), [handleChange]);
    return (
        <div>
            Search method 1
            <h2 style={{ textAlign: "center" }}>Debouncing in React</h2>
            <input
                type="text"
                className="searhc"
                placeholder="Enter search items here..."
                onChange={(e) => optimizedFunction(e.target.value)}
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

export default Search1;