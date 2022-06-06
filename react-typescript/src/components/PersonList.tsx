type PersonListProps = {
    nameList: {
        first: string,
        last: string
    }[]
}
const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.nameList.map((name, i) => (
                <h2 key={i}>{name.first} {name.last}</h2>
            ))}
        </div>
    )
}

export default PersonList;