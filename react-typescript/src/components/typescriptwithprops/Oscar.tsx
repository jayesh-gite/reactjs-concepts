type OscarProps = {
    children: React.ReactNode
}
const Oscar = (props: OscarProps) => {
    return (
        <div><h3>{props.children}</h3></div>
    )
}
export default Oscar;