type HeadingProps = {
    children: string
}
const Heading = (props: HeadingProps) => {
    return (
        <div>
            <h2 style={{ background: 'red' }}>{props.children}</h2>
        </div>
    )
}
export default Heading;