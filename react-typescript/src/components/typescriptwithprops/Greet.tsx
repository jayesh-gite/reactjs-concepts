import { type } from "@testing-library/user-event/dist/type";

type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
    newMessageCount?: number
}
const Greet = (props: GreetProps) => {
    const { newMessageCount = 0 } = props;
    return (
        <div>
            {props.isLoggedIn ? <h2> Welcome {props.name}! you have {props.messageCount} unread messages</h2> : <h2>Welcome Guest</h2>}

            <p>new messages {newMessageCount}</p>
        </div>
    )
}

export default Greet;