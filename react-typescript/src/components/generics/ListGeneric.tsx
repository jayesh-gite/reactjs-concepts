
type ListProps<T> = {
    //items: string[] | number[],
    items: T[]
    //onClick: (value: string | number) => void
    onClick: (vaule: T) => void
}
export const ListGenetic = <T extends string | number>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>Items of list</h2>
            {items.map((item: any, i) => (
                <div key={i} onClick={() => onClick(item)}>{(item)}</div>
            ))}
        </div>)
}