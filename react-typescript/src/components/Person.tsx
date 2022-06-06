
type PersonPeops = {
    name: {
        first: string,
        last: string
    }
}
const Person = (props: PersonPeops) => {
    return (
        <div>{props.name.first} {props.name.last}</div>
    )
}
export default Person;