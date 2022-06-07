
/*
type RandomNumberProps = {
    value: number
    isPositive?: boolean
    isNegative?: boolean
    isZero?: boolean
}
*/

// If you want to restrict any props combination do following

type RandonNumberType = {
    value: string
}
type PositiveNo = RandonNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNo = RandonNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type Zero = RandonNumberType & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}
type RandomNumberProps = PositiveNo | NegativeNo | Zero;
export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero

}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'} {' '}
            {isZero && 'zero'}
        </div>
    )
}