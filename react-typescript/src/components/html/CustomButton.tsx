import { Children } from "react"

type CustomButtonProps = {
    varient: 'primary' | 'secondary'
} & React.ComponentProps<'button'>
export const CustomButton = ({ varient, children, ...rest }: CustomButtonProps) => {
    return <div>
        <button
            className={`class-with-${varient}`} {...rest}
        >{children}</button>
    </div >
}