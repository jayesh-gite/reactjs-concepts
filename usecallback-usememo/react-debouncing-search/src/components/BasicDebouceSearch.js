import { useEffect, useMemo, useState } from "react";
import debounce from 'lodash.debounce';
const FRUITS = [
    "apple",
    "orange",
    "banana",
    "pear",
    "grapefruit",
    "peach",
    "apricot",
    "nectarine",
    "plum",
    "mango",
    "strawberry",
    "kiwi",
    "passionfruit",
    "raspberry",
    "watermelon"
];
const BasicDebouceSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    let listToDisplay = FRUITS;
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    const renderFruitList = () => {
        return listToDisplay.map((fruit, i) => <p key={i}>{fruit}</p>)
    }
    if (searchTerm !== "") {
        console.log("...", searchTerm);
        listToDisplay = FRUITS.filter((fruit) => {
            return fruit.includes(searchTerm);
        })
    }
    const DebouceResults = useMemo(() => {
        return debounce(handleChange, 300);
    }, []);
    useEffect(() => {
        return () => {
            DebouceResults.cancel();
        }
    })
    return (
        <div>
            <h1>Fruit</h1>
            <input type="text" onChange={DebouceResults} />
            {renderFruitList()}
        </div>
    )

}
export default BasicDebouceSearch;