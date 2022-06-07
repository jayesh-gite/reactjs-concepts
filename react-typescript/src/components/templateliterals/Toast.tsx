
/** 
Position prop can be one of 
left-centre | left-top | left-bottom |center | center-top | center-bottom |
right-center | right-bottm | right-top | so on 

 **/
type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';
type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export const Toast = ({ position }: ToastProps) => {
    return (
        <div>
            Toast Notification Position = {position}
        </div>
    )
}